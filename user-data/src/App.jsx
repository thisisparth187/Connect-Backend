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
        <div>
            {user.map((data, index) => (
                <div key={index}>
                    <h1>Name: {data.name}</h1>
                    <h1>Username: {data.username}</h1>
                    <h1>Email: {data.email}</h1>
                </div>
            ))}
        </div>
    );
};

export default App;
