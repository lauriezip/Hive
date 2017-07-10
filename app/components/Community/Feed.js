// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Create the Main component
var Feed = React.createClass({
  render: function() {
    return (
      <div className="col-md-6">
        <table className="table table-striped levitate">
          <tbody>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
            <tr>
              <td>Alfreds Futterkiste</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Feed;
