var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../app/models/article');
var request = require('request');

/* GET articles */
router.get('/', function(req, res, next) {

  var limit = req.query.limit || 5;
  var userid = req.query.userid || "";
  var id_pos = req.query.id_pos || "57223121973e2f2a47e4e938";
  var id_prev = req.query.id_prev || "57223121973e2f2a47e4e938";
  id_pos = id_pos.split(",");
  id_prev = id_prev.split(",");

  //console.log("limit", limit);
  //console.log("id_pos", id_pos);
  //console.log("id_prev", id_prev);

  id_pos.forEach(function(id) {
    "use strict";
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.send({error: "not valid article id: " + id});
    }
  });

  id_prev.forEach(function(id) {
    "use strict";
    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.send({error: "not valid article id: " + id});
    }
  });

  // hent tags fra hvert id
	var userUpdateTags = [];
  var tags = {};
  Article
      .find({
        _id: { $in: id_pos }
      })
      .exec(function(err, articles) {
        "use strict";
        if (err) console.log(err);
        //console.log(articles);

        articles.forEach(function(art) {
					art.tags.forEach(function(tag) {
						userUpdateTags.push(tag);
						if (tags.hasOwnProperty(tag)) {
							tags[tag] += 1;
						}
						else {
							tags[tag] = 1;
						}
					});
				});


				// pass article ids to /users -> update user data
				console.log(userUpdateTags);
				request.post('http://localhost:3000/users/' + userid, {'tags':userUpdateTags});

        var numVotes = 0;
        var tag = "";
        for (var x in tags) {
          if (tags[x] > numVotes) {
            numVotes = tags[x];
            tag = x;
          }
        }

        console.log("most important tag", tag);

        Article
          .find({
            _id: { $nin: id_prev },
            tags: tag
          })
          .limit(limit)
          .exec(function(err, articles) {
            "use strict";
            if (err) console.log(err);
						if(articles.length >= limit) {
            	res.send(articles);
						}
						else { console.log("Need to find more articles");
							Article
			          .find({
			            _id: { $nin: id_prev }
			          })
			          .limit(limit)
								.exec(function(err, articles) {
			            "use strict";
									if (err) console.log(err);
									res.send(articles);
								});
						}
          });
      });
});

module.exports = router;
