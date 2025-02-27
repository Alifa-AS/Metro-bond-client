// import React from 'react';

// const ApprovePremium = () => {
//     return (
//         <div>
//             approve Premium
//         </div>
//     );
// };

// export default ApprovePremium;

import { useEffect, useState } from "react";
import axios from "axios";

const ApprovePremium = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch users from backend
        axios.get('https://b10-a12-metro-server.vercel.app/users')
            .then(response => {
                setUsers(response.data); // Data set in state
            })
            .catch(error => {
                console.log("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h2>Users</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default ApprovePremium;
