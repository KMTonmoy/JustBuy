import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from '../../Shared/TopNavbar/TopNavbar';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <TopNavbar />
            <Navbar />
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;