const express = require('express'),
  router = express.Router();
const Promise = require('bluebird');
const db = require('../models');
const jwt = require('jsonwebtoken');


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

router.post('/login', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body.data;
      let config = yield db.Config.findOne();

      if (data.login === config.login && data.password === config.password) {
        let token = jwt.sign(config.login, 'secret');
        return res.status(200).json(token);
      } else {
        return res.status(401.1).send({error: 'Login or password invalid'});
      }

    } catch (err) {
      return next(err);
    }
  })
);

router.post('/login/change', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body.data;
      let config = yield db.Config.findOne();

      let changePassword = yield db.Config.update({
        password: data.password
      }, {where: {id: config.id}});

      res.status(200).json(changePassword);
    } catch (err) {
      return next(err);
    }
  })
);
