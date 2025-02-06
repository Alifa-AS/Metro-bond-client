import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

const ContactRequest = () => {
  const [requests, setRequests] = useState([]);

  return (
    <>
      <Helmet>
        <title>Metro || My Contact Request </title>
      </Helmet>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 text-center">
          My Contact Request
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-pink-300 shadow-lg">
            <thead className="bg-pink-200 text-pink-900">
              <tr>
                <th className="border border-pink-300 px-4 py-2">Name</th>
                <th className="border border-pink-300 px-4 py-2">Biodata ID</th>
                <th className="border border-pink-300 px-4 py-2">Status</th>
                <th className="border border-pink-300 px-4 py-2">Mobile</th>
                <th className="border border-pink-300 px-4 py-2">Email</th>
                <th className="border border-pink-300 px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {requests.length > 0 ? (
                requests.map((bio) => (
                  <tr
                    key={bio.biodataId}
                    className="bg-pink-50 hover:bg-pink-100"
                  >
                    <td className="border border-pink-300 px-4 py-2">
                      {bio.name}
                    </td>
                    <td className="border border-pink-300 px-4 py-2">
                      {bio.biodataId}
                    </td>
                    <td className="border border-pink-300 px-4 py-2">
                      {bio.status}
                    </td>
                    <td className="border border-pink-300 px-4 py-2">
                      {bio.email}
                    </td>
                    <td className="border border-pink-300 px-4 py-2">
                      {bio.action}
                    </td>
                    <td className="border border-pink-300 px-4 py-2">
                      {bio.mobile}
                    </td>
                    <td className="border border-pink-300 px-4 py-2 text-center">
                      <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="border border-pink-300 px-4 py-4 text-center text-gray-500"
                  >
                    No Contact request yet!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ContactRequest;
