import React from "react";
import img1 from "../assets/image.png";
import img2 from "../assets/PROJ2.png";
import img3 from "../assets/PROJ3.png";
import ProjectDemo from "./ProjectDemo.jsx";

const Projects = () => {
  return (
    <div className="w-full duration-300 bg-gradient-to-b from-black to-gray-800">
      <div
        className="max-w-screen-lg mx-auto p-4 flex flex-col 
      justify-center w-full h-auto text-white"
      >
        <p
          className="text-4xl ml-10 font-bold 
            text-white border-gray-500  inline"
        >
          {" "}
          Projects
        </p>
        <p className="ml-10 mt-4 text-white">
          These are the Projects I've worked on.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
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
