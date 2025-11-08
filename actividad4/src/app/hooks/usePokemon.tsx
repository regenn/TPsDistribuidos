//import Pokemon from "../pokemon/[name]/page";
"use client"
import { useQuery } from "@tanstack/react-query";
import {fetchPokemonList, Pokemon} from "../services/utils";


export default function usePokemon(cant_pokemon: number, offset: number){
    return useQuery<Pokemon[]>({
        queryKey:["pokemons",cant_pokemon,offset],
        queryFn: ()=>fetchPokemonList(cant_pokemon,offset),
    });
     // const {data, isLoading, error} = useQuery<Pokemon[]>({
   //     queryKey: ["pokemons"],
   //     queryFn: fetchPokemon,
   // });

}