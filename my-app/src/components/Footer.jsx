import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-t from-black to-[#0f0f0f] text-white border-t border-gray-800 shadow-inner">
      <div className="max-w-[1200px] mx-auto px-6 py-10 flex flex-col items-center text-center space-y-6">

        {/* Animated Border Line */}
        <div className="w-32 h-[2px] bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 animate-pulse mb-4" />

        {/* Glowing Social Icons */}
        <div className="flex space-x-8">
          <a
            href="https://github.com/Ayaanshaikhh30"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-white hover:scale-125 transition duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ayaan-shaikh-a2130733b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-[#0A66C2] hover:scale-125 transition duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/your-twitter-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-300 hover:text-sky-400 hover:scale-125 transition duration-300 ease-in-out"
          >
            <FaTwitter />
          </a>
        </div>

        {/* Name Branding */}
        <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-rose-400 to-orange-500 bg-clip-text text-transparent tracking-wide">
  Powered by Passion, Styled with Skill. — Ayaan Shaikh 🚀
</h3>


        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
