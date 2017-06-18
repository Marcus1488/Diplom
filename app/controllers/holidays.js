const express = require('express'),
  router = express.Router();
const Promise = require('bluebird');
const _ = require('lodash');
const db = require('../models');
const moment = require('moment');


module.exports = function (app) {
  app.use('/api', router);
};

router.get('/holidays', Promise.coroutine(function *(req, res, next) {
    try {
      let holidays = yield db.Holidays.findAll();

      res.status(200).json(holidays);
    } catch (err) {
      return next(err);
    }
  })
);
router.get('/holidays/:date', Promise.coroutine(function *(req, res, next) {
    try {
      let date = new Date(req.params.date);
      let month =  moment(date).get('month');
      let day =  moment(date).get('date');

      let holidays = yield db.Holidays.findAll();

      holidays = _.filter(holidays, holiday => {
        let newMonth =  moment(holiday.date).get('month');
        let newDay =  moment(holiday.date).get('date');

        if (month === newMonth && day === newDay) {
          return holiday
        }
      });

      let config = yield db.Config.findAll();
      let students = yield db.Students.findAll({where: {groupId: config[0].activeGroupId}});

      let birthdateList = [];
        _.forEach(students, (student) => {
        let newMonth =  moment(student.dateOfBirthday).get('month');
        let newDay =  moment(student.dateOfBirthday).get('date');

        if (month === newMonth && day === newDay) {
          let obj = {
            name: `День народження - ${student.lastName + ' ' + student.firstName}`
          };
          birthdateList.push(obj);
        }
      });

      let allHolidays = holidays.concat(birthdateList);

      res.status(200).json(allHolidays);
    } catch (err) {
      return next(err);
    }
  })
);

router.post('/holidays', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body.data;
      let holiday = yield db.Holidays.addHoliday(data);

      res.status(200).json(holiday);
    } catch (err) {
      return next(err);
    }
  })
);

router.put('/holidays', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body.data;
      let holiday = yield db.Holidays.updateHoliday(data);

      res.status(200).json(holiday);
    } catch (err) {
      return next(err);
    }
  })
);

router.delete('/holidays/:id', Promise.coroutine(function *(req, res, next) {
    try {
      let id = req.params.id;
      let holiday = yield db.Holidays.deleteHoliday(id);

      res.status(200).json(holiday);
    } catch (err) {
      return next(err);
    }
  })
);
