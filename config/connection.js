
var mysql = require('mysql');
// Make mysql connection work in localhost or Heroku
var localConnection = "mysql://root:puppetmaster@localhost:3306/burgers_db";
var dbConnection = process.env.JAWSDB_URL || localConnection;
var connection = mysql.createConnection(dbConnection);

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
