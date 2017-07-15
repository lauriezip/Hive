// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
// Create the Main component

const userImages = {
  textAlign: 'center',
  fontWeight: 'bold'
};

var CommentPanels = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-1">
                  <img src="https://robohash.org/hpatellis.png?size=50x50" />
                </div>
                <div className="col-md-10">
                  <h4>Hannah Patellis</h4>
                </div>
              </div>
              <hr />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam id lectus nec tellus ultrices condimentum. Fusce egestas lectus a arcu euismod facilisis ut ut ex. Aenean sit amet dignissim dui, quis porta ex. Cras accumsan augue eget sagittis dapibus. Morbi tincidunt, turpis ac tristique semper, arcu lacus feugiat enim, quis auctor eros odio quis neque. Vivamus suscipit lectus ligula, efficitur ullamcorper justo viverra eu. Praesent condimentum augue eu magna maximus, id eleifend turpis vulputate.</p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-1">
                  <img src="https://robohash.org/lzipperer.png?size=50x50" />
                </div>
                <div className="col-md-10">
                  <h4>Laurie Zipperer</h4>
                </div>
              </div>
              <hr />
              <p>Cras ut magna pretium, feugiat turpis a, porta urna. Pellentesque interdum consequat aliquam. Suspendisse pellentesque pellentesque tellus. Curabitur cursus tellus tempor volutpat sagittis. Nulla egestas, enim et pharetra consequat, velit erat maximus libero, a auctor orci sem at leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam molestie, sapien sed rhoncus aliquam, mi nulla varius quam, malesuada tempor tortor risus sed arcu. Mauris ut volutpat sem, id posuere mauris. Morbi dolor felis, ullamcorper eget volutpat ac, fringilla a nibh. Duis vel eros id nibh mattis facilisis. Ut elementum, sapien a pellentesque accumsan, turpis tellus convallis odio, in facilisis magna nisi eget dui.</p>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <div className="panel panel-default">
            <div className="panel-body">
              <div className="row">
                <div className="col-md-1">
                  <img src="https://robohash.org/cjordan.png?size=50x50" />
                </div>
                <div className="col-md-10">
                  <h4>CJ Jordan</h4>
                </div>
              </div>
              <hr />
              <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus eget ligula vel dolor viverra pulvinar eget sit amet eros. Pellentesque et mattis nisl. Ut mollis mi quis finibus ultricies. Aenean condimentum blandit dui, sit amet rutrum felis vehicula ut. Nam euismod odio in nisi dignissim interdum. Sed suscipit risus sit amet dui placerat, et molestie dui pharetra. Morbi nec sem vehicula, viverra ante quis, venenatis sapien. Quisque finibus magna id magna hendrerit ultricies.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

// Export the module back to the route
module.exports = CommentPanels;
