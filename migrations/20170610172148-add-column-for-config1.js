'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return [
      queryInterface.addColumn(
        'Config',
        'login',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'Config',
        'password',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'Config',
        'department',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'Config',
        'speciality',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'Config',
        'discipline',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      ),
      queryInterface.addColumn(
        'Config',
        'teacher',
        {
          type: Sequelize.STRING,
          allowNull: true
        }
      )
    ];
  },

  down: function (queryInterface, Sequelize) {
    /*
     Add reverting commands here.
     Return a promise to correctly handle asynchronicity.

     Example:
     return queryInterface.dropTable('users');
     */
  }
};
