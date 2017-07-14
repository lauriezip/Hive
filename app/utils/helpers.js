// Include the Axios library for HTTP requests
var axios = require("axios");

// GitHub API Key (Replace with your own API Key)
var APIKey = "9b3adf57854f4a19b7b5782cdd6e427a";

// Helper Functions
var helpers = {
    signIn: function(user, pass){
        console.log("Signin data", user);
        return true;
    },

    // This will run our query.
    runQuery: function(term) {

        // Adjust to get search terms in proper format
        var query = 'https://api.github.com/search/issues?q=language:' + term + '+state:open&sort=created&order=asc';
        var options = {
        }
        console.log("Query Run");
        // Run a query using Axios. Then return the results as an object with an array.
        // See the Axios documentation for details on how we structured this with the params.
        return axios.get(query,options)
            .then(function(results) {
                console.log(results);
                console.log("Axios Results", results.data.items);
                // //for (var index = 0; index < results.data.items.length; index++) {
                //  //   var element = results.data.items[index];

                //     console.log(element.body);
                // }
                
                return results.data.items;
            });
    },
    // This will return any saved repos from our database
    getSaved: function() {
        return axios.get("/api/saved")
            .then(function(results) {
                console.log("axios results", results);
                return results;
            });
    },
    // This will save new repos to our database
    postSaved: function(title, body, url) {
        var newRepo = { title: title, body: body, url: url };
        return axios.post("/api/saved", newRepo)
            .then(function(response) {
                console.log("axios results", response.data._id);
                return response.data._id;
            });
    },
    // This will remove saved repos from our database
    deleteSaved: function(title, data, url) {
        return axios.delete("/api/saved", {
                params: {
                    "title": title,
                    "data": data,
                    "url": url
                }
            })
            .then(function(results) {
                console.log("axios results", results);
                return results;
            });
    }
};


// We export the helpers function
module.exports = helpers;
