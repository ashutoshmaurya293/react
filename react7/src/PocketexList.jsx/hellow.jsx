// import React, { useState } from 'react'
// import { useEffect } from 'react'
// import axios from 'axios'
// import './PokedexList.css'
// import Pokemon from '../comonents/Pokemon/Pokemon'

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
        id: pokemon.id,
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
      {(isLoading) ? 'Loading...' : 
      "hellow"+
    PocList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id}/>)
      }
    </div>
  )
}

// export default PokedexList



function PokemonList(){
  const [pokemonList, setPokemonList] = useState([]);
  const[isLoading, setIsLoading]= useState(true)
  
  async function downloadePokemon(){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    const pokemonResult = response.data.results;
    const pokemonResultPromise = pokemonResult.map((pokemon)=> axios.get(pokemon.url))
    const pokemonData = await axios.all(pokemonResultPromise)
    console.log(pokemonData);
    const res = pokemonData.map((pokeData)=> {
      const pokemon = pokeData.data;
      return{
        key:pokeData.id,
        name: pokemon.name,
        image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front.shine,
        types: pokemon.types
      }
    })
    console.log(res);
    setPokemonList(res)
    setIsLoading(false)
  }
  useEffect(()=>{
    downloadePokemon
  }, [])
return (
  <div className='raj'>
<div>Pokemon List</div>
{(isLoading)? 'Loading...':
PokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id}/>)
}
  </div>
)
  

}

// export default PokemonList;