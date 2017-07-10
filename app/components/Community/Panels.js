// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Create the Main component
var Panel = React.createClass({
  render: function() {
    return (
      <div className="col-md-3">
        <div className="panel panel-default resources">
        <div className="panel-heading title ">{this.props.title}</div>
          <div className="panel-body card">Basic panel example</div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Panel;
