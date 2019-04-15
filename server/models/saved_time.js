import User from './users';
var mongoose = require('mongoose');
	
	
var savedSchema = new mongoose.Schema({	
	Date: {
		type: String
	},
	Start: {
		type: String
	},
	End: {
		type: String
	}, 
	Name: {
		type: [String]
	},
	id:{
		type: Number
	},
	Location: {
		type: String
	},
	User: {
		type: User
	}
}, { collection: 'SavedTimes' });

	
var Saved = mongoose.model('Saved', savedSchema);

module.exports = Saved;
	