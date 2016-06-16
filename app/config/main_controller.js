var express = require('express');
var router = express.Router();

var Articles = require('./mongo.js')[0]
var db = require('./mongo.js')[1];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('./public/index.html');
});

//TODO routes to update the api go here?

module.exports = router;
