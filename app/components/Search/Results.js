// Include React as a dependency
var React = require("react");

// Include our helpers for API calls
var helpers = require("../../utils/helpers");

// Results Component Declaration
var Results = React.createClass({

  // Here we will save states for the contents we save
  getInitialState: function() {
    return {
      issue: ""
      
      
    };
  },

  // This code handles the sending of the search terms to the parent Search component
  handleClick: function(repo) {
    console.log("CLICKED");
    console.log(repo);

    helpers.postSaved(repo.title, repo.body, repo.url).then(function() {
      console.log(repo.title,repo.body,repo.url);
    });
  },

  // A helper method for mapping through open GitHub repos and outputting some HTML
  renderRepo: function() {
    return this.props.results.docs.map(function(repo, index) {

      // Each article thus reperesents a list group item with a known index
      return (
        <div key={index}>
          <li className="list-group-item">
            <span className="btn-group pull-right">
               <button className="fa fa-bookmark-o" onClick={() => this.handleClick(repo)}></button>
                   </span>
            <h3>
              <a href={repo.html_url} target="_blank">{repo.title}</a>
            </h3>
                  
            <div>
                {repo.body}
            </div>
            
                
            {/*  <span className="btn-group pull-right">
                <a href={repo.web_url} rel="noopener noreferrer" target="_blank">
                  <button className="btn btn-default ">View Article</button>
                </a>

                
                  By using an arrow function callback to wrap this.handleClick,
                  we can pass in an article as an argument
                
                <button className="btn btn-primary" onClick={() => this.handleClick(article)}>Save</button>
              </span>*/}
           
           {/* <p>Date Published: {article.pub_date}</p>*/}

          </li>

        </div>
      );

    }.bind(this));

  },

  // A helper method for rendering a container to hold all of our articles
  renderContainer: function() {
    return (
      <div className="main-container">
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-list-alt" aria-hidden="true"></i> Results
                  </strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderRepo()}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  render: function() {
    // If we have no articles, render this HTML
    if (!this.props.results.docs) {
      return (
        <li className="list-group-item">
         
        </li>
      );
    }
    // If we have articles, return this.renderContainer() which in turn, returns all the articles
    return this.renderContainer();
  }
});

// Export the module back to the route
module.exports = Results;
