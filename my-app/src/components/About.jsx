import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 sm:px-12"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 animate-fade-in-up transition-opacity duration-1000">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:order-2 relative group">
          <img
            src={aboutImg}
            alt="About"
            className="w-[240px] sm:w-[320px] md:w-[360px] rounded-3xl shadow-2xl transform transition duration-700 group-hover:scale-105 group-hover:rotate-1 z-10"
          />
          {/* Glowing Border Animation */}
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-pink-500 via-orange-500 to-yellow-500 blur-2xl opacity-25 group-hover:opacity-40 transition duration-700"></div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 space-y-6 animate-slide-in-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text mb-4 drop-shadow-[0_0_20px_rgba(255,170,255,0.3)] tracking-tight">
            About Me
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide hover:scale-[1.01] transition duration-300">
            I’m an <span className="font-semibold text-orange-400">MCA student</span> with a strong foundation in computer applications and a deep love for technology.
            <br />
            <span className="font-semibold text-pink-400">Organized, responsible, and creative</span> — I enjoy crafting smart solutions for tough tech challenges.
          </p>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed tracking-wide hover:scale-[1.01] transition duration-300">
            Skilled in the{" "}
            <span className="text-green-400 font-semibold">MERN Stack</span>, I build modern, clean, and user-friendly web applications.
            <br />
            <span className="italic text-blue-300">Let’s collaborate, innovate, and create experiences that matter.</span>{" "}
            <span className="text-yellow-400 text-2xl">🚀</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
