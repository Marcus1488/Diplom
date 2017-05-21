'use strict';
const Promise = require('bluebird');

module.exports = function (sequelize, DataTypes) {
  let Omissions = sequelize.define('Omissions', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    notSerious: {
      type: DataTypes.INTEGER,
    },
    serious: {
      type: DataTypes.INTEGER,
    },
    studentId: {
      type: DataTypes.INTEGER,
    },
    itemId: {
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'Omissions',
    classMethods: {
      addOmissions: Promise.coroutine(function*(data) {
        return Omissions.create({
          serious: data.serious,
          notSerious: data.notSerious,
          studentId: data.studentId,
          itemId: data.itemId
        });
      }),
      updateOmissions: Promise.coroutine(function*(id, data) {
        return Omissions.update({
            serious: data.serious,
            notSerious: data.notSerious,
            studentId: data.studentId,
            itemId: data.itemId
          },
          {where: {id: id}});
      }),
      deleteOmissions: Promise.coroutine(function*(id) {
        return Omissions.destroy({where: {id: id}});
      }),
      deleteOmissionsByItemId: Promise.coroutine(function*(id) {
        return Omissions.destroy({where: {itemId: id}});
      })
    }
  });
  return Omissions;
};
