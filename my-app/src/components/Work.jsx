import React from 'react';
import proj230 from "../assets/proj230.png";
import proj130 from "../assets/proj130.png";

const projects = [
  {
    id: 1,
    title: "OrderNow",
    image: proj230,
    live: "https://chipper-bunny-0921bf.netlify.app/",
    code: "https://github.com/Ayaanshaikhh30/React/tree/main/ordernow",
  },
  {
    id: 2,
    title: "Medicine Reminder",
    image: proj130,
    live: "https://scintillating-toffee-af9a3f.netlify.app/",
    code: "https://github.com/Ayaanshaikhh30/Medicine_Reminder",
  },
  {
    id: 3,
    title: "BG Changer",
    image: proj230,
    live: "https://relaxed-bublanina-f108dd.netlify.app/",
    code: "https://github.com/Ayaanshaikhh30/React/tree/main/BGchanger",
  },
  {
    id: 4,
    title: "Coming Soon",
    image: proj130,
  },
  {
    id: 5,
    title: "Coming Soon",
    image: proj230,
  },
  {
    id: 6,
    title: "Coming Soon",
    image: proj130,
  },
];

const ProjectCard = ({ title, image, live, code }) => (
  <div className='relative group overflow-hidden rounded-xl shadow-lg shadow-[#0f0f0f] transform transition duration-500 hover:scale-[1.03] hover:shadow-orange-500/30'>
    <img src={image} alt={title} className='w-full h-[200px] object-cover blur-[1px] group-hover:blur-0 transition duration-500' />
    
    <div className='absolute inset-0 bg-black/50 backdrop-blur-md flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 text-center rounded-xl'>
      <span className='text-xl font-bold text-white tracking-wide drop-shadow-lg'>{title}</span>
      
      {(live || code) ? (
        <div className='flex space-x-3 mt-4 flex-wrap justify-center'>
          {live && (
            <a href={live} target='_blank' rel='noopener noreferrer'>
              <button className='rounded-md px-4 py-1.5 bg-white text-gray-700 font-semibold text-sm hover:bg-gray-200 transition'>
                Live Demo
              </button>
            </a>
          )}
          {code && (
            <a href={code} target='_blank' rel='noopener noreferrer'>
              <button className='rounded-md px-4 py-1.5 bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition'>
                GitHub Code
              </button>
            </a>
          )}
        </div>
      ) : (
        <span className='mt-2 text-sm italic text-gray-300'>Coming Soon 🔧</span>
      )}
    </div>
  </div>
);

const Work = () => {
  return (
    <div className='w-full bg-black text-white py-16' id='work'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='pb-12 text-center'>
          <h2 className='text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 to-pink-600 text-transparent bg-clip-text drop-shadow-[0_4px_30px_rgba(255,100,200,0.25)] mb-2'>
            My Work
          </h2>
          <p className='text-gray-400 text-sm sm:text-base'>
            Glimpse into my recent creations — more coming soon 🚀
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
