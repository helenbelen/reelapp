var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Movie = require('../models/Movie.js');


/* Get All Movies */

router.get('/', function(req,res,next){
	Movie.find(function(err,products){
		if (err) return next (err);
		res.json(products);
	});
});

/* Get Single Movie By Id */
router.get('/:id', function(req,res,next){
	Movie.findById(req.params.id, function(err,post){
		if(err) return next(err);
		res.json(post);
	});

});

/* Save Movie */
router.post('/', function(req,res,next){
	Movie.create(req.body, function(err,post){
		if (err) return next(err);
		res.json(post);
	});
});

/* Update Movie */
router.put('/:id', function(req,res,next){
	Movie.findByIdAndUpdate(req.params.id, req.body, function(err,post){
		if (err) return next (err);
		res. json(post);
	});
});

/*Delete Movie */
router.delete('/:id', function(req,res,next){
	Movie.findByIdAndRemove(req.params.id,req.body, function(err,post){
		if(err) return next(err);
		res.json(post);
	});
});

module.exports = router;