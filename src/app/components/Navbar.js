'use client';
import React, { useState } from 'react';

const Navbar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
        <nav className="frosted p-4 md:p-6 text-white fixed top-0 w-full ">
            <div className="container mx-auto flex justify-between items-center text-black">
                {/* Left side with server name and player count */}
                <div className="flex items-center space-x-6">
                    <div className="text-xl font-semibold">
                        wakedsmp.com
                    </div>
                    <div className="text-sm">
                        0 players online
                    </div>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 items-center">
                    <a href="#home" className="hover:text-blue-400 transition duration-300">Home</a>
                    <a href="#features" className="hover:text-blue-400 transition duration-300">Features</a>
                    <a href="#about" className="hover:text-blue-400 transition duration-300">About</a>
                    <a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a>
                    <a
                        href="#join"
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-4 space-y-2">
                    <a href="#home" className="block hover:text-blue-400 transition duration-300">Home</a>
                    <a href="#features" className="block hover:text-blue-400 transition duration-300">Features</a>
                    <a href="#about" className="block hover:text-blue-400 transition duration-300">About</a>
                    <a href="#contact" className="block hover:text-blue-400 transition duration-300">Contact</a>
                    <a
                        href="#join"
                        className="block px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Sign In
                    </a>
                </div>
            )}
        </nav>
        {children}
        </>
    );
};

export default Navbar;
