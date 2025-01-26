import React from "react";

const BioDataCard = ({ data }) => {
  const {
    biodataId,
    biodataType,
    profileImage,
    permanentDivision,
    age,
    occupation,
  } = data;
  return (
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start">
          <div className="w-32 md:w-44 flex-shrink-0 mb-4 md:mb-0">
            <img
              src={profileImage}
              alt="profile"
              className="w-full h-44 rounded-lg object-cover"
            />
          </div>
          <div className="text-center md:text-left md:ml-6">
            <p className="text-lg font-bold text-gray-900">
              BioData ID: {biodataId}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Gender: </span> {biodataType}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Division: </span> {permanentDivision}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Age: </span>{age}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Occupation:</span> {occupation}</p>
            <button className="mt-4 bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
              View Details
            </button>
          </div>
        </div>
      </div>
  );
};

export default BioDataCard;
