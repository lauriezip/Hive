// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  render: function() {

    return (
      // We can only render a single div. So we need to group everything inside of this main-container one
      <div className="main-container">
        <div className="container">
          {/* Navbar */}
          <nav className="navbar navbar-default" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-ex1-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                
                
              </div>

              <div className="collapse navbar-collapse navbar-ex1-collapse">
                <ul className="nav navbar-nav navbar-right">
                  {/* Using <Link> in place of <a> and "to" in place of "href" */}
                  <li><Link to=""><i className="fa fa-code" aria-hidden="true"></i></Link></li>
                  <li><Link to="/saved"><i className="fa fa-bookmark-o" aria-hidden="true"></i></Link></li>
                 <li><Link to=""><i className="fa fa-user-o" aria-hidden="true"></i></Link></li>
                 <li><Link to=""><i className="fa fa-envelope-o" aria-hidden="true"></i></Link></li>
                 <li><Link to=""><i className="fa fa-users" aria-hidden="true"></i></Link></li>
                </ul>
              </div>
            </div>
          </nav>



          {/* Here we will deploy the sub components (Search or Saved */}
          {/* These sub-components are getting passed as this.props.children */}
          {this.props.children}

          <footer>
            <hr />
            <p className="pull-right">
              <i className="fa fa-" aria-hidden="true"></i>
            
            </p>
          </footer>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Main;
