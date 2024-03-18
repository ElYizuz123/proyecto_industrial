const { NextResponse } = require("next/server")
import db from '@/libs/db'

export async function GET(){
    try{
        const data = await db.usuario.findMany();

        console.log(data);

        return NextResponse.json(JSON.stringify(data));

    }catch(err){
        console.error('Error al leer los datos', error)
        return{
            status: 500,
            body: 'Error al obtener los datos'
        }
    }

    
}
