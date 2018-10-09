var express = require('express');
var app = express();
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('video-template',{mp4source: '//vjs.zencdn.net/v/oceans.mp4', webmsource: '//vjs.zencdn.net/v/oceans.webm'});
})

app.listen(3000);
console.log("Running at port 3000");