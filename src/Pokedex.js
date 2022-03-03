import React from "react";
import Pokemon from "./Pokemon";
import poketext from "./pokedextexto.png";
const Pokedex = (props) => {
    const {pokemon} = props;
    return (
        <div>
            <div className="header">
            <img src = {poketext} 
            alt="poketext"
            />
            </div>
            <div className="pokedex-grid">
          {pokemon.map((pokemon, idx) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </div>
        </div>
    );
};

export default Pokedex;