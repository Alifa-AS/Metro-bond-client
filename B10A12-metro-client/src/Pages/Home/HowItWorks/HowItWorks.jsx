import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import image from '../../../assets/Home-img/pixels.jpg'
import './HowIt.css'
import { Button } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa"; 


const HowItWorks = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-fixed w-full min-h-[450px] flex items-center justify-center
        text-white text-center p-4 md:p-8 overflow-hidden howIt-item">
        
           {/* Dark Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-800 to-black opacity-70"></div>

           <div className="relative z-10 max-w-5xl w-full">
               {/* Section Title */}
               <SectionTitle 
                   heading="How It Works"
                   subHeading="To Know More Keep Eyes On Our Website!">
               </SectionTitle>

               {/* Content Section */}
               <div className="flex flex-col md:flex-row justify-center items-center py-4 px-4 md:px-8 gap-6">
                   
                   {/* Image Section */}
                   <div className="w-full md:w-1/2 flex justify-center">
                       <img 
                           className="w-full max-w-xs md:max-w-md rounded-2xl shadow-lg transform hover:scale-110 transition-all duration-500"
                           src={image} 
                           alt="How It Works" 
                       />
                   </div>

                   {/* Text Content */}
                   <div className="w-full md:w-1/2 text-left text-gray-200">
                       <h3 className="font-bold text-lg md:text-xl py-3 text-pink-400">Finding your perfect match on METRO is simple and hassle-free.</h3>
                       <ul className="space-y-2 text-base leading-6 bg-opacity-30 bg-black">
                           <li><strong className="text-pink-300">1. Create Your Profile:</strong> Sign up and create a profile with your preferences, interests, and lifestyle.</li>
                           <li><strong className="text-pink-300">2. Browse Verified Profiles:</strong> Explore thousands of verified profiles that match your preferences.</li>
                           <li><strong className="text-pink-300">3. Express Interest:</strong> Express your interest with a simple click and start a meaningful conversation.</li>
                           <li><strong className="text-pink-300">4. Connect & Interact:</strong> Get to know your potential match through private messaging and interactive features.</li>
                           <li><strong className="text-pink-300">5. Upgrade for Exclusive Benefits:</strong> Unlock premium features with membership plans, including enhanced privacy.</li>
                       </ul>

                       {/* Read More Button */}
                       <button className="mt-4 flex items-center bg-pink-500 text-white font-bold py-2 px-5 rounded-lg shadow-lg
                        hover:bg-pink-600 hover:scale-105 transition-all duration-300">
                           Read More <FaArrowRight className="ml-2" />
                       </button>
                   </div>

               </div>
           </div>
       </section>
    );
};

export default HowItWorks;