import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
  <div className='div'style={{backgroundColor:color}}>
<button className='a' onClick={ ()=> setColor("red")}>
  Red
</button>
<button className='b' onClick={ ()=> setColor("black")}>
  Black
</button>
<button className='c' onClick={ ()=> setColor("yellow")}>
  Yellow
</button>
<button className='d' onClick={ ()=> setColor("orange")}>
  Orange
</button>
<button className='e' onClick={ ()=> setColor("green")}>
  Green
</button>
<button className='f' onClick={ ()=> setColor("pink")}>
  Pink
</button>
<button className='g' onClick={ ()=> setColor("blue")}>
  Blue
</button>
  </div>
  )
}

export default App
