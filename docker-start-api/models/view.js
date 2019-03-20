var mongoose = require('mongoose');
var Schema = mongoose.Schema
var ViewSchema = new mongoose.Schema({
	title: String,
});

module.exports = mongoose.model('View',ViewSchema);
