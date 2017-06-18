const express = require('express'),
  router = express.Router();
const Promise = require('bluebird');
const _ = require('lodash');
const db = require('../models');


module.exports = function (app) {
  app.use('/api', router);
};

router.get('/students', Promise.coroutine(function *(req, res, next) {
    try {
      let config = yield db.Config.findAll();
      let students = yield db.Students.findAll({where: {groupId: config[0].activeGroupId}});

      for (let student of students){
        if (student.motherId) {
          let mother = yield db.Parents.findOne({where: {id: student.motherId}});
          student.dataValues.mother = mother;
        }
        if (student.fatherId) {
          let father = yield db.Parents.findOne({where: {id: student.fatherId}});
          student.dataValues.father = father;
        }
      }

      res.status(200).json(students);
    } catch (err) {
      return next(err);
    }
  })
);

router.get('/students/groupAssets', Promise.coroutine(function *(req, res, next) {
    try {
      let config = yield db.Config.findAll();
      let students = yield db.Students.findAll({where: {groupId: config[0].activeGroupId}});

      students = _.filter(students, student => {
        if (student.groupAsset !== -1) {
          return student
        }
      });

      for (let student of students){
        if (student.motherId) {
          let mother = yield db.Parents.findOne({where: {id: student.motherId}});
          student.dataValues.mother = mother;
        }
        if (student.fatherId) {
          let father = yield db.Parents.findOne({where: {id: student.fatherId}});
          student.dataValues.father = father;
        }
      }

      res.status(200).json(students);
    } catch (err) {
      return next(err);
    }
  })
);

router.get('/students/beneficiaries', Promise.coroutine(function *(req, res, next) {
    try {
      let config = yield db.Config.findAll();
      let students = yield db.Students.findAll({where: {groupId: config[0].activeGroupId, beneficiaries: true}});

      for (let student of students){
        if (student.motherId) {
          let mother = yield db.Parents.findOne({where: {id: student.motherId}});
          student.dataValues.mother = mother;
        }
        if (student.fatherId) {
          let father = yield db.Parents.findOne({where: {id: student.fatherId}});
          student.dataValues.father = father;
        }
      }

      res.status(200).json(students);
    } catch (err) {
      return next(err);
    }
  })
);

router.get('/students/parent', Promise.coroutine(function *(req, res, next) {
    try {
      let config = yield db.Config.findAll();
      let students = yield db.Students.findAll({where: {groupId: config[0].activeGroupId}});

      students = _.filter(students, (student) => {
        if (!student.motherId || !student.fatherId) {
          return student;
        }
      });

      for (let student of students){
        if (student.motherId) {
          let mother = yield db.Parents.findOne({where: {id: student.motherId}});
          student.dataValues.mother = mother;
        }
        if (student.fatherId) {
          let father = yield db.Parents.findOne({where: {id: student.fatherId}});
          student.dataValues.father = father;
        }
      }

      res.status(200).json(students);
    } catch (err) {
      return next(err);
    }
  })
);

router.post('/students', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body;

      if (data.mother) {
        let mother = yield db.Parents.addParent(data.mother);
        data.motherId = mother.id;
      }

      if (data.father) {
        let father = yield db.Parents.addParent(data.father);
        data.fatherId = father.id;
      }

      let student = yield db.Students.addStudent(data);

      res.status(200).json(student);
    } catch (err) {
      return next(err);
    }
  })
);

router.put('/students', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body;

      if (data.mother) {
        let mother;
        if (data.motherId) {
          mother = yield db.Parents.updateParent(data.mother);
        } else {
          mother = yield db.Parents.addParent(data.mother);
        }
        data.motherId = mother.id;
      } else {
        if (data.motherId) {
          yield db.Parents.destroy({
            where: {
              id: data.motherId
            }
          });
        }
        data.motherId = null;
      }

      if (data.father) {
        let father;
        if (data.fatherId) {
          father = yield db.Parents.updateParent(data.father);
        } else {
          father = yield db.Parents.addParent(data.father);
        }
        data.fatherId = father.id;
      } else {
        if (data.fatherId) {
          yield db.Parents.destroy({
            where: {
              id: data.fatherId
            }
          });
        }
        data.fatherId = null;
      }

      let student = yield db.Students.updateStudent(data);

      res.status(200).json(student);
    } catch (err) {
      return next(err);
    }
  })
);


router.delete('/students', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body;

      if (data.motherId) {
        yield db.Parents.deleteParent(data.motherId);
      }

      if (data.fatherId) {
        yield db.Parents.deleteParent(data.fatherId);
      }

      let student = yield db.Students.deleteStudent(data.id);

      res.status(200).json(student);
    } catch (err) {
      return next(err);
    }
  })
);
