//import mongoose and bcrypt
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var Schema = mongoose.Schema; // Schema object

//build user model 
var UserSchema = new Schema({
	username: String,
	password: String,
	email: String,
	displayName: String
}, 
{
	//use collection userInfo
	collection: 'userInfo'
});



// Generating a Hash
UserSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

// Checking if password is valid
UserSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
}

//give schema name User
module.exports = mongoose.model('User', UserSchema);
