import React from 'react'
import html from "../assets/html.svg";
import css from "../assets/css.svg";  // Import other images
import javascript from "../assets/javascript.svg";
import reactimg from "../assets/reactjs.svg";
import tailwind from "../assets/tailwind.svg";
import nextjs from "../assets/nextjs.svg";
import github from "../assets/Github.svg";
import mysql from "../assets/Mysql.svg";
import nodejs from "../assets/nodejs.svg";
import c_logo from "../assets/c_logo.svg";
import cpp from "../assets/cpp.svg";

const Experience = () => {

    const techs =[

    
    { 
        id:1,
        src:html,
        title:'HTML',
        style: 'shadow-orange-500'
    },
    { 
        id:2,
        src:css,
        title:'CSS',
        style: 'shadow-blue-500'
    },
    { 
        id:3,
        src:javascript,
        title:'javascript',
        style: 'shadow-yellow-600'
    },
    { 
        id:4,
        src:reactimg,
        title:'ReactJs',
        style: 'shadow-blue-500'
    },
    { 
        id:5,
        src:tailwind,
        title:'TailwindCSS',
        style: 'shadow-sky-400'
    },
    { 
        id:6,
        src:nextjs,
        title:'NextJs',
        style: 'shadow-pink-400'
    },
    { 
        id:7,
        src:nodejs,
        title:'GraphQl',
        style: 'shadow-orange-500'
    },
    { 
        id:8,
        src:github,
        title:'GitHub',
        style: 'shadow-gray-500'
    },
    { 
        id:9,
        src:mysql,
        title:'mysql',
        style: 'shadow-gray-500'
    },
    { 
        id:10,
        src:c_logo,
        title:'C',
        style: 'shadow-gray-500'
    },
    { 
        id:11,
        src:cpp,
        title:'C++',
        style: 'shadow-gray-500'
    },
    ]
    
  return (
    <div id='about' name="experience" className='h-auto bg-gradient-to-b from-gray-800 to-black w-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col 
      justify-center w-full h-auto text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4
             border-gray-500 p-2 inline'> Experience</p>
            <p className='py-6'>These are the technologies I've worked with.</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
               {
                  techs.map(({id,src,title,style})=>(
                    
                 <div key={id}
                  className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                 <img className='w-20 mx-auto' src={src} alt=""/>
        
                    <p className='mt-4'>{title}</p>
                 </div>
                  ))
                }

        </div>
      </div>
    </div>
  )
}

export default Experience;
