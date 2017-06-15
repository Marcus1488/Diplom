const express = require('express'),
  router = express.Router();
const Promise = require('bluebird');
const path = require('path');
const fs = require('fs');
const db = require('../models');
const multer = require("multer");


module.exports = function (app) {
  app.use('/api', router);
};

router.get('/files', Promise.coroutine(function *(req, res, next) {
    try {
      let files = yield db.Files.findAll();

      res.status(200).json(files);
    } catch (err) {
      return next(err);
    }
  })
);

const storage = multer.diskStorage({
  destination: function (req, files, cb) {
    cb(null, `${path.resolve(__dirname, '../../uploads/')}`)
  },
  filename: function (req, files, cb) {
    cb(null, files.originalname);
  },
});


router.get('/file/:name', Promise.coroutine(function *(req, res, next) {
    try {
      let name = req.params.name;
      let pathProfileImage = `${path.resolve(__dirname, '../../uploads/')}/${name}`;
      if ( fs.existsSync(pathProfileImage) ) {
        res.sendFile(pathProfileImage);
      } else {
        res.status(404).json({
          error: 'File not exit !'
        })
      }
    } catch (err) {
      return next(err);
    }
  })
);

router.post('/file',
  multer({storage: storage}).fields([{name: 'uploadFile'}]),
  Promise.coroutine(function *(req, res, next) {
    try {
      let file = req.files.uploadFile[0];

      let createFile;

      if (file) {
        createFile = yield db.Files.create({
          name: file.filename
        })
      }

      res.status(200).json(createFile);
    } catch (err) {
      return next(err);
    }
  })
);

router.delete('/file/:id', Promise.coroutine(function *(req, res, next) {
    try {
      let id = req.params.id;

      let file = yield db.Files.findOne({where: {id: id}});

      yield db.Files.destroy({where: {id: id}});

      let pathProfileImage = `${path.resolve(__dirname, '../../uploads/')}/${file.name}`;

      if ( fs.existsSync(pathProfileImage) ) {
        fs.unlink(`${path.resolve(__dirname, '../../uploads/')}/${file.name}`);
      }

      res.status(200).json(file);
    } catch (err) {
      return next(err);
    }
  })
);
