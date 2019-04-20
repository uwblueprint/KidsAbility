const express = require('express');

// allows routes to be sent out
const router = express.Router();
const db = require('../models/server.js');

// route for returning all entries
router.get('/', function(req, res){
	db.User.find()

	.then(function(user){
		res.json(user);
	})

	.catch(function(err){
		res.send(err);
	})
});

router.post('/post', function(req, res){
	
	//console.log(req.body);
	db.User.create(req.body)
	
	// status code 201 means created
	.then(function(user){
		res.status(201).json(user);
	})
	.catch(function(err){
		res.send(err);
	})
	
});

module.exports = router