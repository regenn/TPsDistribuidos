//componente que muestra las propiedades de un pokemon utilizando html basico. 
//cada item debe ser un boton presionable
"use client";
import {useState} from "react";
import axios from "axios";

interface PokemonItem{
    pokemon: any;
}

export default function PokemonItem({pokemon}:PokemonItem){
    const [click,setClick] = useState<number>(0);
    console.log(pokemon);
    
    const sprite = pokemon.sprites.front_default;

    return (
        <button className ="pokemon-item" onClick={()=> setClick(click+1)}>
            <div style={{alignItems:"center"}}>
                <img 
                    src={sprite}
                    //alt={pokemon.name}
                    className="w-32 h-32 mx-auto mb-2"
                    style={{imageRendering: "pixelated"}}
                />
                <h3 style={{fontWeight:"bold",fontSize:"20px"}}>{pokemon.name}</h3>
                <p>altura: {pokemon.height}</p>
                <p>experiencia base: {pokemon.base_experience}</p>
                <p>peso: {pokemon.weight}</p>
                <p> Se presiono {click} veces</p>
            </div>
        </button>
    );
}