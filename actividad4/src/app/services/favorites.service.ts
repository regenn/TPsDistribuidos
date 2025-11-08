import {Pokemon} from "@/app/lib/database";

export const favoritesService = {
    getAll: async (): Promise<Pokemon[]> =>{
        const res = await fetch ("/api/favorites");
        if (!res.ok) throw new Error("Error al obtener productos");
        return res.json();
    },

    add: async(pokemon: Pokemon): Promise<Pokemon>=> {
        const res = await fetch("/api/favorites",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                id: pokemon.id,
                name: pokemon.name,
            }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Error al crear favorito");
        return data;
    },

    remove: async (id:number): Promise<void> =>{
        const res = await fetch(`/api/favorites/${id}`, {
            method: "DELETE",
        });
        if (!res.ok) throw new Error ("Error al eliminar pokemon favorito");
    },

};
