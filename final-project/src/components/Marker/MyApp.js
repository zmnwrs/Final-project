import { Map  } from '@googlemaps/react-wrapper'

function MyMarker() {
  return <Marker position={{ lat: 37.7749, lng: -122.4194 }} />
}


function MyApp() {
  return (
    <div>
      <Map apiKey= "AIzaSyCUq9TdIsCUNEYgfZB2AmQm2jjwbgPsJXY"
       defaultZoom={8}
       defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
       defaultOptions={{ styles: {
        width: '100%',
        height: '400px',
      }, disableDefaultUI: true }}
>

<MyMarker />
</Map>
       
      
    </div>
  )
}

export default MyApp
