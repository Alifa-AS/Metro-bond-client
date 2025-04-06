import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Card } from "flowbite-react";
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
    <section
      className="my-20 px-6 md:px-8 lg:px-16 py-5"
     
    >
      <SectionTitle
        heading="Our Premium Members"
        subHeading="Be a Premium Member to Be Part of Our Story"
      />

      {/* Sort Dropdown */}
      <div className="mb-6 text-center">
        <label htmlFor="sortOrder" className="mr-4 text-xl font-semibold text-pink-600">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedPremium.slice(0, 6).map((member) => (
          <div
            key={member._id}
            className="relative bg-white shadow-lg rounded-xl hover:scale-105 transition-transform duration-300 transform"
          >
            <Card className="rounded-xl overflow-hidden shadow-xl border-2 border-pink-200 hover:shadow-2xl transition-shadow duration-300">
              <img
                src={member.profileImage || "/images/blog/image-1.jpg"}
                alt="Premium Member"
                className="w-full h-32 sm:h-52 md:h-52 object-cover rounded-t-xl"
              />
              <div className="p-6 space-y-2">
                <h5 className="text-lg font-semibold text-yellow-400 text-center">
                  BioData Id: {member.biodataId}
                </h5>
                <h5 className="text-2xl font-semibold text-pink-500 text-center">
                  {member.name}
                </h5>
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm mt-2">
                  Age: {member.age} || Gender: {member.biodataType}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm mt-2">
                  Occupation: {member.occupation}
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-center text-sm mt-2">
                  Division: {member.presentDivision}
                </p>
                <Link to={`/bioData/${member._id}`}>
                  <button className="w-full mt-6 bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 px-6 rounded-xl hover:bg-pink-700 focus:outline-none transition-all duration-200">
                    View Details
                  </button>
                </Link>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumMember;
