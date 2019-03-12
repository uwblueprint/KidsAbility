const express = require('express');

// allows routes to be sent out
const router = express.Router();
const db = require('../models/server.js');

router.get('/', function(req, res){
	
	//get all unique clinicians
	//treats entire object as a dictionary key
	db.Schedule.aggregate([
		{ $group: { _id: {First: "$FirstNaMe", Last: "$LastName"}}}
	])
	
	.then(function(found){
		console.log(res);
		res.json(found);
	})
	.catch(function(err){
		res.send(err);
	})
});


module.exports = router