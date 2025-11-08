import axios from "axios";

export type Pokemon = {
    name: string;
}
export async function fetchPokemonList(cant_pokemon: number, offset: number): Promise<Pokemon[]>{
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limi=${cant_pokemon}&offset=${offset}`);
    const data = response.data.results;
                
    const promises = data.map((p: any)=> axios.get(p.url));
    const responses = await Promise.all(promises);

    const fullData= responses.map(r=>r.data);
    return fullData;
}