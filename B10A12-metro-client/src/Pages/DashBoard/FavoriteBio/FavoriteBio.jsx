import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import useInfo from "../../../hooks/useInfo";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { RiDeleteBin5Line } from "react-icons/ri";
import Swal from "sweetalert2";

const FavoriteBio = () => {
  const [, refetch] = useInfo();
  const axiosSecure = useAxiosSecure();
  const [favoriteBio, setFavoriteBio] = useState([]);

  //  Backend data fetch
  useEffect(() => {
    axiosSecure
      .get("/favorite")
      .then((res) => setFavoriteBio(res.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [axiosSecure]);

  // delete  function
  const removeFromFavorites = (id) => {
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
        axiosSecure.delete(`/favorite/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
           refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Metro || Favorite BioData </title>
      </Helmet>
      <div className="container mx-auto p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-pink-600 mb-4 text-center">
          My Favorite Biodata
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-pink-300 shadow-lg">
            <thead className="bg-pink-200 text-pink-900">
              <tr>
                <th className="border border-pink-300 px-4 py-2">Name</th>
                <th className="border border-pink-300 px-4 py-2">Biodata ID</th>
                <th className="border border-pink-300 px-4 py-2">
                  Permanent Address
                </th>
                <th className="border border-pink-300 px-4 py-2">Occupation</th>
                <th className="border border-pink-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody></tbody>
            <tbody>
              {favoriteBio.length > 0 ? (
                favoriteBio.map((bio) => (
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
                      {bio.permanentDivision}
                    </td>
                    <td className="border border-pink-300 px-4 py-2">
                      {bio.occupation}
                    </td>
                    <td className="border border-pink-300 px-4 py-2 text-center">
                      <button
                        className="text-red-700 px-3 py-1 rounded-md hover:bg-pink-300"
                        onClick={() => removeFromFavorites(bio._id)}
                      >
                        <RiDeleteBin5Line />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="border border-pink-300 px-4 py-4 text-center text-gray-500"
                  >
                    No favorite bioData added yet.
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

export default FavoriteBio;
