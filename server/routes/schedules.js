const express = require('express');

// allows routes to be sent out
const router = express.Router();
const db = require('../models/server.js');

// route for returning all entries
router.get('/', function(req, res){
	db.Schedule.find()

	.then(function(schedules){
		res.json(schedules);
	})

	.catch(function(err){
		res.send(err);
	})
});

// route for adding an entry to the database
// devnote: use postman if you want to access this
router.post('/', function(req, res){
	db.Schedule.create(req.body)

	// status code 201 means created
	.then(function(newSchedule){
		res.status(201).json(newSchedule);
	})
	.catch(function(err){
		res.send(err);
	})
});


// get by specified parameters
// will probably refactor route to make less ugly
router.get('/:firstName/:lastName', function(req, res){
	db.Schedule.find({FirstName: req.params.firstName, LastName: req.params.lastName})
	.then(function(foundSchedule){
		res.json(foundSchedule);
	})
	.catch(function(err){
		res.send(err);
	})
});

module.exports = router
