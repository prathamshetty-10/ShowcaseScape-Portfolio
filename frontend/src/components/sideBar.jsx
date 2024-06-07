import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Typewriter from 'typewriter-effect'
import ProfileImage from "../assets/Pratham.jpg"
import { GoHome } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { BsTelephoneInbound } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
function SideBar(){
    const navigate=useNavigate();
    const {state}=useLocation();
    let temp=0;
    if(!state){
        temp=1;
    }
    return(
        <div className=' fixed top-0 left-0 hidden lg:block h-[100vh] w-[20vw] bg-black p-0 m-0 border-gray-800 border-r-[0.5px]'>
        <div className=' lg:block lg:w-[15vw] lg:h-[30vh] lg:mx-[30px] lg:mt-[30px] lg:mb-[10px] lg:mr-0 rounded-full'>
        <img src={ProfileImage} className='rounded-full border-white border-4 hover:border-0  transition-all ease-linear duration-300 delay-100 shadow-[0_0_20px_gray] ' />
        </div>
        
        <div className='w-[15vw] h-[35px] bg-yellow-500 mx-[30px] mb-[25px] flex items-center justify-center  rounded-xl font-mono font-extrabold	shadow-[0_0_10px_gray] hover:shadow-[0_0_20px_gray] text-black'>
        <Typewriter options={{
            autoStart:true,
            loop:true,
            delay:100,
            strings:[
                "Pratham Shetty",
                "Portfolio",
                ":)"
            ],
        }}
        />
        </div>
        <div className="mx-[30px] w-[15vw] min-h-[55vh]  bg-black text-base-content  ">
                    {(temp==1|| state.num==1)?(
                        <button onClick={()=>navigate('/',{state:{num:1}})} className=" flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-gray-900 text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900  ">
                    <GoHome />
                    Home
                    </button>

                    ):(
                        <button onClick={()=>navigate('/',{state:{num:1}})} className=" flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900  ">
                    <GoHome />
                    Home
                    </button>
                    )}
                    
                    {
                        (temp !=1 && state.num==2)?(
                            <button onClick={()=>navigate('/about',{state:{num:2}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-gray-900 text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <IoPersonOutline />
                    About me
                    </button>
                        ):(
                            <button onClick={()=>navigate('/about',{state:{num:2}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <IoPersonOutline />
                    About me
                    </button>
                        )
                    }
                    {
                        (temp !=1 && state.num==3)?(
                            <button onClick={()=>navigate('/project',{state:{num:3}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-gray-900 text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <GoProjectSymlink/>
                    Projects
                    </button>
                        ):(
                            <button onClick={()=>navigate('/project',{state:{num:3}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <GoProjectSymlink/>
                    Projects
                    </button>
                        )
                    }
                    {
                        ( temp!=1 && state.num==4)?(
                            <button onClick={()=>navigate('/stack',{state:{num:4}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-gray-900 text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <FaReact />
                    Stack
                    </button>
                        ):(
                            <button onClick={()=>navigate('/stack',{state:{num:4}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <FaReact/>
                    Stack
                    </button>
                        )
                    }
                    {
                        ( temp!=1 && state.num==6)?(
                            <button onClick={()=>navigate('/post',{state:{num:6}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-gray-900 text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <AiOutlinePicture />
                    Posts
                    </button>
                        ):(
                            <button onClick={()=>navigate('/post',{state:{num:6}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <AiOutlinePicture/>
                    Posts
                    </button>
                        )
                    }
                    {
                        (temp!=1 && state.num==5)?(
                            <button onClick={()=>navigate('/contact',{state:{num:5}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-gray-900 text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <BsTelephoneInbound />
                    Contact me
                    </button>
                        ):(
                            <button onClick={()=>navigate('/contact',{state:{num:5}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-md bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <BsTelephoneInbound />
                    Contact me
                    </button>
                        )
                    }
                    
                    <div className='flex gap-4 justify-center items-center mt-[35px] '>
                    <a href='https://github.com/prathamshetty-10' target="_blank"><LuGithub  size={30} className='text-white  font-semibold hover:text-yellow-500 hover:cursor-pointer'/></a>
                    <a href='https://www.linkedin.com/in/prathamshetty64546/' target="_blank"><CiLinkedin  size={30} className='text-white  font-semibold hover:text-yellow-500 hover:cursor-pointer'/></a>
                    <a href='https://www.instagram.com/pratham?igsh=bGF6ZnA2bXB3dTkw' target="_blank"><FaInstagram  size={30} className='text-white  font-semibold hover:text-yellow-500 hover:cursor-pointer'/></a>
                    <a href='mailto:prathamshetty484@gmail.com' target="_blank"><CiMail  size={30} className='text-white  font-semibold hover:text-yellow-500 hover:cursor-pointer'/></a>

                    </div>
                    
                   
                    

                
                </div>
                
        </div>
        
    
    )

}
export default SideBar;