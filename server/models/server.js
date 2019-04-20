const mongoose = require('mongoose');

// for debugging the database
mongoose.set('debug', true);

// connect to database server; if database doesn't exist, it will create it
mongoose.connect("mongodb+srv://greg:kidsability@kidsability-vswng.mongodb.net/ClientData", { useNewUrlParser: true }, 
	function (err){
	if (err){
		console.log('DB connection failed');
		throw err;
	} 
	console.log("DB connection successful.");
});

// need this for promises
mongoose.Promise = Promise;

// require the schema
module.exports.Schedule = require("./schedule");
module.exports.Saved = require("./saved_time");
module.exports.Search = require("./searches");
module.exports.User = require("./users");