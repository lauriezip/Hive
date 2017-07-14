// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Create the Main component
var Panel = React.createClass({
  render: function() {
    return (
      <div className="col-md-3">
        <div className="well orange-card">
        <h3>{this.props.title}</h3>
          <p>Basic panel example</p>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Panel;
