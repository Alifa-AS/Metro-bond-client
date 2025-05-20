import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import axios from "axios";
import { Link } from "react-router-dom";

const PremiumMember = () => {
  const [premium, setPremium] = useState([]);
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    axios
      .get("https://b10-a12-metro-server.vercel.app/bioData")
      .then((res) => {
        setPremium(res.data);
      })
      .catch((error) =>
        console.error("Error fetching premium members:", error)
      );
  }, []);

  // Sorting function
  const sortData = (data, order) => {
    if (order === "default") {
      return data;
    }
    return data.sort((a, b) => {
      const ageA = a.age;
      const ageB = b.age;
      if (order === "ascending") {
        return ageA - ageB;
      } else {
        return ageB - ageA;
      }
    });
  };

  // Handle sort order change
  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  // Apply sorting to the data
  const sortedPremium = sortData([...premium], sortOrder);

  return (
    <section className="my-20 px-6 md:px-8 lg:px-16 py-5">
      <SectionTitle
        heading="Our Premium Members"
        subHeading="Be a Premium Member to Be Part of Our Story"
      />

      {/* Sort Dropdown */}
      <div className="mb-6 text-center">
        <label
          htmlFor="sortOrder"
          className="mr-4 text-xl font-semibold text-pink-600"
        >
          Sort by Age:
        </label>
        <select
          id="sortOrder"
          value={sortOrder}
          onChange={handleSortChange}
          className="bg-white text-pink-900 py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          <option value="default">Default</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPremium.slice(0, 6).map((member) => (
          <div
            key={member._id}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Profile Image */}
            <img
              src={member.profileImage || "/images/blog/image-1.jpg"}
              alt="Premium Member"
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Info */}
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4">
              <h5 className="text-md font-bold text-yellow-400 mb-1">
                BioData Id: {member.biodataId}
              </h5>
              <h3 className="text-2xl font-bold text-pink-400 mb-1">
                {member.name}
              </h3>
              <p className="text-sm">
                Age: {member.age} | Gender: {member.biodataType}
              </p>
              <p className="text-sm">Occupation: {member.occupation}</p>
              <p className="text-sm mb-3">Division: {member.presentDivision}</p>
              <Link to={`/bioData/${member._id}`}>
                <button className="bg-[#da7665] hover:bg-[#b46a48] text-white font-semibold py-1 px-4 rounded-lg">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumMember;
