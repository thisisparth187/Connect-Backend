import React, { useEffect, useState } from 'react';

const App = () => {
    const [user, setUser] = useState([]);

    const getUser = () => {
        fetch("/api/users")
            .then(res => res.json()) // Fixed this line
            .then(json => setUser(json))
            .catch(err => console.error("Failed to fetch user:", err)); // Optional: error handling
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <div className="container mx-auto p-4">
            {user.map((data, index) => (
                <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <h1 className="text-2xl font-bold text-gray-800">Name: {data.name}</h1>
                    <h1 className="text-xl text-gray-700">Username: {data.username}</h1>
                    <h1 className="text-lg text-gray-600">Email: {data.email}</h1>
                </div>
            ))}
        </div>
    );
};

export default App;
