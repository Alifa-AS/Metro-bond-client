import React from "react";
import Marquee from "react-fast-marquee";
import sponsor1 from "../../../assets/Sponsor/sponsor1.png"; 
import sponsor2 from "../../../assets/sponsor/sponsor2.png"; 
import sponsor3 from "../../../assets/sponsor/sponsor3.png"; 
import sponsor4 from "../../../assets/sponsor/sponsor4.jpg"; 
import sponsor5 from "../../../assets/sponsor/sponsor5.jpeg"; 
import sponsor6 from "../../../assets/sponsor/sponsor6.png"; 
import sponsor7 from "../../../assets/sponsor/sponsor7.jpg"; 

const Sponsor = () => {
    
  return (
    <div className="my-10">
      <div className="w-11/12 mx-auto bg-gray-50">
        <Marquee pauseOnHover={true}>
          <img src={sponsor1} alt="Sponsor 1" className="w-40 mx-4" />
          <img src={sponsor2} alt="Sponsor 2" className="w-40 mx-4" />
          <img src={sponsor3} alt="Sponsor 3" className="w-40 mx-4" />
          <img src={sponsor4} alt="Sponsor 4" className="w-40 mx-4" />
          <img src={sponsor5} alt="Sponsor 5" className="w-40 mx-4" />
          <img src={sponsor6} alt="Sponsor 6" className="w-40 mx-4" />
          <img src={sponsor7} alt="Sponsor 7" className="w-40 mx-4" />
        </Marquee>
      </div>
    </div>
  );
};

export default Sponsor;
