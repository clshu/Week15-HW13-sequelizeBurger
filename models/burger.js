'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: {DataTypes.STRING, allowNull: false},
    devoured: {DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    date: {DataTypes.TIMESTAMP, allowNull: false}
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};