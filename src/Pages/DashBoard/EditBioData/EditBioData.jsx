import React, { useState, useEffect } from "react";
import { TextInput, Label, Button, Select } from "flowbite-react";
import useAxiosBio from "../../../hooks/useAxiosBio";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditBioData = ({ biodataId }) => {
  const { user } = useAuth();
  const { getBiodata } = useAxiosBio();
  const navigate = useNavigate();
  const [biodata, setBiodata] = useState({
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

  useEffect(() => {
    if (biodataId) {
      getBiodata(biodataId)
        .then((data) => setBiodata(data))
        .catch((err) => console.error(err));
    }
  }, [biodataId, getBiodata]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBiodata({
      ...biodata,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    // console.log(...formData.entries());

    const initialData = Object.fromEntries(formData.entries());
    // console.log(initialData);

    const weight = parseInt(initialData.weight) || 0;
    const age = parseInt(initialData.age) || 0;
    const expectedPartnerAge = parseInt(initialData.expectedPartnerAge) || 0;
    const expectedPartnerWeight =
      parseInt(initialData.expectedPartnerWeight) || 0;

    const updatedBiodata = {
      ...initialData,
      biodataId,
      weight,
      age,
      expectedPartnerAge,
      expectedPartnerWeight,
    };

    fetch("http://localhost:5000/bioData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },

      body: JSON.stringify(updatedBiodata),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("Server Response:", data);

        if (
          data.insertedId ||
          data.message === "Biodata created successfully" ||
          data.message === "Biodata updated successfully"
        ) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your BioData has been saved successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/viewBio");
        }
      });
  };

  return (
    <>
      <Helmet>
        <title>Metro || Edit BioData </title>
      </Helmet>
      <div className="container mx-auto mt-10 p-5 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-pink-600">
          Build Your Matrimonial Profile
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 p-8 border-2 rounded-lg shadow-lg bg-[#faf6fa]"
        >
          {/* Name */}
          <div>
            <Label htmlFor="name" value="Name" />
            <TextInput
              id="name"
              name="name"
              value={biodata.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter your name"
              className="border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 p-2"
            />
          </div>

          {/* Gender */}
          <div>
            <Label htmlFor="gender" value="Gender" />
            <Select
              id="gender"
              name="gender"
              value={biodata.gender}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg p-2"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Select>
          </div>

          {/* Profile Image */}
          <div>
            <Label htmlFor="profileImage" value="Profile Image URL" />
            <TextInput
              id="profileImage"
              name="profileImage"
              value={biodata.profileImage}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter profile image URL"
              className="border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 p-2"
            />
          </div>

          {/* Date of Birth */}
          <div>
            <Label htmlFor="dob" value="Date of Birth" />
            <TextInput
              id="dob"
              name="dob"
              type="date"
              value={biodata.dob}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 p-2"
            />
          </div>

          {/* Your Age */}
          <div>
            <Label htmlFor="age" value="Your Age" />
            <TextInput
              id="age"
              name="age"
              value={biodata.age}
              onChange={handleChange}
              type="number"
              placeholder="Enter your age"
              className="border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 p-2"
            />
          </div>

          {/* Height */}
          <div>
            <Label htmlFor="height" value="Height" />
            <Select
              id="height"
              name="height"
              value={biodata.height}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg p-2"
            >
              <option value="">Select Height</option>
              <option value="150cm">150 cm</option>
              <option value="160cm">160 cm</option>
              <option value="170cm">170 cm</option>
              <option value="180cm">180 cm</option>
            </Select>
          </div>

          {/* Weight */}
          <div>
            <Label htmlFor="weight" value="Weight" />
            <Select
              id="weight"
              name="weight"
              value={biodata.weight}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg p-2"
            >
              <option value="">Select Weight</option>
              <option value="50kg">50 kg</option>
              <option value="60kg">60 kg</option>
              <option value="70kg">70 kg</option>
              <option value="80kg">80 kg</option>
            </Select>
          </div>

          {/* Occupation */}
          <div>
            <Label htmlFor="occupation" value="Occupation" />
            <Select
              id="occupation"
              name="occupation"
              value={biodata.occupation}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg p-2"
            >
              <option value="">Select Occupation</option>
              <option value="Student">Student</option>
              <option value="Engineer">Engineer</option>
              <option value="Teacher">Teacher</option>
              <option value="Doctor">Doctor</option>
            </Select>
          </div>

          {/* Race */}
          <div>
            <Label htmlFor="race" value="Race (Skin Color)" />
            <Select
              id="race"
              name="race"
              value={biodata.race}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg p-2"
            >
              <option value="">Select Race</option>
              <option value="Fair">Fair</option>
              <option value="Medium">Medium</option>
              <option value="Dark">Dark</option>
            </Select>
          </div>

          {/* Permanent Division */}
          <div>
            <Label htmlFor="permanentDivision" value="Permanent Division" />
            <Select
              id="permanentDivision"
              name="permanentDivision"
              value={biodata.permanentDivision}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg p-2"
            >
              <option value="">Select Division</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagra">Chattagram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
            </Select>
          </div>

          {/* Present Division */}
          <div>
            <Label htmlFor="presentDivision" value="Present Division" />
            <Select
              id="presentDivision"
              name="presentDivision"
              value={biodata.presentDivision}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg p-2"
            >
              <option value="">Select Division</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattagra">Chattagra</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
            </Select>
          </div>

          {/* Father Name */}
          <div>
            <Label htmlFor="fatherName" value="Father Name" />
            <TextInput
              id="fatherName"
              name="fatherName"
              value={biodata.fatherName}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter your father name"
              className="border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 p-2"
            />
          </div>

          {/* Mother Name */}
          <div>
            <Label htmlFor="motherName" value="Mother Name" />
            <TextInput
              id="motherName"
              name="motherName"
              value={biodata.motherName}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter your mother name"
              className="border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 p-2"
            />
          </div>

          {/* Expected Partner Age */}
          <div>
            <Label htmlFor="expectedPartnerAge" value="Expected Partner Age" />
            <TextInput
              id="expectedPartnerAge"
              name="expectedPartnerAge"
              value={biodata.expectedPartnerAge}
              onChange={handleChange}
              type="number"
              placeholder="Enter expected partner's age"
              className="border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 p-2"
            />
          </div>

          {/* Expected Partner Height */}
          <div>
            <Label
              htmlFor="expectedPartnerHeight"
              value="Expected Partner Height"
            />
            <Select
              id="expectedPartnerHeight"
              name="expectedPartnerHeight"
              value={biodata.expectedPartnerHeight}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg p-2"
            >
              <option value="">Select Expected Partner Height</option>
              <option value="150cm">150 cm</option>
              <option value="160cm">160 cm</option>
              <option value="170cm">170 cm</option>
              <option value="180cm">180 cm</option>
            </Select>
          </div>

          {/* Expected Partner Weight */}
          <div>
            <Label
              htmlFor="expectedPartnerWeight"
              value="Expected Partner Weight"
            />
            <Select
              id="expectedPartnerWeight"
              name="expectedPartnerWeight"
              value={biodata.expectedPartnerWeight}
              onChange={handleChange}
              required
              className="border-2 border-pink-300 rounded-lg p-2"
            >
              <option value="">Select Expected Partner Weight</option>
              <option value="50kg">50 kg</option>
              <option value="60kg">60 kg</option>
              <option value="70kg">70 kg</option>
              <option value="80kg">80 kg</option>
            </Select>
          </div>

          {/* Email */}
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Enter your email"
              className="border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 p-2"
              readOnly
            />
          </div>

          {/* Mobile */}
          <div>
            <Label htmlFor="mobile" value="Mobile" />
            <TextInput
              id="mobile"
              name="mobile"
              value={biodata.mobile}
              onChange={handleChange}
              required
              type="text"
              placeholder="Enter your mobile number"
              className="border-2 border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 p-2"
            />
          </div>

          {/* Submit Button */}
          <div className="col-span-2">
            <Button
              type="submit"
              color="pink"
              className="w-full bg-pink-300 hover:bg-pink-300"
            >
              Save & Publish Now
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditBioData;
