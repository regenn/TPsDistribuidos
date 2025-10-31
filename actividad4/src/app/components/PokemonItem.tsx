//componente que muestra las propiedades de un pokemon utilizando html basico. 
//cada item debe ser un boton presionable
import {useState, useEffect} from "react";
import axios from "axios";

export default function PokemonItem({pokemon}:{pokemon: any}){
    const [click,setClick] = useState<number>(0);

    return (
        <button className ="pokemon-item" onClick={()=> setClick(click+1)}>
        <img 
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            style={{imageRendering: "pixelated"}}
        />
        <h3 style={{fontWeight:"bold",fontSize:"20px"}}>{pokemon.name}</h3>
        <div className="pokemon-types">
            {SVGUnitTypes.map((t)=> (
                <span key={t} className={'pokemon-type ${t}'}>
                    {t}
                </span>
            ))}
        </div>
        <p> Se presiono {click} veces</p>
        </button>
    );
}