const mongoose = require('mongoose');

const AuthSchema = new mongoose.Schema({
	id: {
		type: String,
		required: [true, 'Please add a title'],
		unique: true,
		trim: true,
		maxlength: [16, 'id cannot be more than 16 characters'],
	},
	password: {
		type: String,
		required: true,
		maxlength: [200, 'password cannot be more than 40 characters'],
	},
	name: {
		type: String,
		required: true,
	},
	nickname: {
		type: String,
		required: [true, 'Please add a title'],
		unique: true,
		maxlength: [16, 'id cannot be more than 16 characters'],
	},
	age: {
		type: Number,
	},
});

module.exports = mongoose.models.Auth || mongoose.model('Auth', AuthSchema);
