var express = require('express');
var router = express.Router();

var Articles = require('../models/article_model.js')[0]
var db = require('../models/article_model.js')[1];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'New York Times Search' });
});

//TODO routes to update the api go here?

module.exports = router;
