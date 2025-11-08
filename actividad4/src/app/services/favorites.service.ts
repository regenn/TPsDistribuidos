import {Pokemon} from "@/app/lib/database";

export const favoritesService = {
    getAll: async (): Promise<Pokemon[]> =>{
        const res = await fetch ("/api/favorites");
        if (!res.ok) throw new Error("Error al obtener productos");
        return res.json();
    },

    create: async(name: string): Promise<Pokemon>=> {
        const res = await fetch("/api/favorites",{
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({name}),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Error al crear favorito");
        return data;
    },

    delete: async (id:number): Promise<void> =>{
        const res = await fetch(`/api/products/${id}`,)
    }

}