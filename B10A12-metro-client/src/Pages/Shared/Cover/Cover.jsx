import React from "react";

const Cover = ({img, title}) => {
  return (
    <div
      class="relative bg-cover bg-center bg-no-repeat h-[500px] flex items-center justify-center"
      style={{ backgroundImage: `url("${img}")` }}
    >
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
      <div class="relative text-white text-center max-w-md px-5">
        <h1 class="mb-5 text-4xl font-bold">{title}</h1>
        <p class="mb-5">
        Present yourself with confidence and authenticity. Let your bio-data reflect your true personality, 
        values, and aspirations.
          id nisi.
        </p>
        <button class="bg-yellow-400 hover:bg-orange-400 text-white font-bold py-3 px-6 rounded">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Cover;
