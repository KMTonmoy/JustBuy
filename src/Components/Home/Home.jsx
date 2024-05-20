import React from 'react';
import Banner from '../Banner/Banner';
import HotDeal from '../HotDeal/HotDeal';
import BestGadgets from '../BestGadgetsDeals/BestGadgets';
import WomenFashion from '../Women\'s Fashion/WomenFashion';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotDeal></HotDeal>
            <BestGadgets></BestGadgets>
            <WomenFashion />
        </div>
    );
};

export default Home;