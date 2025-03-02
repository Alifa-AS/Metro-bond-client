import React, { useEffect, useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Card, Button } from "flowbite-react";
import { FaHeart, FaPhoneAlt } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import Swal from "sweetalert2";
import useInfo from "../../../hooks/useInfo";


const BioDataDetails = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [, refetch] = useInfo();
  const navigate = useNavigate();

  const {
    _id,
    biodataId,
    biodataType,
    name,
    profileImage,
    dateOfBirth,
    height,
    weight,
    age,
    occupation,
    race,
    fathersName,
    mothersName,
    permanentDivision,
    presentDivision,
    expectedPartnerAge,
    expectedPartnerHeight,
    expectedPartnerWeight,
    contactEmail,
    mobileNumber,
  } = useLoaderData();

  const [similarBiodata, setSimilarBiodata] = useState([]);

  // Fetch similar biodata based on biodataType
  useEffect(() => {
    const fetchSimilarBiodata = async () => {
      try {
        const response = await axiosSecure.get(
          `/biodata?biodataType=${biodataType}`
        );
        // console.log("Fetched biodata:", response.data);
        const filteredBiodata = response.data.filter(
          (b) => b.biodataId !== biodataId && b.biodataType === biodataType
        );
        // console.log("Filtered biodata:", filteredBiodata);

        const maleBiodata = filteredBiodata
          .filter((b) => b.biodataType.toLowerCase() === "male")
          .slice(0, 3);
        const femaleBiodata = filteredBiodata
          .filter((b) => b.biodataType.toLowerCase() === "female")
          .slice(0, 3);

        // console.log("Male biodata:", maleBiodata);
        // console.log("Female biodata:", femaleBiodata);

        if (maleBiodata.length > 0) {
          setSimilarBiodata(maleBiodata);
        } else if (femaleBiodata.length > 0) {
          setSimilarBiodata(femaleBiodata);
        } else {
          setSimilarBiodata([]);
        }
      } catch (error) {
        console.error("Error fetching similar biodata:", error);
      }
    };

    fetchSimilarBiodata();
  }, [biodataType, biodataId, axiosSecure]);

  const handleAddFavorite = () => {
    const favoriteData = {
      person: _id,
      email: user.email,
      name,
      biodataId,
      permanentDivision,
      occupation,
    };
    console.log(favoriteData, user.email);

    axiosSecure.post("/favorite", favoriteData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} has been add to favorite`,
          showConfirmButton: false,
          timer: 1500,
        });

        refetch();
        navigate('/dashboard/favoriteBio');
      }
    });
  };

  const handleReqContact = () => {
    const contactData = {
      name,
      biodataId,
      contactEmail,
      mobileNumber,
    };
    console.log(contactData);
    navigate('/dashboard/contact-request', {
      state: contactData,
    });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-orange-50 to-pink-100 p-6">
      <Card className="w-full max-w-3xl p-8 shadow-2xl rounded-2xl bg-white border border-pink-400">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          {/* Profile Section */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <img
              src={profileImage}
              alt="Profile"
              className="w-40 h-40 object-cover rounded-full border-4 border-yellow-500 shadow-lg transform hover:scale-105 transition-transform duration-500"
            />
            <h2 className="text-xl font-bold text-pink-600 mt-4">
              BioData ID: {biodataId}
            </h2>
          </div>

          {/* BioData Details Table */}
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-semibold text-yellow-400 border-b pb-2">
              Personal Details
            </h3>
            <table className="w-full mt-3 border-collapse">
              <tbody>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">Type</td>
                  <td className="text-gray-800 py-2">{biodataType}</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">Name</td>
                  <td className="text-gray-800 py-2">{name}</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">Age</td>
                  <td className="text-gray-800 py-2">{age} years</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">
                    Date Of Birth
                  </td>
                  <td className="text-gray-800 py-2">{dateOfBirth}</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">
                    Occupation
                  </td>
                  <td className="text-gray-800 py-2">{occupation}</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">Height</td>
                  <td className="text-gray-800 py-2">{height} cm</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">Weight</td>
                  <td className="text-gray-800 py-2">{weight}</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">Race</td>
                  <td className="text-gray-800 py-2">{race}</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">
                    Father's Name
                  </td>
                  <td className="text-gray-800 py-2">{fathersName}</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">
                    Mother's Name
                  </td>
                  <td className="text-gray-800 py-2">{mothersName}</td>
                </tr>
                <tr className="border-b">
                  <td className="text-yellow-600 font-medium py-2">
                    Permanent Division
                  </td>
                  <td className="text-gray-800 py-2">{permanentDivision}</td>
                </tr>
                <tr>
                  <td className="text-yellow-600 font-medium py-2">
                    Present Division
                  </td>
                  <td className="text-gray-800 py-2">{presentDivision}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Expected Partner Details */}
        <div className="mt-6 bg-purple-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-yellow-600 mb-3">
            Expected Partner Details
          </h3>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p>
              <strong className="text-pink-600">Age Range:</strong>{" "}
              {expectedPartnerAge.min} - {expectedPartnerAge.max}
            </p>
            <p>
              <strong className="text-pink-600">Height:</strong>{" "}
              {expectedPartnerHeight}
            </p>
            <p>
              <strong className="text-pink-600">Weight:</strong>{" "}
              {expectedPartnerWeight}
            </p>
            <p>
              <strong className="text-pink-600">Religion:</strong> Islam
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-6 bg-pink-50 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-yellow-600 mb-3">
            Contact Information
          </h3>
          <p className="text-gray-700">
            <strong className="text-pink-600">Email:</strong> "Request Contact
            Information"
          </p>
          <p className="text-gray-700">
            <strong className="text-pink-600">Mobile:</strong> "Request Contact
            Information"
          </p>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between gap-4">
          <Button
            onClick={handleAddFavorite}
            className="px-6 py-2 font-semibold shadow-md bg-pink-500 hover:bg-pink-700 text-white transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <FaHeart className="text-lg" /> Add Favorite
          </Button>
          <Link to="/payment">
            <Button
              onClick={handleReqContact}
              className="px-6 py-2 font-semibold shadow-md bg-yellow-400 hover:bg-yellow-700 text-white transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <FaPhoneAlt className="text-lg" /> Request Contact Information
            </Button>
          </Link>
        </div>
      </Card>
      {/* Similar Biodata Section */}
      <div className="mt-8 w-full max-w-3xl">
        <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
          Similar Biodata
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {similarBiodata.map((biodata) => (
            <Card key={biodata._id} className="shadow-md">
              <img
                src={biodata.profileImage}
                alt="Profile"
                className="h-32 w-full object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">{biodata.name}</h4>
                <p className="text-gray-600">Age: {biodata.age}</p>
                <Link to={`/bioData`}>
                  <button className="mt-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
                    View All
                  </button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BioDataDetails;
