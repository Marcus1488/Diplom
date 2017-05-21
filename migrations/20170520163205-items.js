'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Items',
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
        courseNumber: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        semester: {
          type: Sequelize.INTEGER,
          allowNull: true,
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Items');
  }
};
