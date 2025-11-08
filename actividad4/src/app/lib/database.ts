import fs from "fs/promises";
import path from "path";
//el modulo fs solo funciona en el servidor!!!
//por lo cual esta clase solo se importa y usa dentro de las API routes :3

const DB_PATH = path.join(process.cwd(),"database.json");

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    weight: number;
    types:{
        type_1: string;
        type_2?:string;
    };//no hay pokemons con mas de 2 tipos
    sprite: {
        front_default:string;//la imagen es un string
    
    };
}

class Database {
    private async readDB(): Promise<Pokemon[]>{
        try{
            const data = await fs.readFile(DB_PATH, "utf-8");
            return JSON.parse(data);
        } catch (error){
            //si el archivo no existe, devolver array vacio
            return [];
        }
    }
    private async writeDB(data: Pokemon[]): Promise<void>{
        await fs.writeFile(DB_PATH, JSON.stringify(data,null,2));
    }

    async getAll(): Promise<Pokemon[]>{
        return await this.readDB();
    }

    async getById(id: number): Promise<Pokemon | undefined>{
        const data = await this.readDB();
        return data.find((item)=> item.id === id);
    }

    async create(pokemon: Pokemon): Promise<Pokemon> {
        const data = await this.readDB();
        
        const exists = data.some((p) => p.id === pokemon.id);
        if (exists) {
            throw new Error(`El pokemon con id ${pokemon.id} ya fue elegido`);
        }

        data.push(pokemon);
        await this.writeDB(data);
        
        return pokemon;
    };

    async delete(id: number): Promise<boolean>{
        const data = await this.readDB();
        const initialLength = data.length;
        const filtered = data.filter((item)=> item.id !== id);

        if (filtered.length === initialLength){
            return false; //No se encontro el elemento
        }

        await this.writeDB(filtered);
        return true;
    }

    async update(id: number, updates: Partial<Omit<Pokemon, "id" | "createdAt">>): Promise<Pokemon | null>{
        const data = await this.readDB();
        const index = data.findIndex((item)=> item.id === id);

        if (index === -1){
            return null;
        }
        data[index] = {...data[index],...updates};
        await this.writeDB(data);
        return data[index];
    }
}

export const db = new Database();
