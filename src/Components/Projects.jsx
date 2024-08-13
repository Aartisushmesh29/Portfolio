
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
            live_link="https://glamgait-shopping.vercel.app/"
            code_link="https://github.com/Aartisushmesh29/GlamGait_Shopping_App"
          />
          <ProjectDemo
            img={img2}
            title="Image Search App"
            skills=" ReactJs, TailwindCSS , HTML , JavaScript , Api Integration, Postman "
            live_link="https://image-search-app-eight-pi.vercel.app/"
            code_link="https://github.com/Aartisushmesh29/Projects/tree/main/ImageSearch"
          />
          <ProjectDemo
            img={img3}
            title="Amazon Clone Frontend"
            skills="HTML, CSS"
            live_link="https://amazon-eosin-tau.vercel.app/"
            code_link="https://github.com/Aartisushmesh29/Projects/tree/main/Amazon"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;