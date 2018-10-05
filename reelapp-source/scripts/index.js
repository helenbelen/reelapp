var express = require('express');

var app = express();
app.set('view engine', 'pug')


// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
	
  res.sendFile(__dirname + '/index.html');
})

app.get('/info',function(req,res){
	res.render('index', {title: 'Hey', message: 'Hello there!'})
})

app.listen(3000);
console.log("Running at port 3000");