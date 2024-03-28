const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();
    const bcrypt = require("bcrypt");

    console.log(data);
    const hashPass = await bcrypt.hash(data.password, 10);
    const user = await db.usuario.update({
        where:{
            id_usuario: parseInt(data.id),
        },
        data:{
            password: hashPass,
            user: data.user,
            almacen: data.warehouseNumber
        }
    })
    console.log(user)
    return NextResponse.json('actualizado');
}