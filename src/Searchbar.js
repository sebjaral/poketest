import React, { useState } from "react";
import { searchPokemon } from "./Api"; 
import  "./App.css";
const Searchbar = () => {
    const [search, setSearch] = useState('');
    const [pokemon, setPokemon] = useState('');
    const onChange = (evt) => {
        console.log(evt.target.value);
        setSearch(evt.target.value);
    }

    const onClick = async (evt) => {
        const data = await searchPokemon (search);
        setPokemon(data);
        
    }
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Buscar en la Pokédex..."
                onChange={onChange}
                />
            </div>
            <div className="searchbar-btn">
                <button onClick ={onClick}>Buscar</button>
            </div>
            <div>
                {pokemon && 
                <div className="card-searchbar">
                    <div>Nombre: {pokemon.name}</div>
                    <div>Peso: {pokemon.weight}</div>  
                    <div>Tipo: {pokemon.types[0].type.name}</div> 
                    <img src={pokemon.sprites.front_default} alt="Pokemon"/>                 
                </div> 
                    }  
            </div>
        </div>
    )  
};

export default Searchbar;