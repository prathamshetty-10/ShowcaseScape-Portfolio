import { useRef } from "react";
import SideBar from "../components/sideBar";
import toast from "react-hot-toast";
import SideBarSmall from "../components/sideBarSmall";
import { LuGithub } from "react-icons/lu";
import Typewriter from 'typewriter-effect'
import port from '../assets/port.jpg'
import course from '../assets/course.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { LuGraduationCap } from "react-icons/lu";
import mit from '../assets/mit.jpeg'
import mks from '../assets/mks.webp'
import lris from '../assets/lris.jpeg'
import { RiSchoolLine } from "react-icons/ri";
import { LiaSchoolSolid } from "react-icons/lia";
import iecse from '../assets/iecse.jpeg'
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = 20.5 / 2;


function About(){
    

   return(
    
    <div className="flex m-0 p-0">
    
    <SideBar/>
    <SideBarSmall/>
    <motion.div className="w-[100vw] lg:w-[80vw] min-h-[100vh] bg-black lg:ml-[20vw]" >
        <motion.div className="my-[60px] lg:mt-[80px] ml-[40px] lg:ml-[90px]  mb-[50px] md:mb-[80px]"
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0,transition:{duration:0.5}}}>
            <h4 className="text-2xl lg:text-6xl text-extrabold text-white flex">
            Meet Your <span className="text-yellow-500 mx-[10px]"> Developer </span> <span className="text-yellow-500"><Typewriter options={{
                autoStart:true,
                loop:true,
                delay:100,
                strings:[
                    "!!"
                ],
            }}
            /></span>
            </h4>
        </motion.div>
        
        <motion.div className=" mx-[10%] my-[50px] h-[650px] lg:h-[400px] lg:flex border-white/5 bg-zinc-900 rounded-3xl shadow-[0_0_10px_gray] hover:shadow-[0_0_20px_gray] hover:scale-105 relative transition-all ease-in-out duration-500" 
        
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5}}}
        >
        
        
        
            <div>
        
            <div className="text-white text-lg m-[20px] mb-[5px] rounded-3xl pt-[20px]">
            Hello there! I'm Pratham Shetty. Currently, I'm pursuing my <span className="lg:bg-gradient-to-r from-yellow-700 to lg:bg-yellow-200 px-[5px] lg:text-black text-white rounded-lg text-lg ">B.Tech in Computer Science and Engineering </span> at Manipal Institute of Technology, Manipal, in my <span className="bg-gradient-to-r from-yellow-700 to bg-yellow-200 px-[8px] text-black rounded-lg text-lg">second year.</span>

            As a passionate computer science student, I am thrilled to be part of this community.<p className="my-[20px] hidden md:block "> My journey in computer science has been one of fascination and discovery, driven by a relentless curiosity about technology and its applications in shaping our world. From coding algorithms to designing systems, I find joy in exploring the depths of computer science and embrace each opportunity to learn and grow.</p>

            Beyond the digital realm, I enjoy playing <span className="bg-gradient-to-r from-yellow-700 to bg-yellow-200 px-[5px] text-black rounded-lg text-lg">basketball</span>, cricket, online games, and drawing. I am Currently on the lookout for cool <span className="bg-gradient-to-r from-yellow-700 to bg-yellow-200 px-[5px] text-black rounded-lg text-lg">internship</span>opportunities !! <p className="my-[20px]">Explore my portfolio to witness firsthand how I transform concepts into captivating experiences that resonate with audiences on a profound level.</p>

        
            </div>
            
        
            </div>
        
        
        </motion.div>
        <motion.div initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0,transition:{duration:0.5}}} className='mt-[20px] flex justify-center items-center '>
                    <p className="hidden lg:inline text-white font-bold mr-[30px] text-lg">------------------</p>
                    <IoLocationOutline  className='text-white font-bold' size={32}></IoLocationOutline>
                    
                    <p className='text-white font-semibold text-2xl ml-[15px] hover:text-yellow-500 hover:scale-105 transition-all ease-in-out duration-500'>Karnataka,India</p>
                    <p className="hidden lg:inline text-white font-bold ml-[30px] text-lg">------------------</p>
                    </motion.div>
        <motion.div className="px-[35px] pb-[30px] mt-[80px] "
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}
            ><h1 className="text-xl lg:text-3xl text-yellow-500 mt-[50px] lg:ml-[30px]">
                {"<"}Education{"/>"}
                </h1>
            </motion.div>
            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
            animate={{opacity:1,transition:{duration:0.5}}}
            exit={{opacity:0,transition:{duration:0.5}}} >
            <div className='flex mx-[30px] my-[25px] py-[1%] bg-zinc-900  h-[250px] md:h-[140px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 rounded-3xl'>
                    <LuGraduationCap size={82} className="hidden lg:inline text-white font-bold mt-[15px] ml-[10px]"/>
                    <img src={mit} className=' hidden lg:inline h-[85px] m-[15px] ml-[40px] rounded-full'/>
                    <div>
                    <div className="lg:flex">
                        <div className='text-xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            BTECH-Manipal Institute Of Technology, Manipal
                        </div>
                        <div className="text-xl lg:text-xl text-zinc-900 font-bold px-[5px] rounded-xl lg:ml-[20px] mt-[25px] lg:mt-[10px] bg-gradient-to-r from-yellow-700 to bg-yellow-200 mx-[5px] lg:mx-[0px]">
                         Currently persuing CGPA:9.61
                        </div>
                        </div>
                        <div className=' lg:text-lg lg:text-white mx-[20px] mt-[15px] lg:mt-[10px] text-white text-lg'>
                            October-2022 - June-2025
                        </div>
                        <div className=' lg:text-xl lg:text-yellow-500 mx-[20px] mt-[5px] text-white text-lg'>
                            Computer Science And Engineering
                        </div>
            
                    </div>
            
            </div>
            <div className='flex mx-[30px] my-[25px] py-[1%] bg-zinc-900 h-[250px] lg:h-[140px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 rounded-3xl'>
            <RiSchoolLine size={82} className=" hidden lg:inline text-white font-bold mt-[15px] ml-[10px]"/>
            <img src={mks} className='hidden lg:inline h-[85px] m-[15px] ml-[40px] rounded-full'/>
            <div>
            <div className="lg:flex">
                <div className='text-xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                    12th CBSE-Madhava Kripa School, Manipal
                </div>
                <div className="text-xl lg:text-xl text-zinc-900 font-bold px-[5px] rounded-xl  mt-[25px] lg:mt-[10px] bg-gradient-to-r from-yellow-700 to bg-yellow-200 mx-[5px] lg:mx-[0px]">
             Passed  96.6%
                </div>
                </div>
                <div className=' lg:text-lg lg:text-white mx-[20px] mt-[15px] lg:mt-[10px] text-lg text-white'>
                    June-2020 - March-2022
                </div>
                <div className=' lg:text-xl lg:text-yellow-500 mx-[11px] lg:mx-[20px] mt-[5px] text-lg text-white'>
                    Physics, Chemistry, Maths, English, Computer (Python,MySQL)
                </div>
    
            </div>
    
    </div>
    <div className='flex mx-[30px] my-[25px] py-[1%] bg-zinc-900 h-[250px] lg:h-[140px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 rounded-3xl'>
                    <LiaSchoolSolid size={82} className="hidden lg:inline text-white font-bold mt-[15px] ml-[10px]"/>
                    <img src={lris} className=' hidden lg:inline h-[85px] m-[15px] ml-[40px] rounded-full'/>
                    <div>
                    <div className="lg:flex">
                        <div className='text-xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            10th CBSE -Little Rock Indian School, Brahmavar
                        </div>
                        <div className="text-xl lg:text-xl text-zinc-900 font-bold px-[5px] rounded-xl  mt-[25px] lg:mt-[10px] bg-gradient-to-r from-yellow-700 to bg-yellow-200 mx-[5px] lg:mx-[0px]">
                        Passed 96%
                        </div>
                        </div>
                        <div className=' lg:text-lg lg:text-white mx-[20px] mt-[15px] lg:mt-[10px] text-lg text-white'>
                            June-2019 - March-2020
                        </div>
                        <div className=' lg:text-xl lg:text-yellow-500 mx-[19px] lg:mx-[20px] lg:mt-[5px] text-lg text-white '>
                            Maths, Science, Social Science, English, Hindi
                        </div>
            
                    </div>
            
            </div>
            </motion.div>
            <motion.div className="px-[35px] pb-[30px] mt-[80px] "
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}
            ><h1 className="text-xl lg:text-3xl text-yellow-500 mt-[50px] lg:ml-[30px]">
                {"<"}Experience{"/>"}
                </h1>
            </motion.div>
            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
            animate={{opacity:1,transition:{duration:0.5}}}
            exit={{opacity:0,transition:{duration:0.5}}}
            >
            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
            animate={{opacity:1,transition:{duration:0.5}}}
            exit={{opacity:0,transition:{duration:0.5}}}
             className='flex mx-[30px] my-[25px] py-[1%] bg-zinc-900 h-[200px] lg:h-[140px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 rounded-3xl'>
                    
                    <img src={iecse} className='hidden lg:inline h-[85px] m-[15px] ml-[40px] rounded-full'/>
                    <div>
                    <div className="lg:flex">
                        <div className='text-xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            Managing Committee- IECSE Manipal
                        </div>
                        </div>
                        <div className=' lg:text-lg lg:text-white mx-[20px] mt-[15px] lg:mt-[10px] text-lg text-white'>
                            January-2024 - June-2024
                        </div>
                        <div className=' lg:text-xl lg:text-yellow-500 mx-[20px] mt-[10px] lg:mt-[5px] text-lg text-white '>
                           Domain: Web Dev and Code
                        </div>
            
                    </div>
            
            </motion.div>
            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
            animate={{opacity:1,transition:{duration:0.5}}} className='flex mx-[30px] my-[25px] py-[1%] bg-zinc-900 h-[200px] lg:h-[140px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 rounded-3xl'>
                    
                    <img src={iecse} className='hidden lg:inline h-[85px] m-[15px] ml-[40px] rounded-full'/>
                    <div>
                    <div className="lg:flex">
                        <div className='text-xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            Working Committee- IECSE Manipal
                        </div>
                        </div>
                        <div className=' lg:text-lg lg:text-white mx-[20px] mt-[15px] lg:mt-[10px] text-lg text-white'>
                            June-2023 - January-2024
                        </div>
                        <div className=' lg:text-xl lg:text-yellow-500 mx-[20px] mt-[10px] lg:mt-[5px] text-lg text-white '>
                           Domain: Web Dev and Code
                        </div>
            
                    </div>
            
            </motion.div>
            </motion.div>
        
    </motion.div>
    </div>);

    
    
}


export default About;