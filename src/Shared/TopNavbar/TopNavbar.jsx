import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const TopNavbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="hidden md:flex space-x-6">
                    <ul className="flex space-x-6">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">Shop</a></li>
                        <li><a href="#" className="hover:text-gray-400">Deals</a></li>
                        <li><a href="#" className="hover:text-gray-400">Categories</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleDropdown} className="text-gray-400 hover:text-white focus:outline-none">
                        Menu
                    </button>
                </div>



                <div className="flex space-x-6">
                    <NavLink to={'/'} href="#" className="hover:text-gray-400">Login</NavLink>
                    <NavLink to={'/'} href="#" className="hover:text-gray-400">Sign Up</NavLink>
                </div>



            </div>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="md:hidden bg-gray-800">
                    <ul className="flex flex-col space-y-2 px-4 py-2">
                        <li><a href="#" className="hover:text-gray-400">Home</a></li>
                        <li><a href="#" className="hover:text-gray-400">Shop</a></li>
                        <li><a href="#" className="hover:text-gray-400">Deals</a></li>
                        <li><a href="#" className="hover:text-gray-400">Categories</a></li>
                        <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                        <li><a href="#" className="hover:text-gray-400">Login</a></li>
                    </ul>
                </div>
            )}


        </nav>
    );
};

export default TopNavbar;
