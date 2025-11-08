import {NextResponse} from "next/server"
import {db} from "@/app/lib/database"

export async function GET(){
    try{
        const pokemons = await db.getAll();
        return NextResponse.json(pokemons, {status: 200});
    }
    catch (error){
        return NextResponse.json({error: "Error al obtener pokemons"}, {status: 500});
    }
}

export async function POST(request: Request){
    try{
        const body = await request.json();
        const {name, id} = body;

        if (!body.name || !body.id){
                return NextResponse.json(
                    {error: "Faltan campos obligatorios: id y name"},
                    {status: 400}
                );
            }

        const newPokemon = await db.create({
            id: body.id,
            name: body.name, 
        });
        return NextResponse.json(newPokemon,{status:201});
    }
    catch(error){
        return NextResponse.json(
            {error: "Error al crear produto"},
            {status: 500}
        );
    }
}
