import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import PremiumMember from '../PremiumMember/PremiumMember';
import HowItWorks from '../HowItWorks/HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner />
            <PremiumMember />
            <HowItWorks />
            <Category />
        </div>
    );
};

export default Home;