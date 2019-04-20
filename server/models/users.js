var mongoose = require('mongoose');
	
var userSchema = new mongoose.Schema({	
	FirstName: {
		type: String
	},
	LastName: {
		type: String
	}
}, { collection: 'Users' });

	
var User = mongoose.model('User', userSchema);

module.exports = User;