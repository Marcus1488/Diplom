'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Holidays',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        date: {
          type: Sequelize.DATE,
          allowNull: true,
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Holidays');
  }
};
