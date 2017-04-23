const express = require('express'),
  router = express.Router();
const Promise = require('bluebird');
const db = require('../models');


module.exports = function (app) {
  app.use('/api', router);
};

router.get('/students', Promise.coroutine(function *(req, res, next) {
    try {
      let config = yield db.Config.findOne({where: {id: 1}});
      let students = yield db.Students.findAll({where: {groupId: config.activeGroupId}});
      res.status(200).json(students);
    } catch (err) {
      return next(err);
    }
  })
);

router.get('/students/beneficiaries', Promise.coroutine(function *(req, res, next) {
    try {
      let config = yield db.Config.findOne({where: {id: 1}});
      let students = yield db.Students.findAll({where: {groupId: config.activeGroupId, beneficiaries: true}});
      res.status(200).json(students);
    } catch (err) {
      return next(err);
    }
  })
);

router.post('/students', Promise.coroutine(function *(req, res, next) {
    try {
      let student = yield db.Students.addStudent(req.body);
      res.status(200).json(student);
    } catch (err) {
      return next(err);
    }
  })
);
