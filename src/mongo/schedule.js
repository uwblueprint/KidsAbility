var mongoose = require('mongoose');

var scheduleSchema = new mongoose.Schema({
	date: {
		type: Date,
		required: 'Need a date.'
	},
	start_time: {
		type: String,
		required: 'Need a start time.'
	},
	end_time: {
		type: String,
		required: 'Need an end time.'
	}, 
	duration: {
		type: Number,
		default: 0.5
	},
	emp_name: {
		type: String
	},
	location: {
		type: String
	}
});

	
var ScheduleSchema = mongoose.model('ScheduleSchema', scheduleSchema);

module.exports = ScheduleSchema;
	