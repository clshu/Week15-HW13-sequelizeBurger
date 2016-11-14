
var express = require('express');
var router = express.Router();
var models = require('../models');

// Route handlers

router.get('/burgers', function (req, res) {
	// SELECT * FROM burgers
	return models.Burger.findAll()
	.then(function (burgers) {
		var hbsObject = { burgers: burgers };
		return res.render('index', hbsObject);
	});
});

router.post('/burgers/create', function (req, res) {
	// INSERT INTO burgers (burger_name) VALUES (req.body.burger_name)
	return models.Burger.create({burger_name: req.body.burger_name})
	.then(function (burger) {
		//console.log(burger);
		return res.redirect('/burgers');
	});
});

router.put('/burgers/update/:id', function (req, res) {
	// UPDATE burgers SET devoured=req.body.devoured WHERE id=req.params.id
	return models.Burger.update({devoured: req.body.devoured}, {where: {id: req.params.id}})
	.then(function (burger) {
		return res.redirect('/burgers');
	});
});
// Make '/' the default route, any invalid route will fall back here
router.use('/', function (req, res) {
	res.redirect('/burgers');
});

module.exports = router;
