import React, { useState, useEffect } from 'react';
import './App.css';
import Pokedex from './Pokedex';
import Navbar from './Navbar';
import background from './background.png';
import Searchbar from './Searchbar';
import 'bootstrap/dist/css/bootstrap.css';
import { getPokemonData, getPokemons } from "./Api.js"


function App() {
 
  const [pokemons, setPokemons] = useState([]);
 
  const fetchPokemons = async () => {
    try {
      const data = await getPokemons();
      const promises =data.results.map( async (pokemon) => {
          return await getPokemonData(pokemon.url)
      })
      const results = await Promise.all(promises)
      setPokemons(results)
    }catch(err){ 

    }
  }


  useEffect(() => {
    fetchPokemons();
  }, [])


  return (
    <div>
       <div style={{ backgroundImage: `url(${background})` }}>
      <Navbar/>
      <div>
        <Searchbar/>
       <Pokedex pokemon={pokemons}/>     
      </div>
      </div>
    </div>
  );
}

export default App;