var express = require('express');
var router = express.Router();

var Article = require('./mongo.js')
// var db = require('./mongo.js')[1];



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('./public/index.html');

});

//get saved articles
router.get('/api/get', function(req, res){
  Article.find(function(err, data){
    if (err) throw err;
    res.json(data);
  })
});

router.post('/api/post', function(req, res){
  console.log('this is api/post route in main controller');
  console.log(req.body);

  let obj = new Article ({
    title: req.body.abs,
     url: req.body.url,
     date: req.body.pub_date
  });
  obj.save(function (err, data){
    if (err) throw err;
    console.log(data);
    res.json(data);
  });
});


//TODO routes to update the api go here?

module.exports = router;
