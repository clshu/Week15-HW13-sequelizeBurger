'use strict';
var models = require("../models");
var sequelize = require("sequelize");
module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return models.Burger.bulkCreate(
      [
        {burger_name: "Double Cheese Burger"},
        {burger_name: "Italian BMT Burger"},
        {burger_name: "Triple Deck Burger"},
        {burger_name: "Home Style Chicken Buger"},
        {burger_name: "Asian Delight Burger"}
      ]
    );
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    
    
      return models.Burger.destroy({truncate: true}, {where:{burger_name: [
         "Double Cheese Burger",
         "Italian BMT Burger",
         "Triple Deck Burger",
         "Home Style Chicken Buger",
         "Asian Delight Burger"
      ]}});    
  }
};
