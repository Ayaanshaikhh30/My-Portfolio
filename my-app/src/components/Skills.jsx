import React from "react";
import javascript from "../assets/javascript.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import tailwind from "../assets/tailwind.png";
import react from "../assets/react.png";

const Skills = () => {
  return (
    <div className="bg-black text-gray-400 w-full py-12">
      {/* Tech Stack Title */}
      <h2 className="text-center text-gray-200 text-4xl md:text-6xl font-bold mb-12">
        My Tech Stack
      </h2>

      {/* Tech Stack Icons (Single Row with Gap) */}
      <div className="flex justify-center items-center gap-20 space-x-16 px-4 max-w-[1400px] mx-auto border border-white border-opacity-20 rounded-xl p-12 md:px-16 shadow-lg shadow-white/10 transition-all duration-300 hover:border-blue-500">
        {[
          { src: html, alt: "HTML" },
          { src: css, alt: "CSS" },
          { src: javascript, alt: "JavaScript" },
          { src: tailwind, alt: "Tailwind" },
          { src: react, alt: "React" },
        ].map((tech, index) => (
          <div key={index} className="flex flex-col items-center w-[120px] sm:w-[160px]">
            <img
              src={tech.src}
              alt={tech.alt}
              className="w-full transition-transform duration-300 hover:scale-125"
            />
            <p className="mt-4 text-white text-lg font-semibold">{tech.alt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
