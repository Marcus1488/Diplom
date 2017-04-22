'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('students',
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
          allowNull: false,
        },
        birthPlace: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        passportSeries: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        passportNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        passportDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        addressIndex: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        addressRegion: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        addressArea: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        addressCity: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        addressStreet: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        addressHouse: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        addressFlat: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        studentTicket: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        beneficiaries: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        motherId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        fatherId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        }
      });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('students');
  }
};
