import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PokedexList.css";
import Pokemon from "../comonents/Pokemon/Pokemon";

function PokemonList() {
  const [pokemonList, setpokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  async function downloadePokemon() {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemonResult = response.data.results;
    const pokemonResultPromise = pokemonResult.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonData = await axios.all(pokemonResultPromise);
      const res = pokemonData.map((pokeData) => {
        const pokemon = pokeData.data;
        return {
          id:pokemon.id,
          name: pokemon.name,
          image:(pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default:pokemon.sprites.front.shine,
          types: pokemon.types
        }
        })
        console.log(res);
        setpokemonList(res)
    setIsLoading(false);
    console.log(pokemonData);
  }
  useEffect(() => {
    downloadePokemon();
  }, []);

  return (
    <div className="raj">
      <div> PokedexList</div>
      {isLoading ? "Loading...." : 
      pokemonList.map((p)=> <Pokemon name={p.name} image={p.image} key={p.id}/>)
      }
    </div>
  );
}

export default PokemonList;
