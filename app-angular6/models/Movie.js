var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	title: String,
	duration: Number,
	rating: String,
	description: String,
	year: Number,
	tags: String,
	thumb: String,
	link: String,
	meta:{
		score: Number,
	}

});

module.exports = mongoose.model('Movie', MovieSchema);