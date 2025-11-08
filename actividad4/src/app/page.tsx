//la lista de pokemosn ahora sea un client side component
"use client";
import {useState, useEffect} from "react";
import axios from "axios";
import Link from "next/link";
import PokemonItem from "./components/PokemonItem"
import PokemonList from "./components/PokemonList"

export default function Home(){
    return(
      <main
        style={{textAlign: "center",
            padding:"30px",
      }}>
       <PokemonList/>
      </main>    
    )
}