import { useEffect } from 'react'
import { useState } from 'react'
import MapContainer from "../Marker/marker"
import Home from '../Marker/indexForYT'
//import { useRef } from 'react'



const App = () => {
  //const mapRef = useRef(null)
  //const [mapReady, setMapReady] = useState(false)

  /**
   * @description This function is called when the map is ready
   * @param {Object} map - reference to the map instance
   * @param {Object} maps - reference to the maps library
   */
/*   const onGoogleApiLoaded = ({ map, maps }) => {
    mapRef.current = map
    setMapReady(true)
  }

  const onMarkerClick = (e, { markerId, lat, lng }) => {
    console.log('This is ->', markerId)
 */
    // inside the map instance you can call any google maps method
    //mapRef.current.setCenter({ lat, lng })
    // rif. https://developers.google.com/maps/documentation/javascript/reference?hl=it
  

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  const [searchPrompt, setPrompt] = useState('')
  const [map, setMap] = useState('')
  const [searchResult, setSearchResult] = useState('')


  function handleChange(e) {
    setPrompt(e.target.value)
  }

  const fetchMap = () => {
    fetch(
      //`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyCUq9TdIsCUNEYgfZB2AmQm2jjwbgPsJXY&&location=-37.81218719482422,144.96229553222656&radius=1500&type=restaurant$keywords=${searchPrompt}`, 
      //{ headers: { "Access-Control-Allow-Origin": "*" }, mode: 'no-cors' }
      `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?
      fields=formatted_address%2Cname%2Crating%2Copening_hours%2Cgeometry&
      input=${searchPrompt}&
      inputtype=textquery&
      locationbias=circle%3A2000%40-37.81218719482422%2C144.96229553222656&
      key=${API_KEY}`, 
    /* {
      method: "GET",
     mode: "no-cors"
    }  */
    )
      .then((data) => {
        console.log(data.body)
      })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchResult(data.candidates);
        console.log(searchResult)
        setMap(data.candidates.formatted_address)
      })
      .catch(error => {
        console.log(error);
      })
  }
  useEffect(() => {
    fetchMap()
    //initmap()
  }, [fetchMap])

  /* const initmap = () => {
    var sydney = new google.maps.LatLng(-33.867, 151.195);
  
    infowindow = new google.maps.InfoWindow();
  
    map = new google.maps.Map(
        document.getElementById('map'), {center: sydney, zoom: 15});
  
    var request = {
      query: 'Museum of Contemporary Art Australia',
      fields: ['name', 'geometry'],
    };
  
    var service = new google.maps.places.PlacesService(map);
  
    service.findPlaceFromQuery(request, function(results, status) {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
          createMarker(results[i]);
        }
        map.setCenter(results[0].geometry.location);
      }
    });
    
  } */

  return (
    <>
      <p>Rei Wang - Meals to try</p>
      <input placeholder="Find a restaurant " type='text' value={searchPrompt} onChange={handleChange} />
      <button onClick={fetchMap}>Find a restaurant</button>
      <br />

      <p>This input is {searchPrompt}</p>
      <p>The output info should be {map}   --- Can make it into a to-do list item </p>
      <br />
      <p>{API_KEY}</p>
      <p>This is the Melbourne CBD map---to make markers here</p>

      <br />

     {/*  
      <iframe
        title="Melboure CBD map"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        allowfullscreen
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCUq9TdIsCUNEYgfZB2AmQm2jjwbgPsJXY
    &q=Melbourne 3000">
      </iframe>*/}
      <br />
      <p>Test for Marker</p>
      <MapContainer /> 


   {/*    <p>try youtube tutorial</p>
      <Home />
 */}
  {/*     {mapReady && <div>Map is ready. See for logs in developer console.</div>}
      <GoogleMap
        apiKey=""
        defaultCenter={{ lat: 45.4046987, lng: 12.2472504 }}
        defaultZoom={5}
        options={mapOptions}
        mapMinHeight="100vh"
        onGoogleApiLoaded={onGoogleApiLoaded}
        onChange={(map) => console.log('Map moved', map)}
      >
        {coordinates.map(({ lat, lng, name }, index) => (
          <Marker
            key={index}
            lat={lat}
            lng={lng}
            markerId={name}
            onClick={onMarkerClick}
            // draggable={true}
            // onDragStart={(e, { latLng }) => {}}
            // onDrag={(e, { latLng }) => {}}
            // onDragEnd={(e, { latLng }) => {}}
          />
        ))}
      </GoogleMap> */}
    </>
  )
}

export default App





