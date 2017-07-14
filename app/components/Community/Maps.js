// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;


var Maps = React.createClass({

  render: function () {
    return (
      <div>
        <div className="col-md-6">
          <div className="well gray-card map">
            <h3>Map Goes here</h3>
          </div>
        </div>
      </div>
    );
  }
});




// Export the module back to the route
module.exports = Maps;
