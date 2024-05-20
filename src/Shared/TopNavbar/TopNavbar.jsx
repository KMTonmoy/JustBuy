import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const TopNavbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gray-900 text-white py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <div className="hidden md:flex space-x-6">
                    <ul className="flex space-x-6">
                        <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Home</NavLink></li>
                        <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Shop</NavLink></li>
                        <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Deals</NavLink></li>
                        <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Categories</NavLink></li>
                        <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Contact</NavLink></li>
                    </ul>
                </div>

                <div className="md:hidden">
                    <button onClick={toggleDropdown} className="text-gray-400 hover:text-white focus:outline-none">
                        {isDropdownOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                <div className="flex space-x-6">
                    <NavLink to={'/login'} className="hover:text-gray-400">Login</NavLink>
                    <NavLink to={'/signup'} className="hover:text-gray-400">Sign Up</NavLink>
                </div>
            </div>

            {/* Dropdown Menu */}
            <div
                className={`md:hidden bg-gray-800 overflow-hidden transition-max-height duration-500 ease-in-out ${isDropdownOpen ? 'max-h-screen' : 'max-h-0'
                    }`}
            >
                <ul className="flex flex-col space-y-2 px-4 py-2">
                    <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Home</NavLink></li>
                    <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Shop</NavLink></li>
                    <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Deals</NavLink></li>
                    <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Categories</NavLink></li>
                    <li><NavLink to={'/'} href="#" className="hover:text-gray-400">Contact</NavLink></li>

                </ul>
            </div>
        </nav>
    );
};

export default TopNavbar;
