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

        if (!body.name || !body.base_experience || !body.height || 
            !body.weight || !body.types.type1 ){
                return NextResponse.json(
                    {error: "Faltan campos obligatorios: name, base_experience, height, weight, type1"},
                    {status: 400}
                );
            }
        if (body.base_experience < 0){
            return NextResponse.json(
                { error: "La experiencia base deberia ser mayor o igual a 0"},
                { status: 400}
            );
        }
        if (body.height <= 0){
            return NextResponse.json(
                { error: "La altura deberia ser mayor a 0"},
                { status: 400}
            );
        }

         if (body.weight <= 0){
            return NextResponse.json(
                { error: "El peso deberia ser mayor a 0"},
                { status: 400}
            );
        }

        const newProduct = await db.create({
            id: body.id,
            name: body.name,
            base_experience: body.base_experience,
            height: body.height,
            weight: body.weight,
            types:{
                type_1: body.types.type_1,
                type_2: body.types.type_2 || "",
            },
            sprite:{
                front_default: body.sprites.front_default,
            },
            
        })
    }
}
