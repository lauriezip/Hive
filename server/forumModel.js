var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ForumSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  comments: {
    type: Array
  }
});

var Forum = mongoose.model("Forum", ForumSchema);
module.exports = Forum;
