// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
var CommentPanels = require("./CommentPanels");
// Create the Main component
var Comments = React.createClass({

  render: function() {
    return (
      <div className="comments">
        <CommentPanels title = "Hive"/>
        <CommentPanels title = "Hive"/>
        <CommentPanels title = "Hive"/>
        <CommentPanels title = "Hive"/>
    
      </div>
    );
  }
});





  
  // Export the module back to the route
  module.exports = Comments;
