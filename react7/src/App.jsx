import { useState } from 'react'
import './App.css'
import Pokedex from './comonents/Pokedex/Pokedex'
import PokedexList from './PocketexList.jsx/PokedexList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Pokedex/>
    <PokedexList/>
    </>
  )
}

export default App
