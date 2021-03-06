var mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
	Date: {
		type: String
	},
	Start: {
		type: String
	},
	End: {
		type: String
	}, 
	Duration: {
		type: Number
	},
	LastName: {
		type: String
	},
	FirstName: {
		type: String
	},
	ID:{
		type: Number
	},
	Email: {
		type: String
	},
	ClientLast: {
		type: String
	},
	ClientFirst: {
		type: String
	},
	ClientID: {
		type: String
	},
	Location: {
		type: String
	},
	Service: {
		type: String
	},
	Treatment: {
		type: String
	},
	Program: {
		type: String
	},
	ServiceDescription: {
		type: String
	}
}, { collection: 'BookedTimes' });

	
var Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
	