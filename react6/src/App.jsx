import { useState } from 'react'
import './App.css'
import Card from './card/Card'
import Grid from './Grid/Grid'

function App() {

  return (
    <>
    <h1 className='h1'>Tic Tak Toe</h1>
<Grid numberOfCards={9} />
    </>
  )
}

export default App
