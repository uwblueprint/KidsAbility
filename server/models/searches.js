var mongoose = require('mongoose');

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
	
var searchSchema = new mongoose.Schema({	
    names: [name],
	services: [service],
	location: {
		type: {locationSchema}
	},
	minTime: Number,
	startDate: Date,
	endtDate: Date,
	startTime: Date,
	endTime: Date,
}, { collection: 'searches' });


var Search = mongoose.model('Search', searchSchema);

module.exports = Search;