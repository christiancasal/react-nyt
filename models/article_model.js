var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/articles_db');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log("mongodb connected!");
});
//define schema
var articlesSchema = mongoose.Schema({
  title: String,
  date: String,
  url: String
});

//define model
var Articles = mongoose.model('Articles', articlesSchema);


//export model
module.exports = [Articles, db];
