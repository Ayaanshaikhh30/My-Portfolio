import React from "react";
import heroimage from "../assets/chirag.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="w-full h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white flex items-center justify-center px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            <span className="bg-gradient-to-r from-orange-400 to-yellow-400 text-transparent bg-clip-text">I'm a</span><br />
            <TypeAnimation
              sequence={[
                "Web Developer", 1000,
                "Frontend Developer", 1000,
                "MERN Developer", 1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            />
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
            Hi, I'm <span className="font-bold text-orange-400">Shaikh Ayaan</span>, a passionate <span className="underline decoration-pink-500">Web Developer</span> eager to learn and grow in the field.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <a
              href="/AyaanShaikh.Resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 hover:scale-105 transition-transform duration-300 shadow-lg text-white text-base"
            >
              View CV
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-400 hover:bg-gradient-to-r from-orange-500 to-pink-600 hover:border-transparent text-white text-base transition-all duration-300 shadow-sm"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative group">
          <img
            src={heroimage}
            alt="Hero"
            className="w-[200px] sm:w-[280px] md:w-[350px] lg:w-[400px] object-contain rounded-2xl transition-transform duration-300 group-hover:scale-105 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
