import React from "react";

export default function pokedex({ pokemon }) {
    return (
        <div>
            {pokemon.map((p,idx) => (
                <div key={p}>#{idx+1}: {p}</div>
            ))}
        </div>
    )
}
