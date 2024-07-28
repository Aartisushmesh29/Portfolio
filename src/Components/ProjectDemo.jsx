import React from "react";

const ProjectDemo = ({ img, title, skills, live_link, code_link }) => {
  return (
    <div className="max-w-sm border border-gray-700 rounded-[10px] shadow dark:bg-gray-800 dark:border-gray-700 ">
      <img src={img} alt="" className="object-fill h-40 w-80 rounded-[10px] " />
      <div className="p-2 flex flex-col justify-evenly">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-50 dark:text-white">
          {title}
        </h5>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">
          Made with : <span className="font-semibold"> {skills} </span>
        </p>
        <div className="flex justify-between">
          <a
            href={live_link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-700  dark:text-black dark:bg-gray-100 dark:hover:bg-gray-300"
            target="_blank"
          >
            Live Demo
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
          <a
            href={code_link}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-50  rounded-lg hover:underline  dark:text-white"
            target="_blank"
          >
            Go to Code
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectDemo;
