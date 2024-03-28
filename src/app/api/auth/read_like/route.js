const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();

    console.log(data);
    const user = await db.usuario.findMany({
        where:{
            user: {
                contains: data.user,
            },
        },
    })
    const usuariosJSON = JSON.stringify(user);
    console.log(user)
    return NextResponse.json(usuariosJSON);
}