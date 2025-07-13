import { Helmet } from "react-helmet-async";
import Cover from "../../../Components/Shared/Cover/Cover.jsx";
import coverImg from "../../../assets/Cover/cover1.jpg";
import { Button, Sidebar } from "flowbite-react";
import BioDataCard from "../BioData/BioDataCard";
import { useState } from "react";
import useFilter from "../../../hooks/useFilter";
// import Loading from "../../Shared/Loading/Loading";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useLoaderData } from "react-router-dom";

const BioData = () => {
  const [minAge, setMinAge] = useState("");
  const [maxAge, setMaxAge] = useState("");
  const [gender, setGender] = useState("");
  const [division, setDivision] = useState("");
  const { bioData, setBioData } = useFilter(minAge, maxAge, gender, division);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const axiosSecure = useAxiosSecure();

  // useEffect(() => {
  //   fetch("https://b10-a12-metro-server.vercel.app/bioData")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBioData(data);
  //     });
  // }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    // console.log(minAge, maxAge, gender, division);

    axiosSecure
      .get(
        `/bioData?minAge=${minAge}&maxAge=${maxAge}&biodataType=${gender}&permanentDivision=${division}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res);
        setBioData(res?.data);
      })
      .catch((error) => {
        console.error("Error fetching bioData:", error);
      });

    // }, [];
  };

  // if (loading) {
  //   return <Loading />;
  // }

  const { count } = useLoaderData();
  // const itemPerPage = 10;
  const numberOfPages = Math.ceil(count / itemsPerPage);

  // const pages = []
  // for(let i = 0; i< numberOfPages; i++){
  //   pages.push(i)
  // }

  const pages = [...Array(numberOfPages).keys()];

  // console.log(pages);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    // console.log(val);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      <Helmet>
        <title>Metro || Bio Data</title>
      </Helmet>
      <Cover img={coverImg} title="Your Bio-Data, Your Identity" />

      <div
        className="flex flex-col lg:flex-row min-h-screen my-10 gap-10"
      
      >
        {/* Sidebar */}
        <Sidebar
          aria-label="Bio Data Sidebar"
          className="w-96 h-auto p-6 mx-auto rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Filters</h2>
          <form onSubmit={handleFilter} className="space-y-6">
            <div className="md:flex gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Min Age
                </label>
                <input
                  onChange={(e) => setMinAge(e.target.value)}
                  type="number"
                  className="mt-2 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Min Age"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                  Max Age
                </label>
                <input
                  onChange={(e) => setMaxAge(e.target.value)}
                  type="number"
                  className="mt-2 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
                  placeholder="Max Age"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Gender
              </label>
              <select
                onChange={(e) => setGender(e.target.value)}
                className="mt-2 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                Division
              </label>
              <select
                onChange={(e) => setDivision(e.target.value)}
                className="mt-2 p-3 w-full dark:text-gray-700 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                <option value="">Select Division</option>
                <option value="Dhaka">Dhaka</option>
                <option value="Chattagra">Chattagra</option>
                <option value="Rangpur">Rangpur</option>
                <option value="Barisal">Barisal</option>
                <option value="Khulna">Khulna</option>
                <option value="Mymensingh">Mymensingh</option>
                <option value="Sylhet">Sylhet</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full border-2 border-pink-500 text-pink-600 font-bold p-3 rounded-md shadow-md transition-all hover:opacity-90"
            >
              Find
            </button>
          </form>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-semibold mb-8 text-pink-600">
            All Bio Datas
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {bioData
              .slice(
                currentPage * itemsPerPage,
                (currentPage + 1) * itemsPerPage
              )
              .map((data) => (
                <BioDataCard key={data._id} data={data} />
              ))}
          </div>
        </div>
      </div>
      <div className="text-center mb-10">
        <p className="py-3">Current Page: {currentPage}</p>

        <div className="flex justify-center items-center gap-4">
          {/* Pagination Buttons */}
          <div className="flex gap-2">
            <Button onClick={handlePrevPage}>prev</Button>
            {pages.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-1 border rounded ${
                  currentPage === page
                    ? "bg-pink-500 text-white "
                    : "bg-gray-200 dark:text-gray-700"
                }`}
              >
                {page}
              </button>
            ))}
            <Button onClick={handleNextPage}>Next</Button>
          </div>

          {/* Items Per Page Dropdown */}
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPage}
            className="border rounded px-2 py-1 dark:text-gray-700"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default BioData;
