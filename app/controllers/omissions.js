const express = require('express'),
  router = express.Router();
const Promise = require('bluebird');
const _ = require('lodash');
const db = require('../models');


module.exports = function (app) {
  app.use('/api', router);
};

router.get('/omissions/month/:courseNumber/:semester', Promise.coroutine(function *(req, res, next) {
    try {
      let courseNumber = req.params.courseNumber;
      let semester = req.params.semester;
      let months = yield db.Months.findAll({
        where: {
          courseNumber: courseNumber,
          semester: semester
        }
      });

      months = _.map(months, e => e.name);

      res.status(200).json(months);
    } catch (err) {
      return next(err);
    }
  })
);

router.put('/omissions', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body;
      let omissions;
      if (data.id) {
        omissions = yield db.Omissions.updateOmissions(data.id, data);
      } else {
        omissions = yield db.Omissions.addOmissions(data);
      }

      res.status(200).json(omissions);
    } catch (err) {
      return next(err);
    }
  })
);

router.put('/omissions/month', Promise.coroutine(function *(req, res, next) {
    try {
      let monthList = req.body.data;
      let courseNumber = req.body.courseNumber;
      let semester = req.body.semester;

      let savedMonths = yield db.Months.findAll({
        where: {
          courseNumber: courseNumber,
          semester: semester
        }
      });

      for (let month of monthList) {
        let findMonth = _.find(savedMonths, (e) => e.name === month);
        if (!findMonth) {
          let createMonth = yield db.Months.addItem(
            {
              name: month,
              courseNumber: courseNumber,
              semester: semester
            }
          );
        }
      }

      for (let month of savedMonths) {
        let findMonth = _.find(monthList, (e) => e === month.name);
        if (!findMonth) {
          let deleteMonth = yield db.Months.deleteItem(month.id);
          let deleteOmissions = yield db.Omissions.deleteOmissionsByItemId(month.id);
        }
      }

      res.status(200).json('OK');
    } catch (err) {
      return next(err);
    }
  })
);

router.get('/omissions/:courseNumber/:semester', Promise.coroutine(function *(req, res, next) {
    try {
      let courseNumber = req.params.courseNumber;
      let semester = req.params.semester;

      let config = yield db.Config.findAll();
      let students = yield db.Students.findAll({where: {groupId: config[0].activeGroupId}});

      let months = yield db.Months.findAll({
        where: {
          courseNumber: courseNumber,
          semester: semester
        }
      });

      let result = [];

      for (let student of students) {
        let compareData = {};
        compareData.student = student;

        for (let month of months) {
          compareData[`month${month.id}`] = month;
          compareData[`month${month.id}`].dataValues.rating = yield db.Omissions.findOne({
            where: {
              studentId: student.id,
              itemId: month.id
            }
          });
          if (!compareData[`month${month.id}`].dataValues.rating) {
            compareData[`month${month.id}`].dataValues.rating = {
              notSerious: null,
              serious: null,
              studentId: student.id,
              itemId: month.id
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
