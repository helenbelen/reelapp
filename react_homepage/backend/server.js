var createError = require('http-errors');
var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var apiRouter = require('./routes/movie');
var app = express();
var mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan');
mongoose.connect('mongodb://localhost:27017/local',{promiseLibrary: require('bluebird')})
.then(()=> console.log('connection successful'))
.catch((err)=> console.error(err));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api',apiRouter);
const API_PORT = 3001;
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
