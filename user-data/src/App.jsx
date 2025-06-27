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
                <div key={index} className='p-4 m-2 border-3'>
                    <h4>Name: {data.name}</h4>
                    <h4>Username: {data.username}</h4>
                    <h4>Email: {data.email}</h4>
                </div>
            ))}
        </div>
    );
};

export default App;
