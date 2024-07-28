import React from 'react';
import Typewriter from "typewriter-effect";
import PHOTO from "../assets/PHOTO.jpg";

const HeroSection = () => {
  return (
    <section className="flex flex-col items-center justify-between h-auto bg-gradient-to-b from-black via-black to-gray-800 pt-5">
      <div className="flex flex-col md:gap-28 md:flex-row items-center justify-between w-full max-w-4xl p-5 md:p-10">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className='text-5xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-600 mb-2'>
            Aarti</h1>
          <h1 className="text-2xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-600 inline-block">
            <Typewriter
              options={{
                strings: [
                  "Programmer",
                  "Web Developer",
                  "Open Source"
                ],
                autoStart: true,
                loop: true,
                delete: false,
              }}
            />
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Hi, I'm an enthusiastic coder with a passion for programming, problem-solving, web development, and open source.
           I love tackling challenging coding problems and creating responsive, user-friendly websites. My involvement in open source allows me to collaborate with other developers and contribute to impactful projects. 
           I'm dedicated to continually learning and enhancing my skills to become a versatile developer.
          </p>
          {/* <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Get started
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              /> 
             </svg> 
           </a> */}
          <a
            href="https://docs.google.com/document/d/10yt_sEMvm8qbPV7kw84kQT71b490dnPHnHAakhtfUJ4/edit?usp=sharing"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-500 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            <button>Resume</button>
          </a>
        </div>
        <div className="">
          <img
            src={PHOTO}
            alt="mockup"
            className="rounded-full w-56 h-auto  border-gray-900 dark:border-gray-900"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
