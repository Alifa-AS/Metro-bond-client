import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import { Table } from "flowbite-react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ApproveContact = ({ data }) => {
  const [approvedContacts, setApprovedContacts] = useState([]);
  const axiosSecure = useAxiosSecure();

  const { data: contactRequests = [], refetch } = useQuery({
    queryKey: ["contactRequests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contact-requests");
      return res.data;
    },
  });


   // Handling the approval of a contact request
   const handleApproveRequest = (id) => {
    setApprovedContacts([...approvedContacts, contact]);
    axiosSecure
      .patch(`/contact-requests/${id}/approve`)
      .then((response) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${contact.name} has been approved!`,
          showConfirmButton: false,
          timer: 1500,
        });
        refetch(); // Refetch after the status is updated
      })
      .catch((error) => {
        console.error("Error approving the request:", error);
      });
  };
  
  const handleDelete = (contactId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setApprovedContacts(approvedContacts.filter((contact) => contact._id !== contactId)); // Remove from approved list
        Swal.fire({
          title: "Deleted!",
          text: "Contact has been deleted.",
          icon: "success",
        });
        refetch();
      }
    });
  };
  

  return (
    <>
      <Helmet>
        <title>Metro || Approve Contacts</title>
      </Helmet>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 text-center">
          Approved Contact Requests
        </h2>

        {/* Approved Contacts Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full border border-pink-300 shadow-lg">
            <thead className="bg-pink-200 text-pink-900">
              <tr>
                <th className="border border-pink-300 px-4 py-2">#</th>
                <th className="border border-pink-300 px-4 py-2">Name</th>
                <th className="border border-pink-300 px-4 py-2">Email</th>
                <th className="border border-pink-300 px-4 py-2">Biodata Id</th>
                <th className="border border-pink-300 px-4 py-2">Status</th>
                <th className="border border-pink-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
            {contactRequests.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-4 text-xl font-semibold text-blue-600">
                  No requests to approve
                </td>
              </tr>
            ) : (
              contactRequests.map((request) => (
                <tr key={request._id}>
                  <td className="border px-4 py-2">{request.name}</td>
                  <td className="border px-4 py-2">{request.biodataId}</td>
                  <td className="border px-4 py-2">{request.status}</td>
                  <td className="border px-4 py-2 text-center">
                    {request.status === "pending" && (
                      <button
                        onClick={() => handleApproveRequest(request._id)}
                        className="text-green-600"
                      >
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
          </table>
        </div>

        {/* Approved Contacts Display */}
        {approvedContacts.length > 0 && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-purple-600 mb-4">
              Approved Contacts
            </h3>
            <Table className="min-w-full table-auto">
              <thead className="bg-purple-600 text-white">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Biodata Id</th>
                </tr>
              </thead>
              <tbody>
                {approvedContacts.map((contact, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="px-4 py-2">{contact.name}</td>
                    <td className="px-4 py-2">{contact.email}</td>
                    <td className="px-4 py-2">{contact.biodataId}</td>
                    <td className="px-4 py-2 text-center">
                      <FaTrashAlt
                        className="text-red-600 cursor-pointer"
                        onClick={() => handleDelete(contact._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    </>
  );
};

export default ApproveContact;
