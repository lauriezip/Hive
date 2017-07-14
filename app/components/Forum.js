// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
var helpers = require("../utils/forumHelpers");
// Create the Main component
var Forum = React.createClass({
    getInitialState: function () {
        return { Posts: "" };
    },
    handleClick: function () {
        console.log('click');
        helpers.postForum().then(function () {
            console.log("complete");
        });
    },

    componentDidMount: function () {
        helpers.getForum().then(function (result) {
            this.setState({ Posts: result.data });
            console.log("saved posts", result.data);
        }.bind(this));
    },

    render: function () {
        return (
            <div>
                <button onClick={() => this.handleClick()}>New Topic</button>

            </div>
        );
    }
});


// Export the module back to the route
module.exports = Forum;
