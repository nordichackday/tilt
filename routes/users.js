var express = require('express');
var router = express.Router();
var User = require('../app/models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

  // get all the users
  User.find({}, function(err, users) {
    if (err) throw err;

    console.log(users);
    res.send(users);

  });

});

module.exports = router;
