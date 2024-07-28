
import React from "react";
import img1 from "../assets/image.png";
import img2 from "../assets/PROJ2.png";
import img3 from "../assets/PROJ3.png";
import ProjectDemo from "./ProjectDemo.jsx";

const Projects = () => {
  return (
    <div
      id="project"
      className="flex h-auto pt-4 flex-col bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div
        className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center
    w-full h-full"
      >
        <div className="pb-8">
          <p
            className="text-4xl font-bold border-b-4
         border-gray-500 p-2 inline"
          >
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectDemo
            img={img1}
            title="Glam-Gait: Shoe Site"
            skills=" ReactJs , Node.js , MongoDb , ExpressJS , TailwindCSS , HTML , JavaScript , Postman "
            live_link="#"
            code_link="#"
          />
          <ProjectDemo
            img={img2}
            title="Image Search App"
            skills=" ReactJs, TailwindCSS , HTML , JavaScript , Api Integration, Postman "
            live_link="#"
            code_link="#"
          />
          <ProjectDemo
            img={img3}
            title="Text-Editor"
            skills="  HTML, CSS, JavaScript "
            live_link="#"
            code_link="#"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
