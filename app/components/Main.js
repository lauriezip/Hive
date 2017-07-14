// Include React as a dependency
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
// https://github.com/ReactTraining/react-router/blob/master/docs/API.md#link
var Link = require("react-router").Link;
// Include the helpers for making API calls
var helpers = require("../utils/helpers");

// Create the Main component
var Main = React.createClass({
  getInitialState: function () {
    return {
      user: "",
      pass: "",
      login: false
    };
  },

  handleSubmit: function (e) {
    e.preventDefault();
    this.setState({ login: helpers.signIn(this.state.user, this.state.pass) });
  },

  handleInputChange: function (event) {
    var newState = {};
    console.log(event.target);
    newState[event.target.name] = event.target.value;
    this.setState(newState);
    console.log("newState", newState);
  },


  render: function () {
    if (this.state.login) {
      return (
        // We can only render a single div. So we need to group everything inside of this main-container one
        <div className="main-container">
          <nav className="navbar navbar-default" role="navigation">
            
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
                  <li><Link to="Search"><i className="fa fa-code" aria-hidden="true"></i></Link></li>
                  <li><Link to="Saved"><i className="fa fa-bookmark-o" aria-hidden="true"></i></Link></li>
                  <li><Link to="Profile"><i className="fa fa-user-o" aria-hidden="true"></i></Link></li>
                  <li><Link to=""><i className="fa fa-envelope-o" aria-hidden="true"></i></Link></li>
                  <li><Link to="Community"><i className="fa fa-users" aria-hidden="true"></i></Link></li>
                </ul>
              </div>
         
          </nav>

          <div className="container">
            {/* Navbar */}



            {/* Here we will deploy the sub components (Search or Saved */}
            {/* These sub-components are getting passed as this.props.children */}
            {this.props.children}

            <footer>
              <hr />
              <p className="pull-right">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>

              </p>
            </footer>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="username" name="user" value={this.state.user} onChange={this.handleInputChange} />
            <br />
            <input type="password" placeholder="password" name="pass" value={this.state.pass} onChange={this.handleInputChange} />
            <br />
            <input type="submit" value="Submit" />
          </form>

        </div>
      );
    }

  }
});

// Export the module back to the route
module.exports = Main;
