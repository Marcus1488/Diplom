'use strict';

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

    }
  });
  return Config;
};
