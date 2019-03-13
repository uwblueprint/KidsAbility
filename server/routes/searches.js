const express = require('express');

// allows routes to be sent out
const router = express.Router();
const db = require('../models/server.js');

// route for returning all entries
router.get('/', function(req, res){
	db.Search.find()

	.then(function(saved){
		res.json(saved);
	})

	.catch(function(err){
		res.send(err);
	})
});


router.get('/:searchId', function(req, res){
    console.log(req.params.searchId)
	db.Search.find({_id: req.params.searchId})

	.then(function(foundSearch){
		res.json(foundSearch);
	})
	.catch(function(err){
		res.send(err);
	})
});

router.post('/post', function(req, res){
	
	console.log("We have called the post function with the following body: ");
	//console.log(req.body);
	db.Search.create(req.body)
	
	// status code 201 means created
	.then(function(saved){
		console.log(req.body)
		console.log(res.status);
		res.status(201).json(saved);
	})
	.catch(function(err){
		console.log(res)
		res.send(err);
	})
});


module.exports = router