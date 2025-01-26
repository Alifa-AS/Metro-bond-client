import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/Cover/cover1.jpg";
import { Sidebar } from "flowbite-react";
import BioDataCard from "./BioDataCard";
import { useEffect, useState } from "react";

const BioData = () => {

      const [bioData, setBioData] = useState([]);

      useEffect(() =>{
        fetch('http://localhost:5000/bioData')
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

      <div className="flex flex-col lg:flex-row min-h-screen my-10">
        {/* Sidebar */} 
        <Sidebar
          aria-label="Bio Data Sidebar"
          className="w-96 h-screen bg-pink-100 p-4 mx-auto"
        >
          <h2 className="text-xl font-semibold mb-4">Filters</h2>
          <form className="space-y-4">
          <div className='md:flex mb-8 gap-4'>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Min Age
              </label>
              <input
                type="number"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Min Age"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Max Age
              </label>
              <input
                type="number"
                className="mt-1 p-2 w-full border rounded-md"
                placeholder="Max Age"
              />
            </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Gender
              </label>
              <select className="mt-1 p-2 w-full border rounded-md">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Division
              </label>
              <select className="mt-1 p-2 w-full border rounded-md">
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
              className="w-full bg-pink-400 text-white p-2 rounded-md"
            >
              Find
            </button>
          </form>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <h1 className="text-3xl font-semibold mb-4">All Bio Datas</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {
              bioData.slice(0,20).map((data) => (
                <BioDataCard key={data._id} data={data}></BioDataCard>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;
