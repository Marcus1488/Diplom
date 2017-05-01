'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Parents',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        secondName: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        addressWork: {
          type: Sequelize.STRING,
          allowNull: true,
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Parents');
  }
};
