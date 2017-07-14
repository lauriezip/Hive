// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// var CommentPanels = require("./Profile/CommentPanels");
// Create the Main component
var Profile = React.createClass({
  render: function() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="center-block">
              <img
                src="http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-knives-ninja.png"
                className="img-circle"
              />
              <br />
              <ul className="container Jumboshit">
                <p>USER NAME</p>
                <h3>Creator of Code @ The Interweb</h3>
                {/* Using <a> in place of <a> and "to" in place of "href" */}
                <li>
                  <a href="https://github.com/join" target="_blank">
                    <i className="fa fa-github-alt orange" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <Link to="">
                    <i className="fa fa-map-marker orange" aria-hidden="true" />
                  </Link>
                </li>
                <li>
                  <a
                    href="https://bitbucket.org/account/signup/"
                    target="_blank"
                  >
                    <i className="fa fa-bitbucket orange" aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <Link to="">
                    <i
                      className="fa fa-commenting orange"
                      aria-hidden="true"
                      title="Contact To Hire Me"
                      uk-tooltip
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="well">
        <h4>ABOUT ME</h4>
        <p>Skills Include:</p>
        <p>Lurker of Google
        JavaScript Connoisseur
        Database Rangler</p>
      </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Profile;
