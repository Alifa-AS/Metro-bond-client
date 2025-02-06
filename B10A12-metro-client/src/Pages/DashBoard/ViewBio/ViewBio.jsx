import { Helmet } from "react-helmet-async";

const ViewBio = ({ biodata }) => {
  const handleMakePremium = () => {
    alert('Are you sure you want to make this biodata premium?');
  };

  if (!biodata) {
    return <p className="text-red-700 text-center font-bold text-3xl py-10">No biodata available</p>;
  }
  return (
    <>
      <Helmet>
        <title>Metro || View BioData </title>
      </Helmet>
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-6">
        <div className="flex items-center space-x-6">
          <img
            src={biodata.profileImage} // Dynamic Profile Image
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-purple-600"
          />
          <div>
            <h2 className="text-2xl font-bold">{biodata.name}</h2>
            <p className="text-sm text-gray-500">
              Age: {biodata.age} | Occupation: {biodata.occupation}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex justify-between">
            <div className="font-semibold">Biodata Type:</div>
            <div>{biodata.biodataType}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Date of Birth:</div>
            <div>{biodata.dob}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Height:</div>
            <div>{biodata.height} cm</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Weight:</div>
            <div>{biodata.weight} kg</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Race (Skin Color):</div>
            <div>{biodata.race}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Father's Name:</div>
            <div>{biodata.fathersName}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Mother's Name:</div>
            <div>{biodata.mothersName}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Permanent Division:</div>
            <div>{biodata.permanentDivision}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Present Division:</div>
            <div>{biodata.presentDivision}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Expected Partner Age:</div>
            <div>{biodata.expectedPartnerAge}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Expected Partner Height:</div>
            <div>{biodata.expectedPartnerHeight}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Expected Partner Weight:</div>
            <div>{biodata.expectedPartnerWeight}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Contact Email:</div>
            <div>{biodata.contactEmail}</div>
          </div>
          <div className="flex justify-between">
            <div className="font-semibold">Mobile Number:</div>
            <div>{biodata.mobileNumber}</div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              onClick={handleMakePremium}
              className="bg-ppink-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-purple-700"
            >
              Make Biodata Premium
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBio;
