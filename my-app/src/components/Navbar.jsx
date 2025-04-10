import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md text-white shadow-lg transition-all duration-300">
      <div className="flex justify-between items-center px-6 md:px-16 py-4 max-w-screen-xl mx-auto">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent hover:from-pink-500 hover:to-orange-400 transition duration-300 ease-in-out cursor-pointer">
          Ayaan Shaikh
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10 items-center">
          {["about", "work", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-xl relative group transition-all duration-300"
            >
              <span className="text-gray-300 group-hover:text-white">{section.charAt(0).toUpperCase() + section.slice(1)}</span>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer z-50 text-white">
          {nav ? <AiOutlineClose size={28} /> : <AiOutlineMenu size={28} />}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-4/5 sm:w-2/5 h-screen bg-[#111] shadow-xl transform ${
          nav ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        <div className="flex flex-col px-6 pt-8 space-y-8">
          <h2 className="text-3xl font-bold bg-gradient-to-br from-orange-300 to-pink-600 bg-clip-text text-transparent">
            S. Ayaan
          </h2>
          {["about", "work", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={handleNav}
              className="text-2xl text-gray-300 hover:text-white transition-all"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
