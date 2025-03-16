import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import coverImg from "../../../assets/Cover/cover1.jpg";
import { Sidebar } from "flowbite-react";
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
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const axiosSecure = useAxiosSecure();

  // useEffect(() => {
  //   fetch("http://localhost:5000/bioData")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setBioData(data);
  //     });
  // }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    console.log(minAge, maxAge, gender, division);

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

  console.log(pages);

  const handleItemsPerPage = e =>{
    const val = parseInt(e.target.value);
    console.log(val);
    setItemsPerPage(val);
  }

  return (
    <div>
      <Helmet>
        <title>Metro || Bio Data</title>
      </Helmet>
      <Cover img={coverImg} title="Your Bio-Data, Your Identity" />

      <div
        className="flex flex-col lg:flex-row min-h-screen my-10 gap-10"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        {/* Sidebar */}
        <Sidebar
          aria-label="Bio Data Sidebar"
          className="w-96 h-auto bg-gradient-to-r from-pink-200 to-orange-100 p-6 mx-auto rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Filters</h2>
          <form onSubmit={handleFilter} className="space-y-6">
            <div className="md:flex gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
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
                <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
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
              <label className="block text-sm font-medium text-gray-700">
                Division
              </label>
              <select
                onChange={(e) => setDivision(e.target.value)}
                className="mt-2 p-3 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500"
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
              className="w-full bg-gradient-to-r from-pink-400 to-orange-200 text-white p-3 rounded-md shadow-md transition-all hover:opacity-90"
            >
              Find
            </button>
          </form>
        </Sidebar>

        {/* Main Content */}
        <div className="flex-1 p-8 bg-gray-50 rounded-lg shadow-lg">
          <h1 className="text-4xl font-semibold mb-8 text-pink-600">
            All Bio Datas
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {bioData.slice(0, 20).map((data) => (
              <BioDataCard key={data._id} data={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="text-center">
        {pages.map((page) => (
          <button className="mr-5">{page}</button>
        ))}
        <select value={itemsPerPage}
        onChange={handleItemsPerPage}
         name="">
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default BioData;
