'use strict';
const Promise = require('bluebird');

module.exports = function (sequelize, DataTypes) {
  let Holidays = sequelize.define('Holidays', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Holidays',
    classMethods: {
      addHoliday: Promise.coroutine(function*(data) {
        return Holidays.create({
          name: data.name,
          date: data.date
        });
      }),
      updateHoliday: Promise.coroutine(function*(data) {
        return Holidays.update({
          name: data.name,
          date: data.date
        },
        {
          where: {
            id: data.id
          }
        });
      }),
      deleteHoliday: Promise.coroutine(function*(id) {
        return Holidays.destroy(
        {
          where: {
            id: id
          }
        });
      }),
    }
  });
  return Holidays;
};
