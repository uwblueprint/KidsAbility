var mongoose = require('mongoose');
	
	
var searchSchema = new mongoose.Schema({	
    ids: {
		type: [String]
	},
    names: {
		type: [{
			value: String,
    		label: String,
    		First: String,
    		Last: String,
		}],
	},
	services: { 
		type: [String]
	},
	location: {
		type: String
	},
	time: {
		type: String
	},
	timeOfDay: {
		type: String
	},
	numSessions: {
		type: Number
	},
	daysOfWeek: {
		type: String
	},
}, { collection: 'searches' });

var Search = mongoose.model('Search', searchSchema);

module.exports = Search;