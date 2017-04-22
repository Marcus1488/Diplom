const path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    root: rootPath,
    app: {
      name: 'diplom'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://bporwqsuawtuiz:03b528948ea61e5ea0d0c34fe469749318e2bf3ef2d8a59fb6a6ea648c3e9f60@ec2-54-247-99-159.eu-west-1.compute.amazonaws.com:5432/d9uovgpf3k33ca?ssl=true'
  },

  test: {
    root: rootPath,
    app: {
      name: 'diplom'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://bporwqsuawtuiz:03b528948ea61e5ea0d0c34fe469749318e2bf3ef2d8a59fb6a6ea648c3e9f60@ec2-54-247-99-159.eu-west-1.compute.amazonaws.com:5432/d9uovgpf3k33ca?ssl=true'
  },

  production: {
    root: rootPath,
    app: {
      name: 'diplom'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://bporwqsuawtuiz:03b528948ea61e5ea0d0c34fe469749318e2bf3ef2d8a59fb6a6ea648c3e9f60@ec2-54-247-99-159.eu-west-1.compute.amazonaws.com:5432/d9uovgpf3k33ca?ssl=true'
  }
};

module.exports = config[env];
