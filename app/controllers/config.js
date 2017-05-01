const express = require('express'),
  router = express.Router();
const Promise = require('bluebird');
const db = require('../models');


module.exports = function (app) {
  app.use('/api', router);
};

router.get('/config', Promise.coroutine(function *(req, res, next) {
    try {
      let config = yield db.Config.findAll();
      res.status(200).json(config[0]);
    } catch (err) {
      return next(err);
    }
  })
);
