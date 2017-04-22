/**
 * Created by MARK on 22.04.2017.
 */
'use strict';
let Promise = require('bluebird');
let coroutine = Promise.coroutine;

module.exports = function (sequelize, DataTypes) {
  let Students = sequelize.define('Students', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dateOfBirthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    birthPlace: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passportSeries: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passportNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    passportDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    addressIndex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressRegion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressArea: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressCity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressStreet: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressHouse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    addressFlat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    studentTicket: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    beneficiaries: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    motherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fatherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Students',
    classMethods: {

    }
  });
  return Students;
};
