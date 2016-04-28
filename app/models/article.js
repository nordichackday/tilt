// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var articleSchema = new Schema({
    author: String,
<<<<<<< HEAD
    headline: String,
    bodytext: String,
    image: String,
    tags: Array,
    publicationdate: Date,
    language: String,
    originalURL: String
=======
		headline: String,
    bodytext: String,
    image: String,
    tags: Array,
    publicationdatetime: Date,
	  originalURL: String
>>>>>>> 9fbb61eef4a1d6bcb73d16e4b0b7e3384134fae1
});

// the schema is useless so far
// we need to create a model using it
var Article = mongoose.model('Article', articleSchema);

// make this available to our users in our Node applications
module.exports = Article;
