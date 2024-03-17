"use client"
import React, { useState } from 'react'

const page = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [warehouseNumber, setWarehouseNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('User:', user);
        console.log('Password:', password);
        console.log('Warehouse Number:', warehouseNumber);

        setUser('');
        setPassword('');
        setWarehouseNumber('');
      };
    return (
        <form className="flex flex-col items-center justify-center h-screen" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="user" className="block">User:</label>
                <input
                    type="text"
                    id="user"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className="border border-gray-400 rounded-md px-4 py-2 w-full text-black"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-400 rounded-md px-4 py-2 w-full text-black"
                />
            </div>
            <div className="mb-4">
                <label htmlFor="warehouseNumber" className="block">Warehouse Number:</label>
                <input
                    type="number"
                    id="warehouseNumber"
                    value={warehouseNumber}
                    onChange={(e) => setWarehouseNumber(e.target.value)}
                    className="border border-gray-400 rounded-md px-4 py-2 w-full text-black"
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Submit</button>
        </form>
    )
}

export default page