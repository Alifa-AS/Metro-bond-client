import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import coverImg from "../../assets/Cover/cover1.jpg";
import { Sidebar } from "flowbite-react";
import BioDataCard from "./BioDataCard";

const BioData = () => {
  return (
    <div>
      <Helmet>
        <title>Metro || Bio Data</title>
      </Helmet>
      <Cover img={coverImg} title="Your Bio-Data, Your Identity" />

      <div className="flex min-h-screen my-10">
        {/* Sidebar */}
        <Sidebar
          aria-label="Bio Data Sidebar"
          className="w-96 h-screen bg-pink-100 p-4"
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
            {Array.from({ length: 20 }, (_, i) => (
              <BioDataCard
                key={i}
                id={i + 1}
                type={i % 2 === 0 ? "Male" : "Female"}
                image={`https://randomuser.me/api/portraits/${
                  i % 2 === 0 ? "men" : "women"
                }/${i}.jpg`}
                division={
                  [
                    "Dhaka",
                    "Chattagra",
                    "Rangpur",
                    "Barisal",
                    "Khulna",
                    "Mymensingh",
                    "Sylhet",
                  ][i % 7]
                }
                age={20 + (i % 10)}
                occupation="Software Engineer"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BioData;
