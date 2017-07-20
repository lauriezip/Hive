// Include React as a dependency
var React = require("react");
var Link = require("react-router").Link;
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
const position = [32.06618,-81.09339];
const mapStyles = {
  padding: '0px'
};

var Maps = React.createClass({

  render: function () {
    return (
      <div>
        <div className="col-md-6">
          <div className="well gray-card map" style={mapStyles}>  
          </div>
        </div>
      </div>
    );
  }
});



// Export the module back to the route
module.exports = Maps;




<Map center={position} zoom={13}>
<TileLayer
url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
/>https://www.openstreetmap.org/way/330248927#map=15/32.0748/-81.0925
<Marker position={position}>
<Popup>
<span>A pretty CSS3 popup.<br/>Easily customizable.</span>
</Popup>
</Marker>
</Map>