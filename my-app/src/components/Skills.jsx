import React from "react";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

const techStack = [
  { src: html, alt: "HTML", percent: 95 },
  { src: css, alt: "CSS", percent: 90 },
  { src: javascript, alt: "JavaScript", percent: 85 },
  { src: tailwind, alt: "Tailwind CSS", percent: 80 },
  { src: react, alt: "React", percent: 75 },
];

const Skills = () => {
  return (
    <section className="w-full bg-gradient-to-b from-black via-[#111] to-black py-20 px-6 sm:px-12 text-white">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-5xl font-extrabold mb-16 bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text animate-text-glow">
  My Tech Stack
</h2>


      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-12">
        {/* First row - 3 items */}
        <div className="flex flex-wrap justify-center gap-12">
          {techStack.slice(0, 3).map((tech, index) => (
            <div
              key={index}
              className="w-64 bg-white/5 rounded-2xl p-6 shadow-xl shadow-pink-500/10 border border-gray-700 hover:border-pink-500 transition-all duration-300 backdrop-blur-lg flex flex-col items-center"
            >
              <img
                src={tech.src}
                alt={tech.alt}
                className="w-20 h-20 object-contain mb-4 transition-transform duration-300 hover:scale-110"
              />
              <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
                {tech.alt}
              </p>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse"
                  style={{ width: `${tech.percent}%` }}
                ></div>
              </div>
              <span className="mt-2 text-sm text-gray-400">{tech.percent}%</span>
            </div>
          ))}
        </div>

        {/* Second row - 2 items */}
        <div className="flex flex-wrap justify-center gap-12">
          {techStack.slice(3).map((tech, index) => (
            <div
              key={index}
              className="w-64 bg-white/5 rounded-2xl p-6 shadow-xl shadow-pink-500/10 border border-gray-700 hover:border-pink-500 transition-all duration-300 backdrop-blur-lg flex flex-col items-center"
            >
              <img
                src={tech.src}
                alt={tech.alt}
                className="w-20 h-20 object-contain mb-4 transition-transform duration-300 hover:scale-110"
              />
              <p className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
                {tech.alt}
              </p>
              <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse"
                  style={{ width: `${tech.percent}%` }}
                ></div>
              </div>
              <span className="mt-2 text-sm text-gray-400">{tech.percent}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
