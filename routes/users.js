var express = require('express');
var router = express.Router();
var User = require('../app/models/user');
var Article = require('../app/models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {

  // get all the users
  User.find({}, function(err, users) {
    if (err) throw err;
    console.log(users);
    res.send(users);
  });

});

// "tags": ["sport","politics","world","tech","science","arts",”business”,”health"]

/* GET users listing. */
router.post('/:userid', function(req, res, next) {

  var userid = req.params.userid || 0;
  var limit = req.body.limit || 5;
  var id_pos = req.body.id_pos || [];
  var id_prev = req.body.id_prev || [];

  Article.
    find({
      _id: { $nin: id_prev }
    }).
    limit(limit).
    exec(function(err, articles) {
      "use strict";
      if (err) console.log(err);
      console.log(articles);
      res.send(articles);
  });


});

module.exports = router;
