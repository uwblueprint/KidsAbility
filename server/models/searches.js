var mongoose = require('mongoose');
	
	
var searchSchema = new mongoose.Schema({	
    names: {
		type: [[name]]
	},
	services: { 
		type: [[service]]
	},
	location: {
		type: {locationSchema}
	},
	time: {
		type: {time}
	},
	timeOfDay: {
		type: {timeOfDay}
	},
	numSessions: {
		type: {numSession}
	}
}, { collection: 'searches' });

var name = new mongoose.Schema({
	first: {
		type: String
	},
	last: {
		type: String
	},
	label: {
		type: String
	},
	value: {
		type: String
	}
});

var service = new mongoose.Schema({
	label: {
		type: String
	},
	value: {
		type: String
	}
});

var locationSchema = new mongoose.Schema({
	label: {
		type: String
	},
	value: {
		type: String
	}
});

var numSession = new mongoose.Schema({
	label: {
		type: Number
	},
	value: {
		type: String
	}
});

var time = new mongoose.Schema({
	label: {
		type: Number
	},
	value: {
		type: String
	}
});

var timeOfDay = new mongoose.Schema({
	label: {
		type: String
	},
	value: {
		type: String
	}
});


var Search = mongoose.model('Search', searchSchema);

module.exports = Search;