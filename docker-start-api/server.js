var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var Movie = require('./models/movie');
var View = require('./models/view');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local')
.then(()=> console.log('connection successful'))
.catch((err)=> console.error(err));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function saveView(request, response, callback){
  var view = new View();
  view.title = request.body.title;
  view.save(function(err){
    if(err)
      response.send(err);

    response.json({message : 'View recorded'});
  });
}
var port = process.env.PORT || 8080;

var router = express.Router();
router.use('/views',function(req, res, next){
  console.log('Something is happening.');
  next();
})


router.route('/views')
  .post(function(req, res){
      saveView(req, res, function(){
        console.log("View Added For %s", req.title);
      });

  })
  .get(function(req, res){
    View.find(function(err, views){
      if(err)
        res.send(err);
      res.json(views);
    })
  })

router.route('/movies')
  .post(function(req, res){
    var watch_title = req.body.title;
    Movie.find({'title': watch_title},'title link',function(err, movies){
      if(err)
        res.send(err);
      console.log(movies);
    });
    saveView(req, res, function(){
      console.log("View Added For %s", watch_title);
    });

  })
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
