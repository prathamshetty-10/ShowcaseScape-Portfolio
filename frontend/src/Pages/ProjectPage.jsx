import { useRef } from "react";
import SideBar from "../components/sideBar";
import toast from "react-hot-toast";
import SideBarSmall from "../components/sideBarSmall";
import { LuGithub } from "react-icons/lu";
import Typewriter from 'typewriter-effect'
import port from '../assets/port.jpg'
import course from '../assets/course.jpg'

import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = 20.5 / 2;


function Project(){
    

   return(
    
    <div className="flex m-0 p-0">
    
    <SideBar/>
    <SideBarSmall/>
    <motion.div className="w-[100vw] lg:w-[80vw] min-h-[100vh] bg-black lg:ml-[20vw]" >
        <motion.div className="my-[60px] ml-[40px] lg:ml-[90px]  mb-[50px] md:mb-[80px] lg:mt-[80px]"
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0,transition:{duration:0.5}}}>
            <h4 className="text-2xl lg:text-6xl text-extrabold text-white flex">
            From Concept to  <span className="text-yellow-500 mx-[10px]"> Creation </span> <span className="text-yellow-500"><Typewriter options={{
                autoStart:true,
                loop:true,
                delay:100,
                strings:[
                    "...."
                ],
            }}
            /></span>
            </h4>
        </motion.div>
        <motion.div className="px-[35px] pb-[30px]"
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}><h1 className="text-lg lg:text-2xl text-white ">
                Welcome to my project showcase! Dive into a gallery of my creations, each a blend of passion and skill. Explore innovative designs, thought-provoking concepts, and the stories behind each piece. Let's inspire ideas and possibilities together
                </h1>
            </motion.div>
        <motion.div className=" mx-[10%] my-[50px] h-[650px] lg:h-[400px] lg:flex hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl" 
       
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5}}}
        >
        
        <img src={port} className="w-full h-[50%] lg:h-full lg:w-[50%] rounded-l-3xl"></img>
        
        <div className="w-full h-[50%] lg:h-full lg:w-[50%] ">
        <h4 className="text-3xl lg:text-5xl text-extrabold text-white flex">
            <span className="text-yellow-500 m-[10px] mx-[30px]">ShowcaseScape </span> 
            </h4>
            <div className="text-white text-xl m-[20px] mb-[5px] ">
            Welcome to ShowcaseScape! Explore my curated portfolio, showcasing the pinnacle of my creative journey. <span className="hidden lg:block">Discover stunning designs and innovative projects, each crafted with passion and precision. Dive in and get inspired by a landscape of talent and imagination.</span>
            </div>
            <button  className=" mx-[25%] w-[50%] lg:w-[50%] mt-6 lg:mt-8 bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300 text-black font-semibold hover:text-blue-950 rounded-lg py-3 text-lg cursor-pointer  mb-[50px] lg:mb-[0px] mr-[30px] lg:mr-[0px] hover:scale-105">
            <a href="https://github.com/prathamshetty-10/portfolio-REACT" target="_blank" className="flex justify-center items-center gap-3 text-xl">
            <LuGithub size={32}/>
            <span className="font-bold text-2xl">Explore</span>
                    
             </a>       </button>
        
        </div>
        
        </motion.div>
        
        <motion.div className=" mx-[10%] my-[50px] h-[650px] lg:h-[400px] lg:flex hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl" 
        
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5}}}
        >
        
        <img src={course} className="w-full h-[50%] lg:h-full lg:w-[50%] rounded-l-3xl "></img>
        
        <div className="w-full h-[50%] lg:h-full lg:w-[50%] ">
        <h4 className="text-3xl lg:text-5xl text-extrabold text-white flex">
            <span className="text-yellow-500 m-[10px] mx-[30px]">EduVenture </span> 
            </h4>
            <div className="text-white text-xl m-[20px] md:mb-[40px] lg:mb-[10px] ">
            Welcome to EduVenture – your gateway to mastering new skills and advancing your career. <span className="hidden lg:block">Explore expertly crafted courses, guided by industry professionals, and unlock your full potential. Join us today and embark on your educational adventure!</span>
            </div>
            <button  className=" mx-[25%] w-[50%] lg:w-[50%] mt-6 lg:mt-8 bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300 text-black font-semibold hover:text-blue-950 rounded-lg py-3 text-lg cursor-pointer  mb-[50px] lg:mb-[0px] mr-[30px] lg:mr-[0px] hover:scale-105">
            <a href="https://github.com/prathamshetty-10/lms-mern-project" target="_blank" className="flex justify-center items-center gap-3 text-xl">
            <LuGithub size={32}/>
            <span className="font-bold text-2xl">Explore</span>
                    
             </a>       </button>
        
        </div>
        
        </motion.div>
    </motion.div>
    </div>);

    
    
}


export default Project;