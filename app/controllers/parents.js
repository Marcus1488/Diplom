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

router.put('/parents/:id', Promise.coroutine(function *(req, res, next) {
    try {
      let data = req.body.data;
      let id = req.params.id;

      let parents = yield db.Parents.update({
          firstName: data.firstName,
          lastName: data.lastName,
          secondName: data.secondName,
          phone: data.phone,
          addressWork: data.addressWork
        },
        {where: {id: id}});

      res.status(200).json(parents);
    } catch (err) {
      return next(err);
    }
  })
);

router.delete('/parents/:id', Promise.coroutine(function *(req, res, next) {
    try {
      let id = req.params.id;

      let mother = yield db.Students.findOne({where: {motherId: id}});
      let father = yield db.Students.findOne({where: {fatherId: id}});

      if (mother) {
        let student = yield db.Students.update({
            motherId: null
          },
          {where: {id: mother.id}});
      }
      if (father) {
        let student = yield db.Students.update({
            fatherId: null
          },
          {where: {id: father.id}});
      }

      let deleteParent = yield db.Parents.deleteParent(id);

      res.status(200).json(deleteParent);
    } catch (err) {
      return next(err);
    }
  })
);
