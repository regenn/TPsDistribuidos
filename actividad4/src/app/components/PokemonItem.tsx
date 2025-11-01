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
    const sprite = pokemon.sprites?.other["official-artwork"].front_default || "/placeholder.png";

    if (!pokemon) 
        return <p>Cargando... :3</p>;

    return (
        <button className ="pokemon-item" onClick={()=> setClick(click+1)}>
        <img 
            src={sprite}
            alt={pokemon.name}
            style={{imageRendering: "pixelated"}}
        />
        <h3 style={{fontWeight:"bold",fontSize:"20px"}}>{pokemon.name}</h3>
        <p>altura: {pokemon.height}</p>
        <p>experiencia base: {pokemon.base_experience}</p>
        <p>peso: {pokemon.weigth}</p>
        <p> Se presiono {click} veces</p>
        </button>
    );
}