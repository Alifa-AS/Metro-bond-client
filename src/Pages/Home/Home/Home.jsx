import React from "react";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import PremiumMember from "../PremiumMember/PremiumMember";
import HowItWorks from "../HowItWorks/HowItWorks";
import SuccessStory from "../SuccessStory/SuccessStory";
import { Helmet } from "react-helmet-async";
import SuccessCounter from "../SuccessCounter/SuccessCounter";
import Sponsor from "../Sponsor/Sponsor";
import Privacy from "../Privacy/Privacy";
import CountDown from "../CountDown/CountDown";
import TeamMember from "../Team Member/TeamMember";

const Home = () => {
  return (
    <div className="bg-[#fdfcf9] dark:bg-gray-800 bg-[url('/src/assets/Bg/flower.png')] 
    bg-no-repeat bg-[position:top_left] bg-[length:450px] bg-fixed">
      <Helmet>
        <title>Metro || Home</title>
      </Helmet>
      <Banner />
      <PremiumMember />
      <HowItWorks />
      <SuccessCounter />
      <SuccessStory />
      <Category />
      <Sponsor />
      <Privacy />
      <CountDown />
      <TeamMember />
    </div>
  );
};

export default Home;
