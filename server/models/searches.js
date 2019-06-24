var mongoose = require('mongoose');
	
	
var searchSchema = new mongoose.Schema({	
    ids: {
		type: [String]
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
		type: String
	}
}, { collection: 'searches' });

var Search = mongoose.model('Search', searchSchema);

module.exports = Search;