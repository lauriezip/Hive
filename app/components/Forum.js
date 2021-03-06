// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
var helpers = require("../utils/forumHelpers");
var Post = require("./Forum/Post");
// Create the Main component
var Forum = React.createClass({
    getInitialState: function () {
        return {
            Posts: [],
            showResults: false
        };
    },
    handleClick: function () {
        console.log('click');
        this.setState({ showResults: true });
    },

    addPost: function (title, body) {
        helpers.postForum(title, body).then(() => {
            helpers.getPosts().then(function (result) {
                this.setState({ Posts: result.data });
                console.log("saved posts", result);
            }.bind(this));
        });
        this.setState({ showResults: false });


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

            // Each article thus reperesents a list group item with a known index
            return (
                <div className="col-md-12" key={index}>
                        <div className="well gray-card">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        </div>
                 
                </div>
            );

        }.bind(this));

    },

    render: function () {
        return (
            <div>
              
                    <div className="col-md-2 col-md-offset-10 forum" >
                    <button onClick={() => this.handleClick()}>New Topic</button>
                    </div>
                    {this.state.showResults ? <Post addPost={this.addPost} /> : null}
           
                <div>
                            {this.renderPosts()}  
                </div>
            </div>

        );
    }
});


// Export the module back to the route
module.exports = Forum;
