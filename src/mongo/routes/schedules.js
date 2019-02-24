const express = require('express');

// allows routes to be sent out
const router = express.Router();
const db = require('../models/server.js');
/*
router.get('/', function(req, res){
	res.send("schedule route test");
});*/

// this will get all
router.get('/', function(req, res){
	db.Schedule.find()

	.then(function(schedules){
		res.json(schedules);
	})

	.catch(function(err){
		res.send(err);
	})
});

module.exports = router