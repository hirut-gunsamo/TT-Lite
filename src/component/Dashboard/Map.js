//import features displayed on this simple map
import React, { Component } from "../../../node_modules/react";
import { Map, Marker, GoogleApiWrapper } from "../../../node_modules/google-maps-react";

/*! *************
 * Simple Map section *
 ************** */
class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    const initialPosition = [47.444, -122.176];

    const generateMarkerPosition = () => {
      const markers = [{ lat: 47.444, lng: -122.176 }];
      var i;
      for (i = 0; i < 30; i++) {
        markers.push({
          lat: initialPosition[0] - Math.random(),
          lng: initialPosition[1] + Math.random()
        });
      }

      return markers;
    };

    console.log("generage ", generateMarkerPosition());

    return (
      <div>
        <Map
          google={this.props.google}
          zoom={8}
          style={{ height: "87%", width: "94%" }}
          initialCenter={{ lat: 47.444, lng: -122.176 }}
        >
          {generateMarkerPosition().map(marker => (
            <Marker position={marker} />
          ))}
        </Map>
      </div>
    );
  }
}

/*! *************
 * End of Simple Map section *
 ************** */

export default GoogleApiWrapper({
  apiKey: "" // should be replaced with google map API key, currenlty, its in a development mode
})(SimpleMap);
