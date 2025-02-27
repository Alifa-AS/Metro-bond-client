import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/Cover/cover1.jpg";
import { Sidebar } from "flowbite-react";
import BioDataCard from "../BioData/BioDataCard";
import { useEffect, useState } from "react";

const BioData = () => {

      const [bioData, setBioData] = useState([]);

      useEffect(() =>{
        fetch('https://b10-a12-metro-server.vercel.app/bioData')
        .then(res => res.json())
        .then(data => {
          setBioData(data)
        });
      },[])
  return (
    <div>
      <Helmet>
        <title>Metro || Bio Data</title>
      </Helmet>
      <Cover img={coverImg} title="Your Bio-Data, Your Identity" />

    <div className="flex flex-col lg:flex-row min-h-screen my-10 gap-10" data-aos="fade-up" data-aos-duration="2000">
    {/* Sidebar */}
    <Sidebar
      aria-label="Bio Data Sidebar"
      className="w-96 h-auto bg-gradient-to-r from-pink-200 to-orange-100 p-6 mx-auto rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Filters</h2>
      <form className="space-y-6">
        <div className="md:flex gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Min Age
            </label>
            <input
              type="number"
              className="mt-2 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Min Age"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Max Age
            </label>
            <input
              type="number"
              className="mt-2 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Max Age"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <select className="mt-2 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Division
          </label>
          <select className="mt-2 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500">
            <option>Dhaka</option>
            <option>Chattagra</option>
            <option>Rangpur</option>
            <option>Barisal</option>
            <option>Khulna</option>
            <option>Mymensingh</option>
            <option>Sylhet</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-400 to-orange-200 text-white p-3 rounded-md shadow-md transition-all hover:opacity-90"
        >
          Find
        </button>
      </form>
    </Sidebar>

    {/* Main Content */}
    <div className="flex-1 p-8 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-4xl font-semibold mb-8 text-pink-600">All Bio Datas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {
          bioData.slice(0, 20).map((data) => (
            <BioDataCard key={data._id} data={data} />
          ))
        }
      </div>
    </div>
  </div>
    </div>
  );
};

export default BioData;
