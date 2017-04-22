const express = require('express'),
  router = express.Router();
const db = require('../models');


module.exports = function (app) {
  app.use('/api', router);
};

router.get('/students', function (req, res, next) {
  db.Students.findAll()
    .then(function (item) {
      return res.json(item)
    })
    .catch(function () {
      return res.json({
        error: 'Students not found'
      });
    });
});
