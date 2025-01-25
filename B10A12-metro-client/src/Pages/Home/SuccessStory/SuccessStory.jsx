import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const SuccessStory = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/successReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20 text-center shadow-md rounded-xl p-6 bg-white">
      <SectionTitle
        heading="Success Story"
        subHeading="Want to Become a part of Success Story"
      ></SectionTitle>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src={review.coupleImage}
                  alt="img"
                  className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg"
                />
              </div>
              <div className="flex flex-col items-center mx-24 my-8">
              <Rating 
                  style={{ maxWidth: 180 }} 
                  value={review.reviewStar} 
                  readOnly />
                </div>

              <div className="text-center space-y-2">
                <p className="text-xl font-bold text-gray-700 pb-4">
                Marriage Date :{review.marriageDate}
                </p>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {review.successStory}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStory;
