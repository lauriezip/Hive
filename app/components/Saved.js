// Include React as a dependency
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../utils/helpers");

// Create the Main component
var Main = React.createClass({

  getInitialState: function() {
    return { savedRepo: "" };
  },

  // When this component mounts, get all saved articles from our db
  componentDidMount: function() {
    helpers.getSaved().then(function(Data) {
      this.setState({ savedRepo: results.data });
      console.log("saved results",Data.data);
    }.bind(this));
  },

  // This code handles the deleting saved articles from our database
  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);

    // Delete the list!
    helpers.deleteSaved(repo.title, repo.body, repo.url).then(function() {

      // Get the revised list!
      helpers.getSaved().then(function(Data) {
        this.setState({ savedRepo: Data.data });
        console.log("saved results", Data.data);
      }.bind(this));

    }.bind(this));
  },
  // A helper method for rendering the HTML when we have no saved articles
  renderEmpty: function() {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>Saved Projects</em>
          </span>
        </h3>
      </li>
    );
  },

  // A helper method for mapping through our repos and outputting some HTML
  renderResults: function() {
    return this.state.savedResults.map(function(docs, data) {

      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{repo.title}</em>
              </span>
              <span className="btn-group pull-right">
                <a href={repo.url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Repository</button>
                </a>
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Delete</button>
              </span>
            </h3>
            <p>Date Published: {repo.date}</p>
          </li>
        </div>
      );
    }.bind(this));
  },

  // A helper method for rendering a container and all of our artiles inside
  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i> Saved Repositories</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderRepos()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render: function() {
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
