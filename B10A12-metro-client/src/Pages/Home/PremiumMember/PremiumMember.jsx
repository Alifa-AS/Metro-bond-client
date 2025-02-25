import React from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Card } from "flowbite-react";

const PremiumMember = () => {
  return (
    <section className="my-20" data-aos="fade-up" data-aos-duration="2000">
      <SectionTitle
        heading="Our Premium Member"
        subHeading="Be Premium Member to Part Of Our Story"
      ></SectionTitle>
      <div>
        <Card
          className="max-w-sm"
          imgAlt="image"
          imgSrc="/images/blog/image-1.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            member
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button className="mt-4 bg-pink-400 text-white py-2 px-4 rounded-lg hover:bg-pink-600">
            View Details
          </button>
        </Card>
      </div>
    </section>
  );
};

export default PremiumMember;
