'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Omissions',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        notSerious: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        serious: {
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
    return queryInterface.dropTable('Omissions');
  }
};
