var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'diplom'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/diplom-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'diplom'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/diplom-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'diplom'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/diplom-production'
  }
};

module.exports = config[env];
