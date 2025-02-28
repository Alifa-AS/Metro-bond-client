import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/UseAxiosSecure";
import { Button, TextInput, Label, Card } from "flowbite-react";

const ViewBio = () => {
  const [biodata, setBiodata] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [formData, setFormData] = useState({
    biodataId: "",
    gender: "",
    name: "",
    profileImage: "",
    dob: "",
    height: "",
    weight: "",
    age: "",
    occupation: "",
    race: "",
    fatherName: "",
    motherName: "",
    permanentDivision: "",
    presentDivision: "",
    expectedPartnerAge: "",
    expectedPartnerHeight: "",
    expectedPartnerWeight: "",
    email: "",
    mobile: "",
  });

  // Fetch biodata on component mount
  useEffect(() => {
    const fetchBiodata = async () => {
      try {
        const response = await axiosSecure.get(`/bioData?email=${user.email}`);

        if (response.data.length > 0) {
          setBiodata(response.data[0]); // Assuming user has one biodata
          setFormData(response.data[0]); // Pre-fill form if biodata exists
        }
      } catch (error) {
        console.error("Error fetching biodata:", error);
      }
    };

    if (user.email) {
      fetchBiodata();
    }
  }, [user.email, axiosSecure]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission (Save and Publish Now)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/bioData", formData); // Call the API to save or update biodata
      alert(response.data.message); // Show success message
    } catch (error) {
      console.error("Error saving biodata:", error);
      alert("There was an error saving the biodata.");
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <Card className="bg-pink-50 shadow-lg p-6">
        <h1 className="text-2xl font-semibold text-center text-pink-600 mb-4">View and Edit Your Biodata</h1>
        {biodata ? (
          <div className="text-center mb-6">
            <h2 className="text-lg font-medium text-pink-600">Your Existing Biodata</h2>
            <p>Name: <span className="font-semibold">{biodata.name}</span></p>
            <p>Age: <span className="font-semibold">{biodata.age}</span></p>
            <p>Biodata Type: <span className="font-semibold">{biodata.biodataType}</span></p>
            <p>Permanent Division: <span className="font-semibold">{biodata.permanentDivision}</span></p>
          </div>
        ) : (
          <div className="bg-pink-100 border-l-4 border-pink-600 text-pink-600 p-4 mb-4">
            <strong>No Biodata Found</strong>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Biodata ID */}
            <div>
              <Label htmlFor="biodataId" className="block mb-2">Biodata ID</Label>
              <TextInput
                id="biodataId"
                type="text"
                name="biodataId"
                value={formData.biodataId}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Gender */}
            <div>
              <Label htmlFor="gender" className="block mb-2">Gender</Label>
              <TextInput
                id="gender"
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Name */}
            <div>
              <Label htmlFor="name" className="block mb-2">Name</Label>
              <TextInput
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Profile Image */}
            <div>
              <Label htmlFor="profileImage" className="block mb-2">Profile Image URL</Label>
              <TextInput
                id="profileImage"
                type="text"
                name="profileImage"
                value={formData.profileImage}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Date of Birth */}
            <div>
              <Label htmlFor="dob" className="block mb-2">Date of Birth</Label>
              <TextInput
                id="dob"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Height */}
            <div>
              <Label htmlFor="height" className="block mb-2">Height</Label>
              <TextInput
                id="height"
                type="text"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Weight */}
            <div>
              <Label htmlFor="weight" className="block mb-2">Weight</Label>
              <TextInput
                id="weight"
                type="text"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Age */}
            <div>
              <Label htmlFor="age" className="block mb-2">Age</Label>
              <TextInput
                id="age"
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Occupation */}
            <div>
              <Label htmlFor="occupation" className="block mb-2">Occupation</Label>
              <TextInput
                id="occupation"
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Race */}
            <div>
              <Label htmlFor="race" className="block mb-2">Race</Label>
              <TextInput
                id="race"
                type="text"
                name="race"
                value={formData.race}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Father's Name */}
            <div>
              <Label htmlFor="fatherName" className="block mb-2">Father's Name</Label>
              <TextInput
                id="fatherName"
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Mother's Name */}
            <div>
              <Label htmlFor="motherName" className="block mb-2">Mother's Name</Label>
              <TextInput
                id="motherName"
                type="text"
                name="motherName"
                value={formData.motherName}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Permanent Division */}
            <div>
              <Label htmlFor="permanentDivision" className="block mb-2">Permanent Division</Label>
              <TextInput
                id="permanentDivision"
                type="text"
                name="permanentDivision"
                value={formData.permanentDivision}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Present Division */}
            <div>
              <Label htmlFor="presentDivision" className="block mb-2">Present Division</Label>
              <TextInput
                id="presentDivision"
                type="text"
                name="presentDivision"
                value={formData.presentDivision}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Expected Partner Age */}
            <div>
              <Label htmlFor="expectedPartnerAge" className="block mb-2">Expected Partner Age</Label>
              <TextInput
                id="expectedPartnerAge"
                type="text"
                name="expectedPartnerAge"
                value={formData.expectedPartnerAge}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Expected Partner Height */}
            <div>
              <Label htmlFor="expectedPartnerHeight" className="block mb-2">Expected Partner Height</Label>
              <TextInput
                id="expectedPartnerHeight"
                type="text"
                name="expectedPartnerHeight"
                value={formData.expectedPartnerHeight}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Expected Partner Weight */}
            <div>
              <Label htmlFor="expectedPartnerWeight" className="block mb-2">Expected Partner Weight</Label>
              <TextInput
                id="expectedPartnerWeight"
                type="text"
                name="expectedPartnerWeight"
                value={formData.expectedPartnerWeight}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="block mb-2">Email</Label>
              <TextInput
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>

            {/* Mobile */}
            <div>
              <Label htmlFor="mobile" className="block mb-2">Mobile</Label>
              <TextInput
                id="mobile"
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                color="pink"
                className="w-full"
              />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <Button type="submit" color="pink">Save & Publish Now</Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ViewBio;
