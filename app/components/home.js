// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;

// Create the Main component
var Home = React.createClass({
  componentDidMount: function () {
   
  },
  render: function () {
    return (
      <div className="container-fluid home-container">
        <img src="hive.png" width="950" className="logo"/>
      </div>
    );
  }
});






// Export the module back to the route
module.exports = Home;
