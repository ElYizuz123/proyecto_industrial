"use client"
import React, { useState } from 'react'

const page = () => {
    const [users, setUsers] = useState(null)
    const handleSubmit = (async () => {
        const res = await fetch('/api/auth/read_where')
        const resJSON = await res.json()
        setUsers(JSON.parse(resJSON))
        console.log(resJSON)
    });

  return (
    <div className='h-full h-full'>
        <button onClick={handleSubmit} className='h-16 w-24 bg-emerald-300 m-3'>
            <h1>Leer usuarios</h1>
        </button>
        <div className='h-48 w-48'>
            {users && 
            users.map((user)=> (<li key={user.id_usuario} className='p-3'>
                <p>{user.user}</p>
                <p>{user.password}</p>
                </li>))}
        </div>
    </div>
  )
}

export default page