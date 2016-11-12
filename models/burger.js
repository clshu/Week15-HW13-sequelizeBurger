/*
Here is where you setup a model for how to interface with the database.
*/

var orm = require('../config/orm.js');

var burger = {
	// select all burgers that are devoured or not devoured,
	// depending on val is true or false
	selectAll: function (cb) {
		orm.selectAll('burgers', function (res) {
			cb(res);
		});
	},
	// val is true or false
	insertOne: function (col, val, cb) {
		orm.insertOne('burgers', col, val, function (res) {
			cb(res);
		});
	},
	// val is true or false
	// condition:  e.g.  id=5
	updateOne: function (col, val, condition, cb) {
		orm.updateOne('burgers', col, val, condition, function (res) {
			cb(res);
		});
	},
};

module.exports = burger;
