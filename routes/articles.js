var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Article = require('../app/models/article');

/* GET articles */
router.get('/', function(req, res, next) {

  var limit = req.query.limit || 5;

  var id_pos = req.query.id_pos || "57223121973e2f2a47e4e938";
  var id_prev = req.query.id_prev || "57223121973e2f2a47e4e938";
  id_pos = id_pos.split(",");
  id_prev = id_prev.split(",");

  console.log("limit", limit);
  console.log("id_pos", id_pos);
  console.log("id_prev", id_prev);

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
});

module.exports = router;
