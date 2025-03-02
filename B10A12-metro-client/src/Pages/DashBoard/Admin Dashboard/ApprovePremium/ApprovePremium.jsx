import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../hooks/UseAxiosSecure';

const ApprovedPremium = () => {
    const axiosSecure = useAxiosSecure();
    const [premiumRequests, setPremiumRequests] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error state

    useEffect(() => {
        // Fetch all premium approval requests
        setLoading(true); // Set loading true when starting to fetch data
        axiosSecure.get('/dashboard/approvedPremium', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, // Add token from localStorage
            }
        })
        .then(response => {
            setPremiumRequests(response.data);
            setLoading(false); // Set loading to false once data is fetched
        })
        .catch(error => {
            setError(error.response ? error.response.data.message : 'Error fetching premium requests'); // Handle error message
            setLoading(false); // Set loading to false on error
            console.error('Error fetching premium requests:', error);
        });
    }, []);

    const handleMakePremium = (id) => {
        axiosSecure.patch(`/dashboard/approvedPremium/${id}`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }
        })
        .then(response => {
            console.log('Biodata updated to premium:', response);
            // Optimistically update the status in UI
            setPremiumRequests(prevRequests => 
                prevRequests.map(request => 
                    request._id === id ? { ...request, status: 'premium' } : request
                )
            );
        })
        .catch(error => {
            setError(error.response ? error.response.data.message : 'Error making biodata premium');
            console.error('Error making biodata premium:', error);
        });
    };

    if (loading) {
        return <div>Loading...</div>; // Display loading state
    }

    if (error) {
        return <div>{error}</div>; // Display error if there was an issue
    }

    return (
        <div>
            <h2>Approved Premium Requests</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Biodata Id</th>
                        <th>Make Premium</th>
                    </tr>
                </thead>
                <tbody>
                    {premiumRequests.map(request => (
                        <tr key={request._id}>
                            <td>{request.name}</td>
                            <td>{request.email}</td>
                            <td>{request.biodataId}</td>
                            <td>
                                <button 
                                    onClick={() => handleMakePremium(request._id)} 
                                    disabled={request.status === 'premium'}
                                >
                                    {request.status === 'premium' ? 'Already Premium' : 'Make Premium'}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ApprovedPremium;
