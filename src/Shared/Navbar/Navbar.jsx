import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../assets/logo.png';
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white py-4">
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo and Site Name */}
                <div className="flex items-center space-x-4">
                    <img src={logo} alt="Logo" className="h-8 w-8 md:h-14 md:w-20" />
                    <span className="text-lg md:text-xl font-bold">JustBuy</span>
                </div>

                {/* Search Bar */}
                <div className="flex-1 mx-6">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full py-2 px-4 rounded-md text-gray-800"
                    />
                </div>

                {/* Cart Icon and Button */}
                <div className="flex items-center space-x-4">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button
                    </button>
                    <div className="relative">
                        <FaShoppingCart className="text-2xl md:text-4xl" />
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                            3
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
