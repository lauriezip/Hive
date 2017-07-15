// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;

const mapStyles = {
  padding: '0px'
};

var Maps = React.createClass({

  render: function () {
    return (
      <div>
        <div className="col-md-6">
          <div className="well gray-card map" style={mapStyles}>
            <img src="map.png" />
          </div>
        </div>
      </div>
    );
  }
});




// Export the module back to the route
module.exports = Maps;
