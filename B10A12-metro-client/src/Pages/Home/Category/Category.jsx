import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import slide1 from "../../../assets/Home-img/c1.jpg";
import slide2 from "../../../assets/Home-img/c2.jpg";
import slide3 from "../../../assets/Home-img/c3.jpg";
import slide4 from "../../../assets/Home-img/c4.jpg";
import slide5 from "../../../assets/Home-img/c5.jpg";
import slide6 from "../../../assets/Home-img/c6.png";
import SectionTitle from "../../../Components/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        heading={"Perfect Match"}
        subHeading={"Search Perfect Match For You!"}>
      </SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="img" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Couples
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="img" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Wedding
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="img" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Choosey
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="img" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Best Match
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="img" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Engaged
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide6} alt="img" />
          <h3 className="text-3xl uppercase text-center -mt-16 text-white">
            Married
          </h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
