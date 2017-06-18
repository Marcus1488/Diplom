'use strict';
const Promise = require('bluebird');

module.exports = function (sequelize, DataTypes) {
  let Months = sequelize.define('Months', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    courseNumber: {
      type: DataTypes.INTEGER,
    },
    semester: {
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Months',
    classMethods: {
      addItem: Promise.coroutine(function*(data) {
        return Months.create({
          name: data.name,
          courseNumber: data.courseNumber,
          semester: data.semester
        });
      }),
      deleteItem: Promise.coroutine(function*(id) {
        return Months.destroy({where: {id: id}});
      }),
    }
  });
  return Months;
};
