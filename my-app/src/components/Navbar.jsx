import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-black text-gray-400 h-[80px] w-full fixed top-0 left-0 flex justify-between items-center px-8 md:px-16 shadow-md z-50">
      {/* Logo with better spacing */}
      <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text transition-all duration-300 ease-in-out hover:from-pink-600 hover:to-orange-400 hover:scale-105 cursor-pointer">
        Ayaan Shaikh
      </h1>

      {/* Desktop Menu with better positioning */}
      <ul className="hidden md:flex space-x-10 mr-6">
      <li className="text-2xl relative group">
        <a href="#about" className="hover:text-white transition-all duration-300">About</a>
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="text-2xl relative group">
        <a href="#work" className="hover:text-white transition-all duration-300">Work</a>
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </li>
      <li className="text-2xl relative group">
        <a href="#contact" className="hover:text-white transition-all duration-300">Contact</a>
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
      </li>
    </ul>
    

      {/* Mobile Menu Button */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[60%] bg-[#202121] shadow-lg transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500`}
      >
        <h1 className="text-4xl font-bold bg-gradient-to-b from-orange-300 to-pink-700 text-transparent bg-clip-text">
          S. Ayaan
        </h1>

        <ul className="p-8 text-2xl space-y-6">
          <li className="hover:underline">
            <a href="#about" onClick={handleNav}>
              About
            </a>
          </li>
          <li className="hover:underline">
            <a href="#work" onClick={handleNav}>
              Work
            </a>
          </li>
          <li className="hover:underline">
            <a href="#contact" onClick={handleNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
