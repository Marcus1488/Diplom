'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Files',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true
        },
        path: {
          type: Sequelize.STRING,
          allowNull: true
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Files');
  }
};
