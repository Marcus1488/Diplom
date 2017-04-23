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
