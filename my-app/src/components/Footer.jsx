import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white ">
      <div className="max-w-[1200px] mx-auto text-center flex flex-col items-center">
        
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/Ayaanshaikhh30" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-orange-500 transition duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/ayaan-shaikh-a2130733b" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-orange-500 transition duration-300" />
          </a>
          <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-orange-500 transition duration-300" />
          </a>

        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Ayaan Shaikh. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
