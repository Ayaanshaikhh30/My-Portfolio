import React from 'react';
import proj230 from "../assets/proj230.png";
import proj130 from "../assets/proj130.png";



const Work = () => {
  return (
    <div className='w-full bg-black text-white py-12' id='work'>
      <div className='max-w-[1200px] mx-auto px-6'>
        <div className='pb-8'>
          <p className='text-4xl mb-3 font-bold bg-gradient-to-b from-orange-300 to-pink-700 text-transparent bg-clip-text'>Work</p>
          <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
        <div  className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] w-full bg-cover relative'>
  <img src={proj230} alt="Project 1" className="w-full h-full object-cover" />
  <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute flex flex-col justify-center items-center inset-0'>
    <span className='text-2xl font-bold text-white tracking-wide'>Project 1</span>
    
    <div className='flex space-x-4 mt-4'>   {/* PROJECT 1 */}
    <a href='https://chipper-bunny-0921bf.netlify.app/' target='_blank' rel='noopener noreferrer'>
        <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-sm hover:bg-gray-200 transition duration-300'>
          Live Demo
        </button>
      </a>
      
      <a href='https://github.com/Ayaanshaikhh30/React/tree/main/ordernow' target='_blank' rel='noopener noreferrer'>
        <button className='text-center rounded-lg px-4 py-2 bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition duration-300'>
          GitHub Code
        </button>
      </a>
    </div>


  </div>
</div>


{[proj130, proj230, proj130, proj230, proj130].map((project, index) => (
  <div key={index} className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center h-[200px] w-full bg-cover relative'>
    <img src={project} alt='' className='w-full h-full object-cover' />
    <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute flex flex-col justify-center items-center inset-0'>
      <span className='text-2xl font-bold text-white tracking-wide'>Project {index + 2}</span>

      {index === 0 && (  // This ensures buttons are added only for Project 2
        <div className='flex space-x-4 mt-4'>  
          <a href='https://scintillating-toffee-af9a3f.netlify.app/' target='_blank' rel='noopener noreferrer'>
            <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-sm hover:bg-gray-200 transition duration-300'>
              Live Demo
            </button>
          </a>

          <a href='https://github.com/Ayaanshaikhh30/Medicine_Reminder' target='_blank' rel='noopener noreferrer'>
            <button className='text-center rounded-lg px-4 py-2 bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition duration-300'>
              GitHub Code
            </button>
          </a>
        </div>
      )}
      {index === 1 && (  // This ensures buttons are added only for Project 2
        <div className='flex space-x-4 mt-4'>  
          <a href='https://relaxed-bublanina-f108dd.netlify.app/' target='_blank' rel='noopener noreferrer'>
            <button className='text-center rounded-lg px-4 py-2 bg-white text-gray-700 font-bold text-sm hover:bg-gray-200 transition duration-300'>
              Live Demo
            </button>
          </a>

          <a href='https://github.com/Ayaanshaikhh30/React/tree/main/BGchanger' target='_blank' rel='noopener noreferrer'>
            <button className='text-center rounded-lg px-4 py-2 bg-orange-500 text-white font-bold text-sm hover:bg-orange-600 transition duration-300'>
              GitHub Code
            </button>
          </a>
        </div>
      )}
      
    </div>
  </div>
))}

        </div>
      </div>
    </div>
  );
};

export default Work;
