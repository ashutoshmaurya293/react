import { useState } from 'react'
import './App.css'
import ImageData from './Image/ImageData'

function App() {
  const [singlePhoto, setsinglePhoto] = useState([])
  const single = () => {
 
}

  return (
    <>
    <h1>hellow</h1>
     <ImageData single={single}/>
    </>
  )
}

export default App
