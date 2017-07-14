// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Main component
var Main = React.createClass({

  getInitialState: function () {
    return { savedRepos: "" };
  },

  // When this component mounts, get all saved articles from our db
  componentDidMount: function () {
    helpers.getSaved().then(function (result) {
      this.setState({ savedRepos: result.data });
      console.log("saved results", result.data);
    }.bind(this));
  },

  // This code handles the deleting saved articles from our database
  handleClick: function (repo) {
    console.log("CLICKED");
    console.log(repo);

    // Delete the list!
    helpers.deleteSaved(repo.title, repo.body, repo.url).then(function () {

      // Get the revised list!
      helpers.getSaved().then(function (Data) {
        this.setState({ savedRepos: Data.data });
        console.log("saved results", Data.data);
      }.bind(this));

    }.bind(this));
  },
  // A helper method for rendering the HTML when we have no saved articles
  renderEmpty: function () {
    return (
      <div className="col-md-12">
        <div className="well gray-card">
          <h3>Add some issues and let's start coding!</h3>
        </div>
      </div>
    );
  },

  // A helper method for mapping through our repos and outputting some HTML
  renderRepos: function () {
    return this.state.savedRepos.map(function (repo, index) {

      return (
        <div key={index}>
          <div className="col-md-12">
            <div className="well gray-card">
              <span className="btn-group pull-right">
                <button className="fa fa-trash-o" onClick={() => this.handleClick(repo)}></button>
              </span>
              <h3>
                <a href={repo.html_url} target="_blank">{repo.title}</a>
              </h3>
              <div>
                {repo.body}
              </div>
            </div>
          </div>
        </div>
      );
    }.bind(this));
  },

  // A helper method for rendering a container and all of our artiles inside
  renderContainer: function () {
    return (
      <div className="main-container">

        {this.renderRepos()}

      </div>
    );
  },
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render: function () {
    // If we have no repos, we will return this.renderEmpty() which in turn returns some HTML
    if (!this.state.savedRepos) {
      return this.renderEmpty();
    }
    // If we have repos, return this.renderContainer() which in turn returns all saves articles
    return this.renderContainer();
  }
});

// Export the module back to the route
module.exports = Main;
