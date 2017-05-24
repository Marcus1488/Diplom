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

      let result = [];

      for (let student of students) {
        let compareData = {};
        compareData.student = student;

        for (let schoolItem of schoolItems) {
          compareData[`schoolItems${schoolItem.id}`] = schoolItem;
          compareData[`schoolItems${schoolItem.id}`].dataValues.rating = yield db.Ratings.findOne({
            where: {
              studentId: student.id,
              itemId: schoolItem.id
            }
          });
          if (!compareData[`schoolItems${schoolItem.id}`].dataValues.rating || !compareData[`schoolItems${schoolItem.id}`].dataValues.rating.value) {
            res.status(200).json(null);
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
