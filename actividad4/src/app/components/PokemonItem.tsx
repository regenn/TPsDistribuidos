//componente que muestra las propiedades de un pokemon utilizando html basico. 
//cada item debe ser un boton presionable
interface PokemonItem{
    pokemon: any;
}

export default function PokemonItem({pokemon}:PokemonItem){
    console.log(pokemon);
    
    const sprite = pokemon.sprites.front_default;

    return (
            <div style={{alignItems:"center"}}>
                <img 
                    src={sprite}
                    //alt={pokemon.name}
                    className="w-32 h-32 mx-auto mb-2"
                    style={{imageRendering: "pixelated"}}
                />
                <h3 style={{fontWeight:"bold",fontSize:"20px"}}>{pokemon.name}</h3>
                <button>
                    
                </button>
            </div>
    );
}