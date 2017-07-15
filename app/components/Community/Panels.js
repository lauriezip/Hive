// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Create the Main component

const titleStyles = {
  textAlign: 'center',
  fontWeight: 'bold'
};

var Panel = React.createClass({
  
  render: function() {
    return (
      <div className="row">
        <div className="col-md-3">
          <div className="well orange-card">
            <h4 style={titleStyles}><a href="https://github.com/lauriezip/Hive">Hive</a></h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="well orange-card">
            <h4 style={titleStyles}><a href="http://rogerdudler.github.io/git-guide/">Github</a></h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="well orange-card">
            <h4 style={titleStyles}><a href="https://opensource.com/resources/what-open-source">Open Source</a></h4>
          </div>
        </div>
        <div className="col-md-3">
          <div className="well orange-card">
            <h4 href="#" style={titleStyles} data-toggle="modal" data-target="#myModal">Resources</h4>
          </div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Panel;
