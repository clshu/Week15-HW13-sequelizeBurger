'use strict';
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define('Burger', {
    burger_name: {type: DataTypes.STRING, allowNull: false},
    devoured: {type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false},
    // Sequelize doesn't have DataTypes.TIMESTAMP, so do some tweaking
    date: {
        type: 'TIMESTAMP',
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
      }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Burger;
};