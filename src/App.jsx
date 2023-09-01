import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setcounter] = useState(0)
  let addvalue = ()=> {
    counter = counter + 1
    // console.log(counter);
    setcounter(counter)
}
let removeValue = ()=> {
  if(counter <= 0){
    alert("Your Counter value is 0")
}else{
  counter = counter - 1
  // console.log(counter);
  setcounter(counter)
}
}
  return (
    <>
    <h1>counter App</h1>
    <h2>counter : {counter}</h2>
    <button onClick={addvalue}>add</button>
    <br />
    <br />
    <button onClick={removeValue}>remove</button>
    </>
  )
}

export default App
