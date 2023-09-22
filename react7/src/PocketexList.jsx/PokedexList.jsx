import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './PokedexList.css'

function PokedexList(){
  const [PocList, setPocList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  async function dpoc() {
    const res = await axios.get('http://pokeapi.co/api/v2/pokemon')
    const result = res.data.results
    const pokemonResultPromise = result.map((pokemon) => axios.get(pokemon.url))
    const pokemonData = await axios.all(pokemonResultPromise)
    console.log(pokemonData);
    setPocList(pokemonData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        name: pokemon.name,
        image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front.shine,
        types: pokemon.types
      }
 }));
 console.log(res);
 setPocList(res)
    setIsLoading(false)
  }
  useEffect(() => {
    dpoc();
  }, [])
  return (
    <div className='raj'>
      <h2>Pokenon List</h2>
      {(isLoading) ? 'Loading...' : 'Data downloaded'}
    </div>
  )
}

export default PokedexList