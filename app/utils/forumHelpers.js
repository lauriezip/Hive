// Include the Axios library for HTTP requests
var axios = require("axios");

// GitHub API Key (Replace with your own API Key)
var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

// Helper Functions
var forumHelpers = {

    // This will run our query.
    runQuery: function(term) {

    },
    // This will return any saved repos from our database
    getForums: function() {
        return axios.get("/api/saved")
            .then(function(results) {
                console.log("axios results", results);
                return results;
            });
    },
    // This will save new repos to our database
    postForum: function(title, body) {
        var newForum = { title: 'title', body: 'body'};
        console.log("newForum", newForum);
        return axios.post("/api/forum", newForum)
            .then(function(response) {
                console.log("axios results", response.data._id);
                return response.data._id;
            });
    },
};


// We export the helpers function
module.exports = forumHelpers;
