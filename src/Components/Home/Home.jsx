import React from 'react';
import Banner from '../Banner/Banner';
import HotDeal from '../HotDeal/HotDeal';
import BestGadgets from '../BestGadgetsDeals/BestGadgets';
import WomenFashion from '../Women\'s Fashion/WomenFashion';
import Mens from '../Men\'s Fashion/Mens';
import AllProducts from '../AlllProducts/AllProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HotDeal></HotDeal>
            <BestGadgets></BestGadgets>
            <WomenFashion />
            <Mens />
            <AllProducts />

        </div>
    );
};

export default Home;