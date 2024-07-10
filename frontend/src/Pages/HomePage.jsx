import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import SideBar from "../components/sideBar";
import toast from "react-hot-toast";
import SideBarSmall from "../components/sideBarSmall";
import { LuGithub } from "react-icons/lu";
import Typewriter from 'typewriter-effect'
import port from '../assets/port.jpg'
import course from '../assets/course.jpg'
import ok from '../assets/ok.gif'
import { useState } from "react";
import Cplusimage from "../assets/icons8-c-48.png"
import Cimage from '../assets/c.png'
import Jimage from '../assets/js.png'
import hack from '../assets/hack.png'
import dep from '../assets/dep.png'
import hh from '../assets/HH.png'
import crz from '../assets/crz.jpg'
import pic from '../assets/pic.jpg'




import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
  } from "framer-motion";
const ROTATION_RANGE = 20.5;
const HALF_ROTATION_RANGE = 20.5 / 2;
function HomePage(){
    const [slidenum,setSlidenum]=useState({
        num:0,
    })
    const [slidenum2,setSlidenum2]=useState({
        num:0,
    })


    const navigate=useNavigate();

    const arrayOfProjects=[ <motion.div className=" mx-[10%] my-[50px] h-[650px] lg:h-[400px] lg:flex hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl" 
       
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5}}}
        >
        
            <img src={hh} className="w-full h-[50%] lg:h-full lg:w-[50%] rounded-l-3xl"></img>
        
            <div className="w-full h-[50%] lg:h-full lg:w-[50%] ">
            <h4 className="text-3xl lg:text-5xl text-extrabold text-white flex">
            <span className="text-yellow-500 m-[10px] mx-[30px]">HealthHuddle</span> 
            </h4>
            <div className="text-white text-xl m-[20px] mb-[0px] ">
            Health Huddle is an innovative platform designed specifically for hospital environments to foster better communication and support between doctors and patients. <span className="hidden lg:block">HealthHuddle is dedicated to improving the hospital experience by facilitating meaningful connections and support networks for both patients and healthcare providers.</span>
            </div>
            <button  className=" mx-[25%] w-[50%] lg:w-[50%] mt-6 lg:mt-5 bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300 text-black font-semibold hover:text-blue-950 rounded-lg py-3 text-lg cursor-pointer  mb-[50px] lg:mb-[0px] mr-[30px] lg:mr-[0px] hover:scale-105">
            <a href="https://github.com/prathamshetty-10/HealthHuddle" target="_blank" className="flex justify-center items-center gap-3 text-xl">
            <LuGithub size={32}/>
            <span className="font-bold text-2xl">Explore</span>
                    
             </a>       </button>
        
        </div>
        
        </motion.div>,

        <motion.div className=" mx-[10%] my-[50px] h-[650px] lg:h-[400px] lg:flex hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl" 
   
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1}}
        exit={{opacity:0,transition:{duration:0.5}}}
        >
        
            <img src={crz} className="w-full h-[50%] lg:h-full lg:w-[50%] rounded-l-3xl"></img>
        
            <div className="w-full h-[50%] lg:h-full lg:w-[50%] ">
            <h4 className="text-3xl lg:text-5xl text-extrabold text-white flex">
            <span className="text-yellow-500 m-[10px] mx-[30px]">CRZ </span> 
            </h4>
            <div className="text-white text-xl m-[20px] lg:mb-[0px] ">
            CRZ Web App is a digital solution developed to streamline the process of obtaining clearances for coastal land in the Udupi District. <span className="hidden lg:block"> This project was undertaken for the Udupi District Deputy Commissioner's Office with a primary focus on enhancing user experience and accessibility, particularly for the elderly population.</span>
            </div>
            <button  className=" mx-[25%] w-[50%] lg:w-[50%] mt-6 lg:mt-5 bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300 text-black font-semibold hover:text-blue-950 rounded-lg py-3 text-lg cursor-pointer  mb-[50px] lg:mb-[0px] mr-[30px] lg:mr-[0px] hover:scale-105">
            <a href="https://github.com/aaaaryaaa/crz-works" target="_blank" className="flex justify-center items-center gap-3 text-xl">
            <LuGithub size={32}/>
            <span className="font-bold text-2xl">Explore</span>
                    
             </a>       </button>
        
        </div>
        
        </motion.div>
    ]
    const arrayOfPosts=[
        <motion.div className="w-[93%] lg:w-[50%]  pt-[30px] lg:pt-[0px] mx-[12px] lg:mx-[30px] my-[50px] h-[650px] lg:h-[400px] lg:flex shadow-[0_0_10px_gray]  hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl group transition-all ease-in-out duration-500" 

            initial={{opacity:0,transition:{duration:0.5}}}
            animate={{opacity:1}}
            exit={{opacity:0,transition:{duration:0.5}}}
            >

            <img src={hh} className=" mx-[14px] lg:mx-[0px]  w-[90%] h-[50%] lg:h-full lg:w-[100%] rounded-3xl lg:group-hover:hidden transition-all ease-in-out duration-500 "></img>

            <div className="w-full h-[50%] lg:h-full lg:w-full hidden lg:group-hover:block transition-all ease-in-out duration-500">
            <h4 className="text-3xl lg:text-5xl text-extrabold text-white flex">
                <span className="text-yellow-500 m-[10px] mx-[30px]">HealthHuddle</span> 
                </h4>
                <div className="text-white text-xl m-[20px] mb-[5px] ">
                Date : 28th June 2024
                </div>
                <div className="text-white text-xl m-[20px] mb-[5px] ">
                Heyyyy!! Finally Developed HealthHuddle !!! Its pretty cool in my opinion :)) Please feel free to drop ur comments in the contact section.
                </div>
                

            </div>
            <div className="w-full h-[50%] lg:h-full lg:w-full  transition-all ease-in-out duration-500 lg:hidden">
            <h4 className="text-2xl lg:text-5xl text-extrabold text-white flex">
                <span className="text-yellow-500 m-[10px] mx-[30px]">HealthHuddle</span> 
                </h4>
                <div className="text-white text-xl m-[20px] mb-[5px] mt-[5px] lg:mt-[20px]">
                Date : 28th June 2024
                </div>
                <div className="text-white text-lg lg:text-xl m-[20px] mb-[5px] ">
                Heyyyy!! Finally Developed HealthHuddle !!! Its pretty cool in my opinion :)) Please feel free to drop ur comments in the contact section.
                </div>
                

            </div>

        </motion.div>
