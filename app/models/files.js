'use strict';
const Promise = require('bluebird');

module.exports = function (sequelize, DataTypes) {
  let Files = sequelize.define('Files', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    },
    path: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Files',
    classMethods: {

    }
  });
  return Files;
};
