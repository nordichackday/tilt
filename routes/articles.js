var express = require('express');
var router = express.Router();
var Article = require('../app/models/article');

/* GET users listing. */
router.get('/', function(req, res, next) {

  var limit = req.query.limit;
  console.log("limit", limit);

  // get all the users
  Article
      .find({})
      .limit(limit)
      .exec(
          function(err, articles) {
            if (err) throw err;

            //console.log(articles);
            res.send(articles);
          }
      );
});

module.exports = router;
