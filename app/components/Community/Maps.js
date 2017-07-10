// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;

// Create the Main component
var Maps = React.createClass({

  render: function() {
    return (
      <div className="col-md-6">
        <div className="well  levitate mapitymap">
        </div>
      </div>
    );
  }
});





  
  // Export the module back to the route
  module.exports = Maps;
