// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
var helpers = require("../../utils/forumHelpers");
// Create the Main component
var Feed = React.createClass({
  getInitialState: function () {
    return {
      Posts: []
    };
  },
  componentDidMount: function () {
    helpers.getPosts().then(function (result) {
      this.setState({ Posts: result.data });
      console.log("saved posts", result);
    }.bind(this));
  },
  renderPosts: function () {
    console.log("rendering posts", this.state.Posts);
    return this.state.Posts.map(function (post, index) {
      console.log("index is", this.state.Posts.length);
      if ({index}.index > this.state.Posts.length - 7) {
        return (
          <tr key={index}>
            
            <td><Link to="Forum">{post.title}</Link></td>
            
          </tr>
        );
      }


      // Each article thus reperesents a list group item with a known index

    }.bind(this));

  },
  render: function () {
    return (
      <div className="col-md-6">
        <div className="well gray-card table-card">
          <table className="table table-striped levitate">
            <tbody>
              {this.renderPosts()}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = Feed;
