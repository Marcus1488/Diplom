const express = require('express'),
  router = express.Router();
const Promise = require('bluebird');
const _ = require('lodash');
const db = require('../models');


module.exports = function (app) {
  app.use('/api', router);
};

router.get('/parents', Promise.coroutine(function *(req, res, next) {
    try {
      let parents = yield db.Parents.findAll();

      for (let parent of parents) {
        let mother = yield db.Students.findOne({where: {motherId: parent.id}});
        let father = yield db.Students.findOne({where: {fatherId: parent.id}});
        parent.dataValues.student = mother || father;
      }

      res.status(200).json(parents);
    } catch (err) {
      return next(err);
    }
  })
);