
//Index.js

	var mongoose = require('mongoose');
	//allow us to debug the database
	mongoose.set ('debug', true);
	
	//connect to database server; if database does not exist, it will create it
	mongoose.connect('mongodb://localhost/appointments');
	mongoose.Promise = Promise;
	
	//require the todo file
	module.exports.Appointments = require("./todo");

//---------------individual schema file----------------------
	var mongoose = require('mongoose');
	
	//required and default attributes enforce the schema
	var scheduleSchema = new mongoose.Schema({
	   clinician : {
	       type: String,
	       required: 'Name cannot be blank'
	   },
	   scheduled: {
	       type: Boolean,
	       default: false
	   },
	   created_date: {
	       type: Date,
	       default: Date.now
	   }
	});
	
	//exported as such
	var Schedule = mongoose.model('Schedule', todoSchema);
	
	//when this file is required, it will provide the model
	module.exports = Schedule;
