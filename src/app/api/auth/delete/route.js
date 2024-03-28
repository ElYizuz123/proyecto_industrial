const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();
    console.log(data.id_user)
    try{
        const user = await db.usuario.delete({
            where:{
                id_usuario: parseInt(data.id_user),
            },
        })
        console.log("Usuario eliminado con éxito: ID: "+data.id_user);
        return NextResponse.json("Usuario eliminado con éxito: "+data.id_user);
    } catch(e){
        console.error("Error al eliminar el usuario: ", e);
        return NextResponse.json("Error al eliminar el usuario: "+data.id_user);
    }
    
    
    
}