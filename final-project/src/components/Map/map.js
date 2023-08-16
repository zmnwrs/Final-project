import React from "react";

import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

let coords = [];

class Map extends React.Component {
  state = {
    center: { lat: -33.867, lng: 151.195 },
    coordsResult: []
  };

  onMapLoad = map => {
    let request = {
      query: "Melbourne Museume",
      fields: ["name", "geometry"]
    };

    let service = new window.google.maps.places.PlacesService(map);

    service.findPlaceFromQuery(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          console.log("results",results[i])
          const location = results[i].geometry.location;
        console.log("Place Name:", results[i].name);
        console.log("Place location:", location);
        console.log("Latitude:", location.lat());
        console.log("Longitude:", location.lng());
          coords.push(results[i]);
        }

        this.setState({
          center: results[0].geometry.location,
          coordsResult: coords
        });
      }
    });
  };

  render() {
    return (
      <div>
        <GoogleMap
          center={this.state.center}
          zoom={13}
          onLoad={map => this.onMapLoad(map)}
          mapContainerStyle={{ height: "400px", width: "800px" }}
        >
          {this.state.coordsResult !== [] &&
            this.state.coordsResult.map(function (results, i) {
              return (
                <Marker key={i} position={results.geometry.location}>
                  <InfoWindow
                    options={{ maxWidth: 300 }}
                    position={results.geometry.location}
                    >


                    <span>{results.name}</span>

                  </InfoWindow>
                </Marker>
              );
            })}
        </GoogleMap>
      </div>
    );
  }
}

export default Map;