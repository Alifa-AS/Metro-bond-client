import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const ContactRequest = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });


  // BioData fetch
  const { data: bioData = [] } = useQuery({
    queryKey: ["bioData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bioData");
      return res.data;
    },
  });

  //filter
  const paidBioData = bioData.filter((bio) =>
    payments.some((p) => p.biodataId === bio.biodataId)
  );

  return (
    <>
      <Helmet>
        <title>Metro || My Contact Request</title>
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
              {bioData.length > 0 ? (
                bioData.map((bio) => {
                  const payment = payments.find(
                    (p) => p.biodataId === bio.biodataId
                  );
                  return (
                    <tr
                      key={bio.biodataId }
                      className="bg-pink-50 hover:bg-pink-100"
                    >
                      <td className="border border-pink-300 px-4 py-2">
                        {bio.name || "N/A"}
                      </td>
                      <td className="border border-pink-300 px-4 py-2">
                        {bio.biodataId || "N/A"}
                      </td>
                      <td className="border border-pink-300 px-4 py-2">
                        {payment ? payment.status : "Pending"}
                      </td>
                      <td className="border border-pink-300 px-4 py-2">
                        {payment && payment.status === "Approved"
                          ? bio.contactNumber || "N/A"
                          : "N/A"}
                      </td>
                      <td className="border border-pink-300 px-4 py-2">
                        {payment && payment.status === "Approved"
                          ? bio.email || "N/A"
                          : "N/A"}
                      </td>
                      <td className="border border-pink-300 px-4 py-2 text-center">
                        <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700">
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="6"
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
