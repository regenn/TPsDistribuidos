import axios from 'axios'

async function getPokemon(){
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //const response = await fetch('https://pokeapi.co/api/v2/pokemon'); 
    //const data = await response.json();
    //console.log(data);
    console.log(response.data);
}
getPokemon();
