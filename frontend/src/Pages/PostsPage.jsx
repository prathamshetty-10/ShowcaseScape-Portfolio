import { useRef } from "react";
import SideBar from "../components/sideBar";
import toast from "react-hot-toast";
import SideBarSmall from "../components/sideBarSmall";
import { LuGithub } from "react-icons/lu";
import Typewriter from 'typewriter-effect'
import hack from '../assets/hack.png'
import port from '../assets/port.png'
import course from '../assets/course.jpg'
import dep from '../assets/dep.png'
import pic from '../assets/pic.jpg'
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = 20.5 / 2;


function Post(){
    

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
            My  <span className="text-yellow-500 mx-[10px]"> Space </span> <span className="text-yellow-500"><Typewriter options={{
                autoStart:true,
                loop:true,
                delay:100,
                strings:[
                    "!!!"
                ],
            }}
            /></span>
            </h4>
        </motion.div>
        <motion.div className="px-[35px] pb-[30px]"
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}><h1 className="text-lg lg:text-2xl text-white ">
                Welcome to my post page, your window into my daily adventures and musings. Here, I'll be sharing snippets of my everyday life, from the mundane to the magical. Join me as I navigate the twists and turns of each day, sharing laughs, lessons, and everything in between. Let's embark on this journey together, one post at a time!
                </h1>
                <p className="hidden lg:block text-lg lg:text-2xl text-white mt-[20px]">PS : Hover to view caption</p>
            </motion.div>

        <motion.div className="">
        <div className="lg:flex ">
        <motion.div className="w-[93%] lg:w-[50%]  pt-[30px] lg:pt-[0px] mx-[12px] lg:mx-[30px] my-[50px] h-[650px] lg:h-[400px] lg:flex shadow-[0_0_10px_gray]  hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl group transition-all ease-in-out duration-500" 

            initial={{opacity:0,transition:{duration:0.5}}}
            animate={{opacity:1}}
            exit={{opacity:0,transition:{duration:0.5}}}
            >

            <img src={dep} className=" mx-[14px] lg:mx-[0px]  w-[90%] h-[50%] lg:h-full lg:w-[100%] rounded-3xl lg:group-hover:hidden transition-all ease-in-out duration-500 "></img>

            <div className="w-full h-[50%] lg:h-full lg:w-full hidden lg:group-hover:block transition-all ease-in-out duration-500">
            <h4 className="text-3xl lg:text-5xl text-extrabold text-white flex">
                <span className="text-yellow-500 m-[10px] mx-[30px]">ShowcaseScape</span> 
                </h4>
                <div className="text-white text-xl m-[20px] mb-[5px] ">
                Date : 16th May 2024
                </div>
                <div className="text-white text-xl m-[20px] mb-[5px] ">
                Heyyyy!! Finally deployed my portfolio website !!! I m pretty satisfied hope yall like it :)) Please feel free to drop ur comments in the contact section.
                </div>
                

            </div>
            <div className="w-full h-[50%] lg:h-full lg:w-full  transition-all ease-in-out duration-500 lg:hidden">
            <h4 className="text-2xl lg:text-5xl text-extrabold text-white flex">
                <span className="text-yellow-500 m-[10px] mx-[30px]">ShowcaseScape</span> 
                </h4>
                <div className="text-white text-xl m-[20px] mb-[5px] mt-[5px] lg:mt-[20px]">
                Date : 16th May 2024
                </div>
                <div className="text-white text-lg lg:text-xl m-[20px] mb-[5px] ">
                Heyyyy!! Finally deployed my portfolio website !!! I m pretty satisfied hope yall like it :)) Please feel free to drop ur comments in the contact section.
                </div>
                

            </div>

        </motion.div>

        <motion.div className="w-[93%] lg:w-[50%]  pt-[30px] lg:pt-[0px] mx-[12px] lg:mx-[30px] my-[50px] h-[650px] lg:h-[400px] lg:flex shadow-[0_0_10px_gray]  hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl group transition-all ease-in-out duration-500" 

            initial={{opacity:0,transition:{duration:0.5}}}
            animate={{opacity:1}}
            exit={{opacity:0,transition:{duration:0.5}}}
            >

            <img src={pic} className=" mx-[14px] lg:mx-[0px]  w-[90%] h-[50%] lg:h-full lg:w-[100%] rounded-3xl lg:group-hover:hidden transition-all ease-in-out duration-500 "></img>

            <div className="w-full h-[50%] lg:h-full lg:w-full hidden lg:group-hover:block transition-all ease-in-out duration-500">
            <h4 className="text-3xl lg:text-5xl text-extrabold text-white flex">
                <span className="text-yellow-500 m-[10px] mx-[30px]">Cool Picture</span> 
                </h4>
                <div className="text-white text-xl m-[20px] mb-[5px] ">
                Date : 15th May 2024
                </div>
                <div className="text-white text-xl m-[20px] mb-[5px] ">
               Just sharing a pretty cool picture of me!!! Heheh
                </div>

            </div>
            <div className="w-full h-[50%] lg:h-full lg:w-full  transition-all ease-in-out duration-500 lg:hidden">
            <h4 className="text-2xl lg:text-5xl text-extrabold text-white flex">
                <span className="text-yellow-500 m-[10px] mx-[30px]">Cool Picture</span> 
                </h4>
                <div className="text-white text-xl m-[20px] mb-[5px] mt-[5px] lg:mt-[20px]">
                Date : 15th May 2024
                </div>
                <div className="text-white text-lg lg:text-xl m-[20px] mb-[5px] ">
               Just sharing a pretty cool picture of me!!! hehehe
                </div>
                

            </div>

        </motion.div>

        


    </div>
            <div className="lg:flex ">
                <motion.div className="w-[93%] lg:w-[50%]  pt-[30px] lg:pt-[0px] mx-[12px] lg:mx-[30px] my-[50px] h-[650px] lg:h-[400px] lg:flex shadow-[0_0_10px_gray]  hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl group transition-all ease-in-out duration-500" 
       
                    initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1}}
                    exit={{opacity:0,transition:{duration:0.5}}}
                    >
        
                    <img src={hack} className=" mx-[14px] lg:mx-[0px]  w-[90%] h-[50%] lg:h-full lg:w-[100%] rounded-3xl lg:group-hover:hidden transition-all ease-in-out duration-500 "></img>
        
                    <div className="w-full h-[50%] lg:h-full lg:w-full hidden lg:group-hover:block transition-all ease-in-out duration-500">
                    <h4 className="text-3xl lg:text-5xl text-extrabold text-white flex">
                        <span className="text-yellow-500 m-[10px] mx-[30px]">HackOn With Amazon!</span> 
                        </h4>
                        <div className="text-white text-xl m-[20px] mb-[5px] ">
                        Date : 15th May 2024
                        </div>
                        <div className="text-white text-xl m-[20px] mb-[5px] ">
                        YOOO!! I just registered for HackOn With Amazon Season 4 with my boi Aarya!! Gonna be a good experince and will be having a lot of fun. Wish me luck :) 
                        </div>
                        
        
                    </div>
                    <div className="w-full h-[50%] lg:h-full lg:w-full  transition-all ease-in-out duration-500 lg:hidden">
                    <h4 className="text-2xl lg:text-5xl text-extrabold text-white flex">
                        <span className="text-yellow-500 m-[10px] mx-[30px]">HackOn With Amazon!</span> 
                        </h4>
                        <div className="text-white text-xl m-[20px] mb-[5px] mt-[5px] lg:mt-[20px]">
                        Date : 15th May 2024
                        </div>
                        <div className="text-white text-lg lg:text-xl m-[20px] mb-[5px] ">
                        YOOO!! I just registered for HackOn With Amazon Season 4 with my boi Aarya!! Gonna be a good experince and will be having a lot of fun. Wish me luck :) 
                        </div>
                        
        
                    </div>
        
                </motion.div>

                <motion.div className="w-[93%] lg:w-[50%]  pt-[30px] lg:pt-[0px] mx-[12px] lg:mx-[30px] my-[50px] h-[650px] lg:h-[400px] lg:flex shadow-[0_0_10px_gray]  hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl group transition-all ease-in-out duration-500" 
       
                    initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1}}
                    exit={{opacity:0,transition:{duration:0.5}}}
                    >
        
                    <img src={port} className=" mx-[14px] lg:mx-[0px]  w-[90%] h-[50%] lg:h-full lg:w-[100%] rounded-3xl lg:group-hover:hidden transition-all ease-in-out duration-500 "></img>
        
                    <div className="w-full h-[50%] lg:h-full lg:w-full hidden lg:group-hover:block transition-all ease-in-out duration-500">
                    <h4 className="text-3xl lg:text-5xl text-extrabold text-white flex">
                        <span className="text-yellow-500 m-[10px] mx-[30px]">ShowcaseScape</span> 
                        </h4>
                        <div className="text-white text-xl m-[20px] mb-[5px] ">
                        Date : 10th May 2024
                        </div>
                        <div className="text-white text-xl m-[20px] mb-[5px] ">
                        I just started working on my portfolio website. I will be using React for the same. I'm pretty excited !!! hope I make a good website XD
                        </div>
        
                    </div>
                    <div className="w-full h-[50%] lg:h-full lg:w-full  transition-all ease-in-out duration-500 lg:hidden">
                    <h4 className="text-2xl lg:text-5xl text-extrabold text-white flex">
                        <span className="text-yellow-500 m-[10px] mx-[30px]">ShowcaseScape</span> 
                        </h4>
                        <div className="text-white text-xl m-[20px] mb-[5px] mt-[5px] lg:mt-[20px]">
                        Date : 10th May 2024
                        </div>
                        <div className="text-white text-lg lg:text-xl m-[20px] mb-[5px] ">
                        I just started working on my portfolio website. I will be using React for the same. I'm pretty excited !!! hope I make a good website XD
                        </div>
                        
        
                    </div>
        
                </motion.div>

                


            </div>


        </motion.div>
        
    </motion.div>
    </div>);

    
    
}


export default Post;

