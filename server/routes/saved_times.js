const express = require('express');

// allows routes to be sent out
const router = express.Router();
const db = require('../models/server.js');

// route for returning all entries
router.get('/', function(req, res){
	res.send("aosidjfaoisjdfoiasdjfoiasdoifasdf");
});

module.exports = router