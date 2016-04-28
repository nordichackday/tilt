var express = require('express');
var router = express.Router();
var User = require('../app/models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var result = [];

  // get all the users
  User.find({}, function(err, users) {
    if (err) throw err;

    // object of all the users
    console.log(users);
    result = users;
  });

  res.send(result);

});

module.exports = router;
