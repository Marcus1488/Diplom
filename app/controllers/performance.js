const express = require('express'),
  router = express.Router();
const Promise = require('bluebird');
const _ = require('lodash');
const db = require('../models');


module.exports = function (app) {
  app.use('/api', router);
};

router.get('/items/:courseNumber/:semester', Promise.coroutine(function *(req, res, next) {
    try {
      let courseNumber = req.params.courseNumber;
      let semester = req.params.semester;
      let items = yield db.Items.findAll({
        where: {
          courseNumber: courseNumber,
          semester: semester
        }
      });

      res.status(200).json(items);
    } catch (err) {
      return next(err);
    }
  })
);

router.post('/items', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body;
      let items = yield db.Items.addItem(data);

      res.status(200).json(items);
    } catch (err) {
      return next(err);
    }
  })
);


router.delete('/items/:id', Promise.coroutine(function *(req, res, next) {
    try {
      let id = req.params.id;
      let items = yield db.Items.deleteItem(id);
      let rating = yield db.Ratings.deleteRatingByItemId(id);

      res.status(200).json(items);
    } catch (err) {
      return next(err);
    }
  })
);

router.put('/rating', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body;
      let rating;
      if (data.id) {
        rating = yield db.Ratings.updateRating(data.id, data);
      } else {
        rating = yield db.Ratings.addRating(data);
      }

      res.status(200).json(rating);
    } catch (err) {
      return next(err);
    }
  })
);

router.get('/performance/:courseNumber/:semester', Promise.coroutine(function *(req, res, next) {
    try {
      let courseNumber = req.params.courseNumber;
      let semester = req.params.semester;

      let config = yield db.Config.findAll();
      let students = yield db.Students.findAll({where: {groupId: config[0].activeGroupId}});

      let schoolItems = yield db.Items.findAll({
        where: {
          courseNumber: courseNumber,
          semester: semester
        }
      });

      let result = [];

      for (let student of students) {
        let compareData = {};
        compareData.student = student;
        compareData.student.dataValues.fullName =
          compareData.student.lastName + ' ' + compareData.student.firstName[0] + '. ' + compareData.student.secondName[0] + '.' ;

        for (let schoolItem of schoolItems) {
          compareData[`schoolItems${schoolItem.id}`] = schoolItem;
          compareData[`schoolItems${schoolItem.id}`].dataValues.rating = yield db.Ratings.findOne({
            where: {
              studentId: student.id,
              itemId: schoolItem.id
            }
          });
          if (!compareData[`schoolItems${schoolItem.id}`].dataValues.rating) {
            compareData[`schoolItems${schoolItem.id}`].dataValues.rating = {
              value: null,
              studentId: student.id,
              itemId: schoolItem.id
            }
          }
        }
        result.push(JSON.parse(JSON.stringify(compareData)));
      }

      res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  })
);


router.get('/performance/total/:courseNumber/:semester', Promise.coroutine(function *(req, res, next) {
    try {
      let courseNumber = req.params.courseNumber;
      let semester = req.params.semester;

      let config = yield db.Config.findAll();
      let students = yield db.Students.findAll({where: {groupId: config[0].activeGroupId}});

      let schoolItems = yield db.Items.findAll({
        where: {
          courseNumber: courseNumber,
          semester: semester
        }
      });

      let months = yield db.Months.findAll({
        where: {
          courseNumber: courseNumber,
          semester: semester
        }
      });

      if (schoolItems.length === 0) {
        return res.send([]);
      }

      let result = [];

      for (let student of students) {
        let compareData = {};
        compareData.student = student;
        compareData.student.dataValues.fullName =
          compareData.student.lastName + ' ' + compareData.student.firstName[0] + '. ' + compareData.student.secondName[0] + '.' ;
        compareData.student.dataValues.beneficiariesUk = compareData.student.beneficiaries ? 'Так' : 'Ні';

        compareData.averageScore = null;

        let score = null;
        let count = null;
        for (let schoolItem of schoolItems) {
          count++;

          compareData[`schoolItems${schoolItem.id}`] = schoolItem;
          compareData[`schoolItems${schoolItem.id}`].dataValues.rating = yield db.Ratings.findOne({
            where: {
              studentId: student.id,
              itemId: schoolItem.id
            }
          });
          if (!compareData[`schoolItems${schoolItem.id}`].dataValues.rating || !compareData[`schoolItems${schoolItem.id}`].dataValues.rating.value) {
            return res.send([]);
          }
          score += compareData[`schoolItems${schoolItem.id}`].dataValues.rating.value;
        }

        let sumOmissions = {
          serious: 0,
          notSerious: 0
        };

        if (months.length > 0) {
          for (let month of months) {
            let omission = yield db.Omissions.findOne({
              where: {
                studentId: student.id,
                itemId: month.id
              }
            });

            sumOmissions.serious += omission ? omission.serious : null;
            sumOmissions.notSerious += omission ? omission.notSerious : null;
          }
        }

        compareData.omission = {
          serious: sumOmissions.serious,
          notSerious: sumOmissions.notSerious,
          total: sumOmissions.serious + sumOmissions.notSerious
        };
        compareData.averageScore = (score/count).toFixed(2);
        result.push(JSON.parse(JSON.stringify(compareData)));
      }

      res.status(200).json(result);
    } catch (err) {
      return next(err);
    }
  })
);
