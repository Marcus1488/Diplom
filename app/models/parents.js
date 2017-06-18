'use strict';
const Promise = require('bluebird');

module.exports = function (sequelize, DataTypes) {
  let Parents = sequelize.define('Parents', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    secondName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    addressWork: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Parents',
    classMethods: {
      addParent: Promise.coroutine(function*(data) {
        return Parents.create({
          firstName: data.firstName,
          lastName: data.lastName,
          secondName: data.secondName,
          phone: data.phone,
          addressWork: data.addressWork
        });
      }),
      updateParent: Promise.coroutine(function*(data) {
        return Parents.update({
            firstName: data.firstName,
            lastName: data.lastName,
            secondName: data.secondName,
            phone: data.phone,
            addressWork: data.addressWork
          },
          {where: {id: data.id}});
      }),
      deleteParent: Promise.coroutine(function*(id) {
        return Parents.destroy({where: {id: id}});
      }),
    }
  });
  return Parents;
};
