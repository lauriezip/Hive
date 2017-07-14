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
                <div key={index}>
                    <li className="list-group-item">
                        <h3>{post.title}</h3>
                        <div>
                            {post.body}
                        </div>
                    </li>
                </div>
            );

        }.bind(this));

    },

    render: function () {
        return (
            <div>
                <button onClick={() => this.handleClick()}>New Topic</button>
                {this.state.showResults ? <Post addPost={this.addPost} /> : null}
                <div className="panel-body">
                    <ul className="list-group">
                        {this.renderPosts()}
                    </ul>
                </div>
            </div>
        );
    }
});


// Export the module back to the route
module.exports = Forum;
