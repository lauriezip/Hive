// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;

// Create the Main component
var Post = React.createClass({

    getInitialState: function () {
        return {
            title: "",
            body: ""
        };
    },
    handleInputChange: function (event) {
        var newState = {};
        console.log(event.target);
        newState[event.target.name] = event.target.value;
        this.setState(newState);
        console.log("newState", newState);
    },

    handleSubmit: function (e) {
        e.preventDefault();
        this.props.addPost(this.state.title, this.state.body);
    },

    render: function () {
        return (
            <div className="modality">
                <div className="col-md-6 col-md-offset-3">
                    <div className="well gray-card">
                        <form onSubmit={this.handleSubmit}>
                            <input type="text" className="form-control"  placeholder="title" name="title" value={this.state.title} onChange={this.handleInputChange} />
                            <br />
                            <textarea name="body"  className="form-control" placeholder="question/discussion (Include code when relevant)" value={this.state.body} onChange={this.handleInputChange} />
                            <br />
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
});


// Export the module back to the route
module.exports = Post;



