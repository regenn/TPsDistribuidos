//que el detalle del pokemon sea totalmente client-side
//usar un archivo loading! para dar una experiencia agradable
import Link from "next/link"
import axios from "axios"
import {useQueryClient} from "@tanstack/react-query"


type id = {
    params: { name: string };
};

export default async function Pokemon({params}: id) {
    const {name} = params
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = response.data;


    const sprite = data.sprites.front_default;

    return (
    <div style={{alignItems:"center"}}>
        <h1 style={{fontWeight:"bold",fontSize:"20px"}}>{data.name}</h1>
        <img 
            src={sprite} 
            alt={data.name} 
            className="w-32 h-32 mx-auto mb-2" 
            style={{imageRendering: "pixelated"}}/>
        <p>altura: {data.height}</p>
        <p>peso: {data.weight}</p>
        <p>experiencia base: {data.base_experience}</p>
        <p>tipos: {data.types.map((t: any) => t.type.name).join(",")}</p>
    </div>
    );
}