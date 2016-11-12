
var connection = require('../config/connection.js');

var orm = {

	selectAll: function (tableInput, cb) {
		// e.g. SELECT * FROM burgers 
		var queryString = 'SELECT * FROM ' + tableInput;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	
	insertOne: function (table, col, val, cb) {
		// e.g. INSERT INTO burgers (burger_name) VALUES ('junior burger')
		var queryString = 'INSERT INTO ' + table;

		queryString = queryString + ' (';
		queryString = queryString + col;
		queryString = queryString + ') ';
		queryString = queryString + 'VALUES ( ? )';
	
		connection.query(queryString, [val], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
		
	updateOne: function (table, col, val, condition, cb) {
		// e.g. UPDATE burgers SET devoured=[true|false] WHERE id=8
		var queryString = 'UPDATE ' + table + ' SET ' + col + '=' + val;
		queryString += ' WHERE ' + condition;;

		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},

};

module.exports = orm;
