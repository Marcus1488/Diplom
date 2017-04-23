'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Students',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        firstName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        lastName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        secondName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        dateOfBirthday: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        birthPlace: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        passportSeries: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        passportNumber: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        passportDate: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        addressIndex: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        addressRegion: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        addressArea: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        addressCity: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        addressStreet: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        addressHouse: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        addressFlat: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        studentTicket: {
          type: Sequelize.STRING,
          allowNull: true,
        },
        beneficiaries: {
          type: Sequelize.BOOLEAN,
          allowNull: true,
        },
        motherId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        fatherId: {
          type: Sequelize.INTEGER,
          allowNull: true,
        },
        groupId: {
          type: Sequelize.INTEGER,
          allowNull: true
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Students');
  }
};
