const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function POST(request){
    const data = await request.json();
    const bcrypt = require("bcrypt");

    console.log(data);
    const hashPass = await bcrypt.hash(data.password, 10);
    const newUser = await db.usuario.create({
        data:{
            password: hashPass,
            user: data.user,
            almacen: data.warehouseNumber
        }
    })

    

    return NextResponse.json("Registrando");
}