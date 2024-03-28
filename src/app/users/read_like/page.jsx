"use client"
import React, { useState } from 'react'

const page = () => {
    const [data, setData] = useState(null)
    const handleOnChange = ({target:{name, value}}) => {
        setData ({ ...data, [name]:value})
    }
    const [users, setUsers] = useState(null)
    const handleSubmit = (async (e) => {
        e.preventDefault();
        const res = await fetch('/api/auth/read_like', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'aplication/json'
            }
        }) 
        const resJSON = await res.json()
        setUsers(JSON.parse(resJSON))
        console.log(resJSON)
    });

  return (
    <form className="flex flex-col items-center justify-center h-screen" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="user" className="block">User:</label>
                <input
                    type="text"
                    name="user"
                    onChange={handleOnChange}
                    className="border border-gray-400 rounded-md px-4 py-2 w-full text-black"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
            <div className='h-48 w-48'>
                    {users && 
                    users.map((user)=> (<li key={user.id_usuario} className='p-3'>
                        <p>{user.user}</p>
                        <p>{user.password}</p>
                        </li>))}
            </div>
        </form>
  )
}

export default page