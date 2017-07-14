// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require Schemas
var Article = require("./server/model");
var Forum = require("./server/forumModel");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration
mongoose.connect("mongodb://laurie:54321@ds135519.mlab.com:35519/heroku_snp60tw6");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});


// -------------------------------------------------

// Route to get all saved articles
app.get("/api/saved", function(req, res) {

  Article.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// Route to add an article to saved list
app.post("/api/saved", function(req, res) {
  var newArticle = new Article(req.body);

  console.log(req.body);

  newArticle.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to delete an article from saved list
app.delete("/api/saved/", function(req, res) {

  var url = req.param("url");

  Article.find({ url: url }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

/*--------------------------------------
    FORUM ROUTES
------------------------------------------*/
app.post("/api/forum", function(req, res) {
  console.log("hit route");
  var newForum = new Forum(req.body);

  console.log("req", req.body);

  newForum.save(function(err, doc) {
    if (err) {
      console.log("error");
      console.log(err);
    }
    else {
      console.log("save success", doc);
      res.send(doc);
    }
  });
});

app.get("/api/posts", function(req, res) {

  Forum.find({})
    .exec(function(err, doc) {

      if (err) {
        console.log(err);
      }
      else {
        console.log("retrieve success",doc);
        res.send(doc);
      }
    });
});

// Any non API GET routes will be directed to our React App and handled by React Router
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// -------------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
