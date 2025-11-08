import { NextResponse } from "next/server";
import { db } from "@/app/lib/database";

export async function DELETE(
    request: Request,
    { params }: { params: { id: string }}
){
    try{
        const id = parseInt(params.id);
        
        if (isNaN(id)){
            return NextResponse.json(
                {error: "ID Invalido"},
                { status: 400}
            );
        }

        const deleted = await db.delete(id);

        if (!deleted){
            return NextResponse.json(
                {error: "Producto no encontrado"},
                { status: 404}
            );
        }

        return NextResponse.json(
            { message: "Product eliminado correctamente"},
            { status: 200}
        );        
    } catch (error){
        return NextResponse.json(
            {error: "Error al eliminar producto"},
            {status: 500}
        );
    }
}