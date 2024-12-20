import React, { useState } from 'react';
import { Compass } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [spin, setSpin] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev); // Toggle the isOpen state
  };

  const handleSpin = () => {
    setSpin(true);
    setTimeout(() => setSpin(false),1000);
  }

  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2" onClick = {handleSpin}>
            <Compass className={`h-8 w-8 text-blue-600 ${spin ? 'animate-spin':''}`} />
            <span className="text-xl font-bold text-gray-800">TripPlanner</span>
          </div>

          {/* Hamburger Icon (Mobile) */}
          <div className="md:hidden flex items-center" onClick={handleMenu}>
            <button className="text-gray-600 hover:text-blue-600">
              <div className="HAMBURGER-ICON space-y-2">
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#destinations" className="text-gray-600 hover:text-blue-600">Destinations</a>
            <a href="#packages" className="text-gray-600 hover:text-blue-600">Packages</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
          </div>
        </div>

        {/* Mobile Menu (Toggleable) */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-lg`}
        >
          <ul className="list-none flex flex-col items-start gap-4">
            <li>
              <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#destinations" className="text-gray-600 hover:text-blue-600">Destinations</a>
            </li>
            <li>
              <a href="#packages" className="text-gray-600 hover:text-blue-600">Packages</a>
            </li>
            <li>
              <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
