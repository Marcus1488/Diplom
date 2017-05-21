'use strict';
const Promise = require('bluebird');

module.exports = function (sequelize, DataTypes) {
  let Ratings = sequelize.define('Ratings', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    value: {
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
    tableName: 'Ratings',
    classMethods: {
      addRating: Promise.coroutine(function*(data) {
        return Ratings.create({
          value: data.value,
          studentId: data.studentId,
          itemId: data.itemId
        });
      }),
      updateRating: Promise.coroutine(function*(id, data) {
        return Ratings.update({
            value: data.value,
            studentId: data.studentId,
            itemId: data.itemId
          },
          {where: {id: id}});
      }),
      deleteRating: Promise.coroutine(function*(id) {
        return Ratings.destroy({where: {id: id}});
      }),
      deleteRatingByItemId: Promise.coroutine(function*(id) {
        return Ratings.destroy({where: {itemId: id}});
      })
    }
  });
  return Ratings;
};
