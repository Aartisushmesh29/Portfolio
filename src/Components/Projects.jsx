import React from 'react';
import img1 from '../assets/PROJ1.png';
import img2 from '../assets/PROJ2.png';
import img3 from '../assets/PROJ3.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: img1,
      link: ""
    },
    {
      id: 2,
      src: img2,
      link: "https://image-search-app-eight-pi.vercel.app/"
    },
    {
      id: 3,
      src: img3,
      link: "https://vercel.com/aartisushmesh29s-projects/image-search-app"
    },
    {
      id: 4,
      src: img2,
      link: "https://vercel.com/aartisushmesh29s-projects/image-search-app"
    },
    {
      id: 5,
      src: img2,
      link: "https://vercel.com/aartisushmesh29s-projects/image-search-app"
    },
  ];

  return (
    <div id='project' className='flex h-auto pt-4 flex-col bg-gradient-to-b from-black to-gray-800 w-full text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Projects</p>
          <p className='py-6'>Check out some of my work right here</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {projects.map(({ id, src, link }) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
              <img src={src} alt={`Project ${id}`} className='rounded-md hover:scale-105 duration-200' />
              <div className='flex items-center justify-center'>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                </a>
                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
