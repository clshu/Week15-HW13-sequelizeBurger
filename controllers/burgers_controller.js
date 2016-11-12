
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

// Route handlers

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		//console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	burger.insertOne('burger_name', req.body.burger_name, function () {
		res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	//console.log('condition', condition);

	burger.updateOne('devoured', req.body.devoured, condition, function () {
		res.redirect('/burgers');
	});
});
// Make '/' the default route, any invalid route will fall back here
router.use('/', function (req, res) {
	res.redirect('/burgers');
});

module.exports = router;
