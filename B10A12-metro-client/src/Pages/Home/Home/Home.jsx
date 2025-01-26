import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PremiumMember from "../PremiumMember/PremiumMember";
import HowItWorks from "../HowItWorks/HowItWorks";
import SuccessStory from "../SuccessStory/SuccessStory";
import { Helmet } from "react-helmet-async";
import SuccessCounter from "../SuccessCounter/SuccessCounter";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Metro || Home</title>
      </Helmet>
      <Banner />
      <PremiumMember />
      <HowItWorks />
      <SuccessCounter />
      <SuccessStory />
      <Category />
    </div>
  );
};

export default Home;
