import React from "react";
import aboutImg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="w-full bg-black text-white py-12" id="about">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center px-6">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center md:order-2 relative group">
          <img
            className="rounded-3xl w-[300px] md:w-[400px] h-auto transition-transform duration-300 ease-in-out group-hover:scale-105 shadow-lg"
            src={aboutImg}
            alt="About"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 text-left py-6 space-y-4">
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-700 text-transparent bg-clip-text animate-pulse">
            About Me
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            I am an{" "}
            <span className="font-semibold text-orange-400">MCA student</span>{" "}
            with a strong academic foundation in computer applications and a
            deep passion for IT. Known for being{" "}
            <span className="font-semibold text-pink-400">
              responsible, organized, and detail-oriented
            </span>
            , I thrive in solving challenges with a proactive mindset. My
            ability to
            <span className="font-semibold text-blue-400">
              {" "}
              quickly adapt to new tools and technologies
            </span>{" "}
            sets me apart.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I specialize in{" "}
            <span className="font-semibold text-green-400">
              MERN Stack Development
            </span>{" "}
            and enjoy crafting dynamic, user-friendly web applications. Let's
            build something amazing together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
