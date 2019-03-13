var mongoose = require('mongoose');
	LastName: {
		type: String
	},
	FirstName: {
		type: String
	},
}, { collection: 'SavedTimes' });

	
var Saved = mongoose.model('Saved', savedSchema);

module.exports = Saved;
	