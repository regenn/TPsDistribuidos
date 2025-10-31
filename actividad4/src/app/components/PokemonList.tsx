//lista que, al montarse, realiza una peticion HTTP con axios
//obtiene los primeros 20 Pokemons
//los Pokemons deben ser renderizados en lista en forma de componentes PokemonItem
import {useState, useEffect} from "react";
import axios from "axios";
import PokemonItem from "./PokemonItem"

export default function PokemonList(){
    const [pokemon, setPokemon] = useState([]);//empiezo con un array vacio, de tipo any[]
    const [error, setError] = useState<string>("");
    
    useEffect(() => {
        const getPokemon = async () => {
            try{
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
                const data = response.data.results;
                setPokemon(data);
            }
            catch (error){
                setError("Ocurrio un error al cargar los pokemons :(");
            }
        };
        getPokemon();
    }, []);

    if (error) 
        return <p>{error}</p>;
    
    return(
        <div>
            <div className="pokemon-list">
            {pokemon.map(p => (
                <PokemonItem key={p.name} pokemon={p}/>
            ))}
            </div>
            
        </div>
    )
}