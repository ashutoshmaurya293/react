import { useState } from 'react'
import './App.css'
import Start from './components/Start'
import GamePlay from './components/GamePlay'

function App() {
const [IsGamePlay, setIsGamePlay] = useState(false)

const Gameplay = ()=>{
  setIsGamePlay((prev)=> !prev)

}
  return (
    <>
   {IsGamePlay? <GamePlay/> : <Start Gameplay={Gameplay}/>}
    </>
  )
}

export default App
