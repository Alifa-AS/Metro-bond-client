import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Button } from "flowbite-react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const SuccessStory = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/successReview")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <section className="my-20 text-center shadow-xl rounded-2xl p-10 bg-gradient-to-r from-purple-50 to-pink-50">
      <SectionTitle
        heading="Success Story"
        subHeading="Want to Become a part of Success Story"
      />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src={review.coupleImage}
                  alt="img"
                  className="w-40 h-40 rounded-full border-4 border-purple-400 shadow-xl"
                />
              </div>
              <div className="flex flex-col items-center mx-16 my-6">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.reviewStar}
                  readOnly
                />
              </div>

              <div className="text-center space-y-3">
                <p className="text-xl font-bold text-gray-800 pb-3">
                  Marriage Date: {review.marriageDate}
                </p>
                <span className="text-sm text-gray-600 italic">
                  {review.successStory}
                </span>
              </div>

              <div className="flex justify-center py-4">
                <Link to={`/successReview/${review._id}`}>
                  <Button
                    color="pink"
                    className="px-6 py-2 rounded-lg shadow-md transition-all duration-300"
                  >
                    See More <HiArrowRight className="text-xl" />
                  </Button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SuccessStory;
