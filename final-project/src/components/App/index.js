import {useEffect} from 'react'
const API_KEY = 'AIzaSyCUq9TdIsCUNEYgfZB2AmQm2jjwbgPsJXY'
//process.env.REACT_APP_OPEN_WEATHER_API_KEY
const App = () => {
  const fetchMap = () => {
    fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${API_KEY}&&location=-37.81218719482422,144.96229553222656&radius=1000&type=restaurant`).then(data=> {
      return data.json()
    }).then(jsonData => {
     console.log(jsonData.results)
    }).catch(error=> {
      console.log(error);
    })
  }
  useEffect(() => {
    fetchMap()
  }, [])
  return (
    <>
      <p>Rei Wang</p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
        width="600"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      />
      <br />
    </>
  )
}
export default App;