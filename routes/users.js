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

// "tags": ["sport","politics","world","tech","science","arts",”business”,”health"]

/* GET users listing. */
router.post('/:userid', function(req, res, next) {

  var userid = req.params.userid || 0;
  var newTags = req.body.tags || [];

	User.find({_id: userid}, 'tags', function(err, tags) {
		if (err) console.log(err);

		newTags.forEach(function(tag) {
			if (tags[0].tags.hasOwnProperty(tag)) {
				tags[0].tags[tag] += 1;
			}
			else {
				tags[0].tags[tag] = 1;
			}
		});

		console.log(tags[0].tags);
  	User.update({_id: userid}, {$set: { 'tags' : tags[0].tags }}).
		exec(function(err, result) {
	    "use strict";
	    if (err) console.log(err);
	    console.log(result);
	    res.send(result);
		});


	});


});

module.exports = router;
