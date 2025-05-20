import React from "react";
import { Link } from "react-router-dom";

const Cover = ({img, title}) => {
  return (
    <div
    className="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center"
    style={{ backgroundImage: `url("${img}")` }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
    <div className="relative text-white text-center max-w-md px-5">
      <h1 className="mb-5 text-4xl font-bold">{title}</h1>
      <p className="mb-5">
        Present yourself with confidence and authenticity. Let your bio-data reflect your true personality, 
        values, and aspirations.
      </p>
      <Link to="/">
      <button color="pink" className="bg-[#da7665] hover:bg-pink-300 text-white font-bold py-3 px-6 rounded">
        Get Started
      </button>
      </Link>
    </div>
  </div>
  );
};

export default Cover;
