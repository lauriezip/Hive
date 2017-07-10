// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Create the Main component
var CommentPanels = React.createClass({
  render: function() {
    return (
      <div className="col-md-12">
        <div className="panel panel-default">
          <div className="panel-body">Basic panel example</div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = CommentPanels;
