import React, { useState, useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Button, Card, Modal } from "flowbite-react";

const ViewBio = ({ biodata: initialBiodata }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPremium, setIsPremium] = useState(
    initialBiodata?.isPremium || false
  );
  const [biodata, setBiodata] = useState(initialBiodata || null);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const response = await axiosSecure.get(`/bioData?email=${user.email}`);
        if (response.data.length > 0) {
          setBiodata(response.data[0]);
        }
      } catch (error) {
        console.error("Error fetching biodata:", error);
      }
    };

    if (user.email && !initialBiodata) {
      fetchBiodata();
    }
  }, [user.email, axiosSecure, initialBiodata]);

  // Request to make biodata premium
  const handlePremiumRequest = async () => {
    try {
      // Send request to admin for approval
      const response = await axiosSecure.post("/premiumRequest", {
        userId: biodata?.userId,
        email: user.email,
      });
      if (response.status === 200) {
        setIsModalOpen(false); // Close modal after request is sent
        alert("Request sent for admin approval!");
      }
    } catch (error) {
      console.error("Error sending premium request:", error);
      alert("There was an error processing your request. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <Card className="p-8 rounded-xl border-b-4 border-pink-600 shadow-2xl bg-white">
        <h1 className="text-3xl font-semibold text-center text-pink-700 rounded-lg py-2">
          Your Premium Biodata
        </h1>

        <div className="flex justify-center mb-3">
          <img
            src={biodata?.profileImage || "/default-profile.png"} // Default image if profileImage is unavailable
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg"
          />
        </div>
        {biodata ? (
          <div className="text-center mb-6 bg-pink-200 rounded-lg py-5">
            <h2 className="text-xl font-medium text-gray-600">
              Your Existing Biodata
            </h2>
            <p className="font-semibold text-pink-800">{biodata?.name}</p>
          </div>
        ) : (
          <div className="bg-pink-100 border-l-4 border-pink-600 text-pink-600 p-4 mb-4">
            <strong>No Biodata Found</strong>
          </div>
        )}
        {/* Main Content Divided into Two Parts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="border-r-4 border-pink-500 pr-6">
            {/* Left Section with More Information */}
            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Name</h4>
              <p className="text-gray-700">{biodata?.name}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Gender</h4>
              <p className="text-gray-700">{biodata?.gender}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Date of Birth</h4>
              <p className="text-gray-700">{biodata?.dob}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Height</h4>
              <p className="text-gray-700">{biodata?.height}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Weight</h4>
              <p className="text-gray-700">{biodata?.weight}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Age</h4>
              <p className="text-gray-700">{biodata?.age}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Occupation</h4>
              <p className="text-gray-700">{biodata?.occupation}</p>
            </div>
          </div>

          <div>
            {/* Right Section with Remaining Information */}
            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Race</h4>
              <p className="text-gray-700">{biodata?.race}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Father's Name</h4>
              <p className="text-gray-700">{biodata?.fatherName}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Mother's Name</h4>
              <p className="text-gray-700">{biodata?.motherName}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">
                Permanent Division
              </h4>
              <p className="text-gray-700">{biodata?.permanentDivision}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Present Division</h4>
              <p className="text-gray-700">{biodata?.presentDivision}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">
                Expected Partner's Age
              </h4>
              <p className="text-gray-700">{biodata?.expectedPartnerAge}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">
                Expected Partner's Height
              </h4>
              <p className="text-gray-700">{biodata?.expectedPartnerHeight}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">
                Expected Partner's Weight
              </h4>
              <p className="text-gray-700">{biodata?.expectedPartnerWeight}</p>
            </div>

            <div className="border-b border-gray-300 pb-4 mb-4">
              <h4 className="font-semibold text-pink-500">Email</h4>
              <p className="text-gray-700">{biodata?.email}</p>
            </div>

            <div>
              <h4 className="font-semibold text-pink-500">Mobile</h4>
              <p className="text-gray-700">{biodata?.mobile}</p>
            </div>
          </div>
        </div>

        {/* Premium Button */}
        {isPremium ? (
          <span className="text-green-500 font-semibold">Premium Member</span>
        ) : (
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-3 px-4 py-2 bg-pink-500 text-white rounded-lg"
          >
            Make Biodata Premium
          </button>
        )}

        {/* Modal Component */}
        <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Modal.Body>
            <p className="text-lg font-semibold text-gray-700">
              Are you sure you want to send a request for premium approval?
            </p>
            <div className="flex justify-end gap-4 mt-4">
              <Button color="gray" onClick={() => setIsModalOpen(false)}>
                Cancel
              </Button>
              <Button color="pink" onClick={handlePremiumRequest}>
                Yes, Send Request
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </Card>
    </div>
  );
};

export default ViewBio;
