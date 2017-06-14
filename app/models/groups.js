'use strict';
const Promise = require('bluebird');

module.exports = function (sequelize, DataTypes) {
  let Groups = sequelize.define('Groups', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Groups',
    classMethods: {
      addGroup: Promise.coroutine(function*(name) {
        return Groups.create({
          name: name
        });
      }),
    }
  });
  return Groups;
};
