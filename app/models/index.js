if (!global.hasOwnProperty('db')) {
  let Sequelize = require('sequelize'),
    sequelize = null;
  let config = require('../../config/config');
  let db = require('../../config/database.json');

    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(config.db, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     db.port,
      host:     db.host,
      logging:  true,
      dialectOptions: {
        ssl: true
      }
    });


  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    Students:      sequelize.import(__dirname + '/students')
    // add your other models here
  }
}

module.exports = global.db;
