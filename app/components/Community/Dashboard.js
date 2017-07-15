// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
var Panel = require("./Panels");
// Create the Main component
var Dashboard = React.createClass({

  render: function() {
    return (
      <div>
        <Panel />
      </div>
    );
  }
});

  // Export the module back to the route
  module.exports = Dashboard;
