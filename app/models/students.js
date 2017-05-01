'use strict';
const Promise = require('bluebird');

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
      allowNull: true,
    },
    birthPlace: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passportSeries: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passportNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    passportDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    addressIndex: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addressRegion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addressArea: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addressCity: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addressStreet: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addressHouse: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addressFlat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    studentTicket: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    reasonBeneficiaries: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    beneficiaries: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    motherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    fatherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    groupAsset: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Students',
    classMethods: {
      addStudent: Promise.coroutine(function*(data) {
        return Students.create({
          firstName: data.firstName,
          lastName: data.lastName,
          secondName: data.secondName,
          dateOfBirthday: data.dateOfBirthday,
          birthPlace: data.birthPlace,
          passportSeries: data.passportSeries,
          passportNumber: data.passportNumber,
          passportDate: data.passportDate,
          addressIndex: data.addressIndex,
          addressRegion: data.addressRegion,
          addressArea: data.addressArea,
          addressCity: data.addressCity,
          addressStreet: data.addressStreet,
          addressHouse: data.addressHouse,
          addressFlat: data.addressFlat,
          phone: data.phone,
          studentTicket: data.studentTicket,
          beneficiaries: data.beneficiaries,
          reasonBeneficiaries: data.reasonBeneficiaries,
          motherId: data.motherId,
          fatherId: data.fatherId,
          groupId: data.groupId,
          groupAsset: data.groupAsset
        });
      }),
      updateStudent: Promise.coroutine(function*(data) {
        return Students.update({
          firstName: data.firstName,
          lastName: data.lastName,
          secondName: data.secondName,
          dateOfBirthday: data.dateOfBirthday,
          birthPlace: data.birthPlace,
          passportSeries: data.passportSeries,
          passportNumber: data.passportNumber,
          passportDate: data.passportDate,
          addressIndex: data.addressIndex,
          addressRegion: data.addressRegion,
          addressArea: data.addressArea,
          addressCity: data.addressCity,
          addressStreet: data.addressStreet,
          addressHouse: data.addressHouse,
          addressFlat: data.addressFlat,
          phone: data.phone,
          studentTicket: data.studentTicket,
          beneficiaries: data.beneficiaries,
          reasonBeneficiaries: data.reasonBeneficiaries,
          motherId: data.motherId,
          fatherId: data.fatherId,
          groupId: data.groupId,
          groupAsset: data.groupAsset
        },
        {
          where: {
            id: data.id
          }
        });
      }),
      deleteStudent: Promise.coroutine(function*(id) {
        return Students.destroy(
        {
          where: {
            id: id
          }
        });
      }),
    }
  });
  return Students;
};
