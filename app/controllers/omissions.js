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
        }
      }

      res.status(200).json('OK');
    } catch (err) {
      return next(err);
    }
  })
);

