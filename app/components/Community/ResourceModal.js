// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Create the Main component

var ResourceModal = React.createClass({
  
  render: function() {
    return (
      <div className="container">
        <div className="modal fade" id="myModal" tabindex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Resources</h4>
                    </div>
                    <div className="modal-body">
                        <h2>General</h2>
                        <ul>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                        </ul>
                        <h2>JavaScript</h2>
                        <ul>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                            <li><a href=""></a></li>
                        </ul>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = ResourceModal;
