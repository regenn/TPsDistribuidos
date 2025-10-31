import PokemonList from "@/components/PokemonList"

export default function Home() {
  return (
    <main
    style={{textAlign: "center",
            padding:"30px",
    }}>
      <h1>Pokedex</h1>
      <PokemonList/>
    </main>
  );
}