import React, { useState } from 'react';
import './App.css';
import Pokedex from './Pokedex';
import axios from 'axios';
import Navbar from './Navbar';
import background from './background.png';
import Searchbar from './Searchbar';

function App() {
  const [pokemon, setPokemon] = useState([])

  axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
     setPokemon(res.data.results.map(p => p.name))
  })

  return (
    <div>
      <Navbar/>
      <div>
        <Searchbar/>
        <div style={{ backgroundImage: `url(${background})` }}>
        <Pokedex pokemon = {pokemon}/>
      </div>
      </div>
    </div>
  );
}

export default App;