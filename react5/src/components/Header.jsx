import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-700 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          <div className="flex-shrink-0">
            <span className="text-white text-2xl">Logo</span>
          </div>
          <div className="hidden sm:block">
            <a
              href="#"
              className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </a>
            <NavLink to={"/about"}  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
             
                About

            </NavLink>
           <NavLink to={"/contect"} className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            
              Contact
           </NavLink>
        <NavLink to={"/login"}  className="text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">

              Login
        </NavLink>
            
          </div>
          <div className="block sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isMenuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <a
              href="#"
              className="block text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </a>
            <a
              href="#"
              className="block text-gray-300 hover:bg-orange-500 hover:text-white px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
