import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const FavoriteBio = () => {
  const [favoriteBio, setFavoriteBio] = useState([]);

  //  Backend data fetch
  //   useEffect(() => {
  //     fetch("https://your-backend-api.com/favorites") 
  //       .then((res) => res.json())
  //       .then((data) => setFavoriteBio(data))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, []);

  // Backend + UI delete  function
  //   const removeFromFavorites = (id) => {
  //     fetch(`https://your-backend-api.com/favorites/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => {
  //         if (res.ok) {
  //           setFavoriteBio(favoriteBio.filter((bio) => bio.biodataId !== id));
  //         }
  //       })
  //       .catch((error) => console.error("Error deleting data:", error));
  //   };

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
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                        onClick={() => removeFromFavorites(bio.biodataId)}
                      >
                        Delete
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
