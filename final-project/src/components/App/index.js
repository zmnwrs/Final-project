import { useState } from "react"

const API_KEY = 'BLDUIhti84ilqFvaCol9Y8sEW1sn0WNc'
//process.env.REACT_APP_OPEN_WEATHER_API_KEY

const App = () => {

  //const [location, setlocation] = useState('')
  const [url, setUrl] = useState('')

  /*  const handleInputChange = (e) => {
     setlocation(e.target.value)
   } */

  const fetchUrl = () => {
    fetch(
      `https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}&tag=&rating=g`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUrl(data.data.images.original.url);
      })
      .catch((error) => console.log('Oops, something wrong', error))

  }

  return (
    <>
      <p>Rei Wang</p>
      {/*       <input type="text" onChange={handleInputChange} />
 */}
      <button onClick={fetchUrl}>Fetch the image</button>
      <br />
      <img src={url} alt="Random Gif" />
    </>
  )
}


export default App;
