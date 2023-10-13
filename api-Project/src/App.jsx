import { useState } from 'react'
import './App.css'
import ImageData from './Image/ImageData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>hellow</h1>
     <ImageData/>
    </>
  )
}

export default App
