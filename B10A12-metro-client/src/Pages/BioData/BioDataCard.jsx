import React from "react";
import { Card } from "flowbite-react";

const BioDataCard = ({ name, age, location }) => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200">
        <Card
          className="max-w-sm"
          imgAlt="image"
          imgSrc="/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Name
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            details
          </p>
          <button className="mt-4 bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
            View Details
          </button>
        </Card>
      </div>
    </div>
  );
};

export default BioDataCard;
