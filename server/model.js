var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var RepoSchema = new Schema({
  title: {
    type: String
  },
  body: {
    type: String
  },
  url: {
    type: String
  }
});

var Repo = mongoose.model("Repo", RepoSchema);
module.exports = Repo;
