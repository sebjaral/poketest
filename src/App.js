import React, { useState } from 'react';
import './App.css';
import Pokedex from './Pokedex';
import axios from 'axios';
import Navbar from './Navbar';
import background from './background.png';
import Searchbar from './Searchbar';

function App() {
 

 
  return (
    <div>
      <Navbar/>
      <div>
        <Searchbar/>
        <div style={{ backgroundImage: `url(${background})` }}>
       
      </div>
      </div>
    </div>
  );
}

export default App;