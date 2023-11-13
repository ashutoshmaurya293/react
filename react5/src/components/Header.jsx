import React, { useState } from 'react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-white text-2xl">Your Logo</span>
          </div>
          <div className="hidden sm:block">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
          <div className="block sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
          
                {isMenuOpen ? (
                 <button className='bg-red-900 text-black'>hii</button>
                ) : (
                  <button className='bg-red-900'>hellow</button>
                )}
             
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="sm:hidden">
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavigationBar;
