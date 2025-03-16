import React from "react";
import { Link } from "react-router-dom";

const BioDataCard = ({ data }) => {
  const {
    _id,
    biodataId,
    name,
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
            <span className="font-semibold">Name: </span> {name}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Gender: </span> {biodataType}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Division: </span>{" "}
            {permanentDivision}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Age: </span>
            {age}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">Occupation:</span> {occupation}
          </p>

          <Link to={`/bioData/${_id}`}>
            <button className="mt-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BioDataCard;
