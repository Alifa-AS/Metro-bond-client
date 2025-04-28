import { useState, useEffect } from "react";
import { FaFemale, FaMale, FaHeart } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle";

const SuccessCounter = () => {
  const [stats, setStats] = useState({
    girls: 0,
    boys: 0,
    marriages: 0,
  });

  // Simulating fetching data
  useEffect(() => {
    setTimeout(() => {
      setStats({
        girls: 800,
        boys: 1100,
        marriages: 350,
      });
    }, 1000);
  }, []);

  return (
    <section className="my-20 text-center p-6 dark:bg-gray-700">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          heading="Success Counter"
          subHeading="Our Success Counter"
        ></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-5">
          {/* Girls Count */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <FaFemale className="text-pink-500 text-5xl mx-auto" />
            <h3 className="text-3xl font-bold text-gray-700 mt-4">
              {stats.girls}
            </h3>
            <p className="text-gray-500 text-lg">Girls' Biodata</p>
          </div>

          {/* Boys Count */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <FaMale className="text-blue-500 text-5xl mx-auto" />
            <h3 className="text-3xl font-bold text-gray-700 mt-4">
              {stats.boys}
            </h3>
            <p className="text-gray-500 text-lg">Boys' Biodata</p>
          </div>

          {/* Marriages Count */}
          <div className="bg-white shadow-lg rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-500 cursor-pointer">
            <FaHeart className="text-red-500 text-5xl mx-auto" />
            <h3 className="text-3xl font-bold text-gray-700 mt-4">
              {stats.marriages}
            </h3>
            <p className="text-gray-500 text-lg">Marriages Completed</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCounter;
