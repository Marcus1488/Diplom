'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Config',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        activeGroupId: {
          type: Sequelize.INTEGER,
          allowNull: false
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Config');
  }
};
