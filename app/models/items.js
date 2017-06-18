'use strict';
const Promise = require('bluebird');

module.exports = function (sequelize, DataTypes) {
  let Items = sequelize.define('Items', {
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
    tableName: 'Items',
    classMethods: {
      addItem: Promise.coroutine(function*(data) {
        return Items.create({
          name: data.name,
          courseNumber: data.courseNumber,
          semester: data.semester
        });
      }),
      deleteItem: Promise.coroutine(function*(id) {
        return Items.destroy({where: {id: id}});
      }),
    }
  });
  return Items;
};
