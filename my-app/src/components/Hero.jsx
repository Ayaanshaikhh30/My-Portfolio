import React from "react";
import heroimage from "../assets/chirag.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center w-full h-screen bg-black px-6 sm:px-12">
      
      {/* Left Side - Image */}
      <div className="w-full sm:w-1/3 flex justify-center relative group">
        <img
          src={heroimage}
          alt="Hero"
          className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px] h-auto transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
      </div>

      {/* Right Side - Text Content */}
      <div className="w-full sm:w-2/3 text-center sm:text-left px-4 md:px-8 lg:px-12">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
            I'm a
          </span>
          <br />
          <TypeAnimation
            sequence={[
              "Web Developer", 1000,
              "Frontend Developer", 1000,
              "MERN Developer", 1000,
            ]}
            wrapper="span"
            speed={5}
            repeat={Infinity}
            className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
          />
        </h1>

        <p className="text-white text-sm sm:text-lg my-4 sm:my-6 lg:text-xl leading-relaxed">
          Hi, I'm <span className="font-bold text-orange-400">Shaikh Ayaan</span>, a passionate{" "}
          <span className="underline decoration-pink-500">Web Developer</span> eager to learn and grow in the field.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 my-6 sm:my-8">
          <a
            href="/AyaanShaikh.Resume.pdf"
            target="_blank"
            className="px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white text-center text-sm sm:text-base"
          >
            View CV
          </a>

          <a
            href="#contact"
            className="px-5 sm:px-6 py-3 rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none text-center text-sm sm:text-base"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
