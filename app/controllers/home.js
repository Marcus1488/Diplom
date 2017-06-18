var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/students', function (req, res, next) {
  res.render('index');
});

router.get('/parents', function (req, res, next) {
  res.render('index');
});

router.get('/studies', function (req, res, next) {
  res.render('index');
});

router.get('/documentation', function (req, res, next) {
  res.render('index');
});
