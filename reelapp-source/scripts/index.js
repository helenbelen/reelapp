var express = require('express');
var app = express();

app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('video-template',{buttonsource: '/browse',mp4source: 'video-link', webmsource: '//vjs.zencdn.net/v/oceans.webm'});
})

app.listen(3030);
console.log("Running at port 3030");
