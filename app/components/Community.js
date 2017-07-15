// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
var Dashboard = require("./Community/Dashboard");
var Feed = require("./Community/Feed");
var Maps = require("./Community/Maps");
var Comments = require("./Community/Comments");
var ResourceModal = require("./Community/ResourceModal");
// Create the Main component
var Community = React.createClass({

  render: function() {
    return (
      <div>
        <ResourceModal />
        <Dashboard />
        <Maps/>
        <Feed />
        <Comments />
       
      </div>
    );
  }
});





  
  // Export the module back to the route
  module.exports = Community;
