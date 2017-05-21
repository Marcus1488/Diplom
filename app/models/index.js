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
    Students:      sequelize.import(__dirname + '/students'),
    Groups:      sequelize.import(__dirname + '/groups'),
    Config:      sequelize.import(__dirname + '/config'),
    Parents:      sequelize.import(__dirname + '/parents'),
    Items:      sequelize.import(__dirname + '/items'),
    Ratings:      sequelize.import(__dirname + '/ratings'),
    Omissions:      sequelize.import(__dirname + '/omissions'),
    Months:      sequelize.import(__dirname + '/months')
  }
}

module.exports = global.db;
