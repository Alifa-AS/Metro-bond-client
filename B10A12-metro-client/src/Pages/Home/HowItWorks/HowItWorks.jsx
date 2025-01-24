import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import image from '../../../assets/Home-img/Home4.jpg'
import './HowIt.css'
import { Button } from "flowbite-react";

const HowItWorks = () => {
    return (
        <section className="relative bg-cover bg-center bg-no-repeat bg-fixed w-full min-h-[550px] flex items-center justify-center
         text-white text-center p-5 md:p-10 overflow-hidden howIt-item" >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10 max-w-5xl w-full">
            <SectionTitle 
                heading="How It Works"
                subHeading="To Know More Keep Eyes On Our Website! ">
            </SectionTitle>

            <div className="flex flex-col md:flex-row justify-center items-center py-8 px-5 md:px-10">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img className="w-full max-w-xs md:max-w-md" src={image} alt="How It Works" />
                </div>
                <div className="w-full md:w-1/2 md:ml-10 text-left mt-6 md:mt-0">
                    <h3 className="font-semibold text-xl py-4">Finding your perfect match on METRO is simple and hassle-free.</h3>
                    <p><strong>1. Create Your Profile:</strong> Sign up and create a profile with your preferences, interests, and lifestyle.</p>
                    <p className="py-2"><strong>2. Browse Verified Profiles:</strong> Explore thousands of verified profiles that match your preferences.</p>
                    <p><strong>3. Express Interest:</strong> Express your interest with a simple click and start a meaningful conversation.</p>
                    <p className="py-2"><strong>4. Connect & Interact:</strong> Get to know your potential match through private messaging and interactive features.</p>
                    <p><strong>5. Upgrade for Exclusive Benefits:</strong> Unlock premium features with membership plans, including enhanced privacy.</p>
                    <Button color='gray' className='mt-5'>
                    Read More... </Button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default HowItWorks;