import React from 'react';
import { GoogleMap, MarkerF, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};


const center = {
  lat: -37.81218719482422,
  lng: 144.96229553222656,
};

 /* const customMarkerIcon = {
  url: 'https://www.flaticon.com/free-icon/location_2775994', 
  scaledSize: new window.google.maps.Size(50, 50), // Set the size of the image
}; */
 
const MapContainer = () => {
  return (
    <LoadScript googleMapsApiKey ={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <MarkerF
          position={center}
          title="Marker Title"
           //icon={customMarkerIcon}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;







