'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Ratings',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        value: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        studentId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        itemId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Ratings');
  }
};
