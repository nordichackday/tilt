var express = require('express');
var router = express.Router();
var Article = require('../app/models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {

  // get all the users
  Article.find({}, function(err, articles) {
    if (err) throw err;

    console.log(articles);
    res.send(articles);
  });

});

module.exports = router;
