const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();

    console.log(data);
    const user = await db.usuario.findMany({
        where:{
            user: data.user,
        },
    })
    const usuariosJSON = JSON.stringify(usuarios);

    return NextResponse.json(usuariosJSON);
}