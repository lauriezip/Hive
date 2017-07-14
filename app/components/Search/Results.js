// Include React as a dependency
var React = require("react");

// Include our helpers for API calls
var helpers = require("../../utils/helpers");

// Results Component Declaration
var Results = React.createClass({

  // Here we will save states for the contents we save
  getInitialState: function () {
    return {
      issue: ""


    };
  },

  // This code handles the sending of the search terms to the parent Search component
  handleClick: function (repo) {
    console.log("CLICKED");
    console.log(repo);

    helpers.postSaved(repo.title, repo.body, repo.url).then(function () {
      console.log(repo.title, repo.body, repo.url);
    });
  },

  // A helper method for mapping through open GitHub repos and outputting some HTML
  renderRepo: function () {
    return this.props.results.docs.map(function (repo, index) {

      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <div className="col-md-4">
            <div className="well gray-card">
              <div className="results">
                 <h3>
                  <a href={repo.html_url} target="_blank">{repo.title}</a>
                </h3>
                <span className="btn-group right">
                  <button className="fa fa-bookmark-o" onClick={() => this.handleClick(repo)}></button>
                </span>
               

                <div>
                  {repo.body}
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    }.bind(this));

  },

  // A helper method for rendering a container to hold all of our articles
  renderContainer: function () {
    return (
      <div>
        {this.renderRepo()}
      </div>
    );
  },
  render: function () {
    // If we have no articles, render this HTML
    if (!this.props.results.docs) {
      return (
        <div></div>
      );
    }
    // If we have articles, return this.renderContainer() which in turn, returns all the articles
    return this.renderContainer();
  }
});

// Export the module back to the route
module.exports = Results;
