//client side component
//debe utilizar libreria TanStack Query para pedir los datos
//elegir una libreria externa a eleccion para mostrar un skeleton mientras la pagina carga
//desarrollar un componente de paginacion para poder cambiar de pagina ("cargar mas")-> hook de ReactQuery
"use client";
import {useState, useEffect} from "react";
import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import PokemonItem from "./PokemonItem"
import Pagination from "./Pagination"
import usePokemon from "../hooks/usePokemon"
import {Pokemon} from "../services/utils"

async function fetchPokemon(): Promise<Pokemon[]>{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = response.data.results;
                
    const promises = data.map((p: any)=> axios.get(p.url));
    const responses = await Promise.all(promises);

    const fullData= responses.map(r=>r.data);
    return fullData;
}

export default function PokemonList(){
   // const {data, isLoading, error} = useQuery<Pokemon[]>({
   //     queryKey: ["pokemons"],
   //     queryFn: fetchPokemon,
   // });


    const [page, setPage] = useState(1);

    const cant_pokemon = 20;
    const offset = (page - 1) * cant_pokemon;

    const {data, isLoading, error} = usePokemon(cant_pokemon, offset);
    const limit = data?.length;

    //const [pokemon, setPokemon] = useState<any[]>([]);//empiezo con un array vacio, de tipo any[]
    //const [error, setError] = useState<string>("");
    //const [loading,setLoading] = useState(true);
    
    /*useEffect(() => {
        const getPokemon = async () => {
            try{
                const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
                const data = response.data.results;
                
                const promises = data.map((p: any)=> axios.get(p.url));
                const responses = await Promise.all(promises);

                const fullData= responses.map(r=>r.data);
                setPokemon(fullData);
                setLoading(false);
            }
            catch (error){
                setError("Ocurrio un error al cargar los pokemons :(");
            }
        };
        getPokemon();
    }, []);*/

    if (isLoading) 
        return <p>Cargando pokemons...</p>;

    if (error) 
        return <p>Error al cargar los pokemons..</p>;
    
    return(
        <div>
            <div className="pokemon-list">
            {data?.map(p => (
                <Link key={p.name} href={`/pokemon/${p.name}`}>
                    <PokemonItem key={p.name} pokemon={p}/>
                </Link>
            ))}
            </div>

            <Pagination page={page} setPage={setPage}/> 
        </div>  
    )
}