,<motion.div className="w-[93%] lg:w-[50%]  pt-[30px] lg:pt-[0px] mx-[12px] lg:mx-[30px] my-[50px] h-[650px] lg:h-[400px] lg:flex shadow-[0_0_10px_gray]  hover:shadow-[0_0_25px_gray] bg-zinc-900 rounded-3xl group transition-all ease-in-out duration-500" 

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
,
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
        
                </motion.div>,

                

    ]
    //array done

    const increaseSlide=()=>{
        if(slidenum.num + 1 >1){
            setSlidenum({
                num:0,
            })
        }
        else{
            const temp=slidenum.num +1;
            setSlidenum({
                num:temp,
            })
        }
    }
    const increaseSlide2=()=>{
        if(slidenum2.num + 1 >2){
            setSlidenum2({
                num:0,
            })
        }
        else{
            const temp=slidenum2.num +1;
            setSlidenum2({
                num:temp,
            })
        }
    }
    const decreaseSlide=()=>{
        if(slidenum.num - 1 <0){
            setSlidenum({
                num:1,
            })
        }
        else{
            const temp=slidenum.num -1;
            setSlidenum({
                num:temp,
            })
        }
    }
    const decreaseSlide2=()=>{
        if(slidenum2.num - 1 <0){
            setSlidenum2({
                num:1,
            })
        }
        else{
            const temp=slidenum2.num -1;
            setSlidenum2({
                num:temp,
            })
        }
    }
    return(
        
    <div className="flex m-0 p-0">
    
    <SideBar/>
    <SideBarSmall/>
    <motion.div className="w-[100vw] lg:w-[80vw] min-h-[100vh] bg-black lg:ml-[20vw]" >
        <motion.div className="my-[60px] ml-[40px] lg:ml-[90px]  mb-[50px] md:mb-[80px] lg:mt-[80px]"
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0,transition:{duration:0.5}}}>
            <div className="text-3xl lg:text-6xl text-extrabold text-white lg:flex">
            Hello Everyone,<div><div className=" flex mx-[5px]"> I'm  <div className="text-yellow-500 mx-[10px]">Pratham</div> <img src={ok} className="rounded-full p-[2px] ml-[30px] lg:mx-[0px]"/></div>
            </div></div>
        </motion.div>
        <motion.div className="px-[35px] pb-[30px]"
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}><h1 className="text-lg lg:text-2xl text-white ">
                Welcome to my digital canvas, where creativity meets innovation. Explore a world of design, code, and imagination, curated with passion and precision. From pixels to lines of code, join me on a journey through my portfolio, where every project tells a story of craftsmanship and dedication. Let's create together, let's make ideas come to life.
                </h1>
            </motion.div>
            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0,transition:{duration:0.5}}} className='mt-[20px] flex justify-center items-center mx-0'>
                    <p className="hidden lg:inline text-white font-bold mr-[30px] text-lg">------------------</p>
                    
                    
                    <p className='text-black font-semibold text-xl hover:text-black  hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer px-[20px] py-[10px] border-[1px] border-black rounded-3xl bg-gradient-to-r from-yellow-700 to bg-yellow-200 shadow-[0_0_10px_gray]' onClick={()=>navigate('/about',{state:{num:2}})}>Know More About Me</p>
                    <p className="hidden lg:inline text-white font-bold ml-[30px] text-lg">------------------</p>
                    </motion.div>
                    <motion.div className="my-[60px] ml-[30px] lg:ml-[70px]  mb-[50px] md:mb-[80px] lg:mt-[80px]"
                    initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1,transition:{duration:0.5}}}
                    exit={{opacity:0,transition:{duration:0.5}}}>
                        <div className="text-3xl lg:text-5xl text-extrabold text-white flex">
                        Recent  <div className="text-yellow-500 mx-[10px]">Projects</div> 
                        </div>
                    </motion.div>
                    {
                        arrayOfProjects[slidenum.num]
                    }
                    <motion.div className=" flex justify-center items-center transform -translate-y-1/2 gap-[70px]  "
                    initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1,transition:{duration:0.5}}}
                    exit={{opacity:0,transition:{duration:0.5}}}>
                        <p  onClick={decreaseSlide} className="btn btn-circle">❮</p> 
                        <p  onClick={increaseSlide} className="btn btn-circle">❯</p>
                    </motion.div>

                    <motion.div initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0,transition:{duration:0.5}}} className='mt-[30px] flex justify-center items-center mx-0 mb-[20px]'>
                    <p className="hidden lg:inline text-white font-bold mr-[30px] text-lg">------------------</p>
                    
                    
                    <p className='text-black font-semibold text-xl hover:black hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer px-[20px] py-[10px] border-[1px] border-black bg-gradient-to-r from-yellow-700 to bg-yellow-200 rounded-3xl  shadow-[0_0_10px_gray]' onClick={()=>navigate('/project',{state:{num:3}})}> View All Projects</p>
                    <p className="hidden lg:inline text-white font-bold ml-[30px] text-lg">------------------</p>
                    </motion.div>


                <motion.div className="my-[60px] ml-[30px] lg:ml-[70px]  mb-[50px] md:mb-[80px] lg:mt-[90px]"
                    initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1,transition:{duration:0.5}}}
                    exit={{opacity:0,transition:{duration:0.5}}}>
                        <div className="text-3xl lg:text-5xl text-extrabold text-white flex">
                        Tech  <div className="text-yellow-500 mx-[10px]">Arsenal</div> 
                        </div>
                </motion.div>
                <motion.div initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1,transition:{duration:0.5}}}
                    exit={{opacity:0,transition:{duration:0.5}}} >
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300  '>
                    <img src={Cplusimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            C++
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                            Where the '+' is for the programmer's caffeine intake needed to stay awake while debugging. My DSA buddy :)
                        </div>
            
                    </div>
            
                </div>
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 '>
                    <img src={Cimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            C
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        The language where I spend 90% of your time figuring out pointers and the other 10% wishing I was coding in Python.
                        </div>
            
                    </div>
            
                </div>
                
                
                
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 '>
                    <img src={Jimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            JavaScript
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        Where 'console.log()' is my loyal sidekick, tirelessly helping me debug code with its wisdom
                        </div>
            
                    </div>
            
                </div>
            
            
            </motion.div>

            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1,transition:{duration:0.5}}}
                    exit={{opacity:0,transition:{duration:0.5}}} className='mt-[60px] flex justify-center items-center mx-0 mb-[20px]'>
                    <p className="hidden lg:inline text-white font-bold mr-[30px] text-lg">------------------</p>
                    
                    
                    <p className='text-black font-semibold text-xl hover:black hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer px-[20px] py-[10px] border-[1px] border-black bg-gradient-to-r from-yellow-700 to bg-yellow-200 rounded-3xl  shadow-[0_0_10px_gray]' onClick={()=>navigate('/stack',{state:{num:4}})}> View The Whole Arsenal</p>
                    <p className="hidden lg:inline text-white font-bold ml-[30px] text-lg">------------------</p>
            </motion.div>

            <motion.div className="my-[60px] ml-[30px] lg:ml-[70px]  mb-[50px] md:mb-[50px] lg:mt-[90px]"
                    initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1,transition:{duration:0.5}}}
                    exit={{opacity:0,transition:{duration:0.5}}}>
                        <div className="text-3xl lg:text-5xl text-extrabold text-white flex">
                        Recent <div className="text-yellow-500 mx-[10px]">Posts</div> 
                        </div>
                </motion.div>
                
                <motion.div className=" hidden lg:flex justify-center items-center gap-[70px]  "
                initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1,transition:{duration:0.5}}}
                    exit={{opacity:0,transition:{duration:0.5}}}>
                    <p  onClick={decreaseSlide2} className="btn btn-circle">❮</p> 
                    {
                        arrayOfPosts[slidenum2.num]
                    }
                    <p  onClick={increaseSlide2} className="btn btn-circle">❯</p>
                </motion.div>
                <div className="lg:hidden">
                {
                    arrayOfPosts[slidenum2.num]
                }
                <motion.div className=" flex justify-center items-center transform -translate-y-1/2 gap-[70px]  "
                initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}>
                    <p  onClick={decreaseSlide2} className="btn btn-circle">❮</p> 
                    <p  onClick={increaseSlide2} className="btn btn-circle">❯</p>
                </motion.div>
                </div>
                <motion.div initial={{opacity:0,transition:{duration:0.5}}}
                    animate={{opacity:1,transition:{duration:0.5}}}
                    exit={{opacity:0,transition:{duration:0.5}}} className='mt-[40px] flex justify-center items-center mx-0 mb-[20px]'>
                    <p className="hidden lg:inline text-white font-bold mr-[30px] text-lg">------------------</p>
                    
                    
                    <p className='text-black font-semibold text-xl hover:black hover:scale-105 transition-all ease-in-out duration-500 cursor-pointer px-[20px] py-[10px] border-[1px] border-black bg-gradient-to-r from-yellow-700 to bg-yellow-200 rounded-3xl  shadow-[0_0_10px_gray]' onClick={()=>navigate('/post',{state:{num:6}})}> View All Posts</p>
                    <p className="hidden lg:inline text-white font-bold ml-[30px] text-lg">------------------</p>
            </motion.div>

            <motion.div className="my-[80px] ml-[10px] lg:ml-[90px]  mb-[50px] md:mb-[80px] lg:mt-[140px] flex items-center justify-center" onClick={()=>navigate('/contact',{state:{num:5}})}
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0,transition:{duration:0.5}}}>
            <h4 className="text-4xl lg:text-8xl text-extrabold text-white flex hover:scale-105 hover:cursor-pointer hover:text-yellow-300">
            <span className="text-yellow-500 mx-[10px] hover:text-yellow-300"> Connect With Me  </span> <span className="text-yellow-500 hover:text-tellow-300"><Typewriter options={{
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
            
            
                    
    </motion.div>
    </div>);
    
    

}
export default HomePage;