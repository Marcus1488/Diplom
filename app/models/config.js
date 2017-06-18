'use strict';

const Promise = require('bluebird');

module.exports = function (sequelize, DataTypes) {
  let Config = sequelize.define('Config', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    activeGroupId: {
      type: DataTypes.INTEGER,
    },
    login: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    department: {
      type: DataTypes.STRING,
    },
    speciality: {
      type: DataTypes.STRING,
    },
    discipline: {
      type: DataTypes.STRING,
    },
    teacher: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Config',
    classMethods: {
      changeConfig: Promise.coroutine(function*(data, id) {
        return Config.update({
            department: data.department,
            speciality: data.speciality,
            discipline: data.discipline,
            teacher: data.teacher,
            activeGroupId: data.activeGroupId
          },
          {
            where: {
              id: id
            }
          });
      })
    }
  });
  return Config;
};
