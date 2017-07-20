// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
var Saved = require("./Saved");
// var CommentPanels = require("./Profile/CommentPanels");
// Create the Main component
var Profile = React.createClass({
  render: function () {
    return (
      <div>
        <section>
          <div className="col-md-12">
            <div className="well orange-card main">


              <img
                src="http://clipartwork.com/wp-content/uploads/2017/02/free-cute-ninja-clipart.jpeg"
                className="img-circle avatar"
                width="200"
              />


              <h1 className="userName">Mike Smith</h1>
              <h3>Creator of Code @ The Interweb</h3>
              {/* Using <a> in place of <a> and "to" in place of "href" */}
              <ul className="profile">
                <li>
                  <a href="https://github.com/join" target="_blank">
                    <i className="fa fa-github-alt social-media" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-map-marker social-media" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <a
                    href="https://bitbucket.org/account/signup/"
                    target="_blank"
                  >
                    <i className="fa fa-bitbucket social-media" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <Link to="">
                    <i
                      className="fa fa-commenting social-media"
                      aria-hidden="true"
                      title="Contact To Hire Me"
                      uk-tooltip
                    />
                  </Link>
                </li>
              </ul>
            </div>


          </div>
          <div className="col-md-8">
            <div className="well gray-card about">
              <h3>ABOUT ME</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="well gray-card about">
              <h3>At a Glance</h3>
              <p>Most amazing cat mom</p>
              <p>Expertest needle pointer</p>
              <p>Adorable code nerd</p>
            </div>
          </div>
        </section>
        <section>
          <Saved />
        </section>

      </div>
    );
  }
});

// Export the module back to the route
module.exports = Profile;
