var mongoose = require('mongoose');
	
var userSchema = new mongoose.Schema({	
	Name: {
		type: String
	},
}, { collection: 'Users' });

	
var User = mongoose.model('User', userSchema);

module.exports = User;