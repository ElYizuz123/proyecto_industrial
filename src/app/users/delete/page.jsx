"use client"
import React, { useState } from 'react'

const page = () => {
    const [data, setData] = useState(null)
    const handleOnChange = ({target:{name, value}}) => {
        setData ({ ...data, [name]:value})
    }

    const handleSubmit = (async (e) => {
        e.preventDefault();
        const res = await fetch('/api/auth/delete', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'aplication/json'
            }
        }) 
        const resJSON = await res.json()
        console.log(resJSON)
    });

  return (
    <form className="flex flex-col items-center justify-center h-screen" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="user" className="block">ID:</label>
                <input
                    type="number"
                    name="id_user"
                    onChange={handleOnChange}
                    className="border border-gray-400 rounded-md px-4 py-2 w-full text-black"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
  )
}

export default page