
import SideBar from "../components/sideBar";
import toast from "react-hot-toast";
import SideBarSmall from "../components/sideBarSmall";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Typewriter from 'typewriter-effect'
import { LuGithub } from "react-icons/lu";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import {motion} from 'framer-motion'
function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ktcjrcj', 'template_qb3lnrz', form.current, {
        publicKey: 'xwMtsCZjMyDk1ah3Q',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast('Messsage Sent Successfully !! ')
          
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
   return(
    
    <div className="flex m-0 p-0">
    
    <SideBar/>
    <SideBarSmall/>
    <div className="w-[100vw] lg:w-[80vw] min-h-[100vh] bg-black lg:ml-[20vw]">
        <motion.div className="my-[60px] lg:mt-[80px] ml-[40px] lg:ml-[90px]  mb-[50px] md:mb-[80px]"
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0,transition:{duration:0.5}}}>
            <h4 className="text-3xl lg:text-6xl text-extrabold text-white flex">
            Start a <span className="text-yellow-500 mx-[10px]"> Conversation </span> <span className="text-yellow-500"><Typewriter options={{
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
        <motion.div className="md:flex"
        initial={{opacity:0,transition:{duration:0.5}}}
        animate={{opacity:1,transition:{duration:0.5}}}
        exit={{opacity:0,transition:{duration:0.5}}}>
        <div className="w-[100%] md:w-[50%]  border-gray-800 border-r-[0.5px] mx-[5px]">
        <div className="px-[25px] pb-[30px]"><h1 className="text-xl lg:text-2xl text-white ">
        Hello !! Let's connect and create something wonderful together! Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you. Drop me a line and let's start a conversation!
        </h1></div>
        <div>
        <h1 className="text-xl lg:text-3xl text-bold text-white mb-[30px] ml-[30px] ">Lets <span className="text-yellow-500 text-xl lg:text-3xl text-bold ">Connect..</span>
        </h1>
        <div >
            <div className="lg:flex mb-[15px]">
            <a href='https://github.com/prathamshetty-10' target="_blank" className=" flex gap-3 justify-center items-center w-[90%] lg:w-full mb-[15px] lg:mb-[10px] text-white  my-[8px] h-[60px] border hover:border hover:border-yellow-500 border-black rounded-md bg-black   m-1 hover:text-yellow-500   transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900  mx-[18px] text-xl md:text-2xl shadow-[0_0_10px_gray] ">
                    <LuGithub size={32}/>
                    Github
                    </a>
            <a  href='https://www.linkedin.com/in/prathamshetty64546/' target="_blank" className=" flex gap-3 justify-center items-center w-[90%] lg:w-full mb-[15px] lg:mb-[10px] text-white  my-[8px] h-[60px] border hover:border hover:border-yellow-500 border-black rounded-md bg-black   m-1 hover:text-yellow-500   transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900  mx-[18px] text-xl md:text-2xl shadow-[0_0_10px_gray] ">
                    <CiLinkedin size={32}/>
                    Linkedin
                    </a>
            </div>
            <div className="lg:flex mb-[25px] border-gray-800 border-b-[0.5px] md:border-0 pb-[20px]">
            <a href="https://www.instagram.com/pratham?igsh=bGF6ZnA2bXB3dTkw" target="_blank" className=" flex gap-3 justify-center items-center w-[90%] lg:w-full mb-[15px] lg:mb-[10px] text-white  my-[8px] h-[60px] border hover:border hover:border-yellow-500 border-black rounded-md bg-black   m-1 hover:text-yellow-500   transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900  mx-[18px] text-xl md:text-2xl shadow-[0_0_10px_gray] ">
                    <FaInstagram size={32}/>
                    Instagram
                    </a>
            <a href="mailto:prathamshetty484@gmail.com" target="_blank" className=" flex gap-3 justify-center items-center w-[90%] lg:w-full mb-[10px] text-white  my-[8px] h-[60px] border hover:border hover:border-yellow-500 border-black rounded-md bg-black   m-1 hover:text-yellow-500   transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900  mx-[18px] text-xl md:text-2xl shadow-[0_0_10px_gray] ">
                    <CiMail size={32}/>
                    Email
                    </a>
            </div>

        </div>
        </div>

        </div>
        <div className="ml-[30px]">
        <h1 className="text-xl lg:text-3xl text-bold text-white mb-[30px]  ">Send a <span className="text-yellow-500 text-xl lg:text-3xl text-bold ">Message..</span>
        </h1>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col">
        <div className="lg:flex ">
      <div className="text-xl md:text-3xl text-bold text-white mb-[10px] lg:mb-[30px] w-[300px] lg:w-[120px] ">Name</div>
      <input type="text" name="user_name" className="w-[90%] lg:w-[400px] lg:ml-[10px] h-[40px] pl-[10px]" placeholder="Enter Your Name" /></div>
      <div className="lg:flex">
      <div className="text-xl lg:text-3xl text-bold text-white mb-[10px] lg:mb-[30px] w-[120px] mt-[5px] lg:mt-[0px] " >Email</div>
      <input type="email" name="user_email" className="w-[90%] lg:w-[400px] lg:ml-[10px] h-[40px] pl-[10px]" placeholder="Enter your email"/></div>
      <div className="md:flex">
      <div className="text-xl lg:text-3xl text-bold text-white mb-[10px] lg:mb-[30px] w-[120px] mt-[5px] lg:mt-[0px]" >Message</div>
      <textarea name="message" className="w-[90%] lg:w-[400px] lg:ml-[10px] h-[120px] pl-[10px]" placeholder="Enter your message :)"/></div>
      <div className="flex justify-center items-center">
      <button type="submit" value='Send' className=" w-[70%] lg:w-full mt-6 lg:mt-8 bg-yellow-600 hover:bg-yellow-400 transition-all ease-in-out duration-300 text-black font-semibold hover:text-blue-950 rounded-lg py-3 text-lg cursor-pointer  mb-[50px] lg:mg-[0px] mr-[30px] lg:mr-[0px]">
                    Send Message
                    
                    </button></div>
        </form>
        </div>
    </motion.div>
    </div>
    </div>);

    
    
}


export default Contact;