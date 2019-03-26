const express = require('express');

// allows routes to be sent out
const router = express.Router();
const db = require('../models/server.js');

// route for returning all entries
router.get('/', function(req, res){
	db.Saved.find()

	.then(function(saved){
		res.json(saved);
	})

	.catch(function(err){
		res.send(err);
	})
});

router.post('/', function(req, res){
	
	//console.log(req.body);
	db.Saved.create(req.body)
	
	// status code 201 means created
	.then(function(saved){
		console.log(req.body);
		console.log(res.status);
		res.status(201).json(saved);
	})
	.catch(function(err){
		res.send(err);
	})
	
});

router.delete('/:id', function(req, res){
	//res.send(req.body.id);
	db.Saved.deleteOne({_id: req.params.id})

	.then(function(deleted){
		res.status(202).json(deleted);
	})
	.catch(function(err){
		res.send(err);
	})
});

module.exports = router