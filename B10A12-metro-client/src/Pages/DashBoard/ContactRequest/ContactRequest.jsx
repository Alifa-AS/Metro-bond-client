import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/UseAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const MyContactRequest = () => {
  const [contactRequests, setContactRequests] = useState([]);
  const { user, token } = useAuth(); // Assuming token is part of the user context
  const axiosSecure = useAxiosSecure();
  
  useEffect(() => {
    // Fetch the data from the backend
    const fetchContactRequests = async () => {
      try {
        // Use axiosSecure for the GET request
        const response = await axiosSecure.get(`/dashboard/contact-request/${user?.email}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setContactRequests(response.data); // Assuming response.data contains the contact requests
      } catch (error) {
        console.error('Error fetching contact requests:', error);
      }
    };

    // Only fetch data if user and token are available
    if (user && token) {
      fetchContactRequests();
    }
  }, [user, token]); // Added dependencies for user and token

  const handleDelete = async (biodataId) => {
    try {
      // Use axiosSecure for the DELETE request
      const response = await axiosSecure.delete(`/delete-contact/${biodataId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        // After deletion, remove the item from the state
        setContactRequests(contactRequests.filter(request => request.biodataId !== biodataId));
      } else {
        console.error('Error deleting contact request');
      }
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div className="container">
      <h1>My Contact Requests</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Biodata Id</th>
            <th>Status</th>
            <th>Mobile No</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactRequests.map((request) => (
            <tr key={request.biodataId}>
              <td>{request.name}</td>
              <td>{request.biodataId}</td>
              <td>{request.status}</td>
              <td>{request.mobileNo}</td>
              <td>{request.email}</td>
              <td>
                <button onClick={() => handleDelete(request.biodataId)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyContactRequest;
