import {FiMenu} from "react-icons/fi"
import {AiFillCloseCircle} from "react-icons/ai"
import {Link, useNavigate} from "react-router-dom"
import ProfileImage from "../assets/Pratham.jpg"
import Typewriter from 'typewriter-effect'
import { GoHome } from "react-icons/go";
import { IoPersonOutline } from "react-icons/io5";
import { GoProjectSymlink } from "react-icons/go";
import { FaReact } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { BsTelephoneInbound } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useLocation } from "react-router-dom"
import { AiOutlinePicture } from "react-icons/ai";
function SideBarSmall(){
    const navigate=useNavigate();
    function changeWidth(){
        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width="auto";
    }
    function hideDrawer(){
        const element=document.getElementsByClassName("drawer-toggle");
        element[0].checked=false;
        const drawerSide=document.getElementsByClassName("drawer-side");
        drawerSide[0].style.width=0;   
    }
    
    const {state}=useLocation();
    let temp=0;
    if(!state){
        temp=1;
    }
    return(
        <>
        
            <div className="lg:hidden drawer absolute left-0 z-50 w-fit ">
                <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
                <div className="drawer-content">
                    <label htmlFor="my-drawer" className="cursor-pointer relative ">
                       <FiMenu size={"32px"} className="font-bold text-white m-4"
                       onClick={changeWidth}/> 
                    
                    </label>
                </div>
                <div className="drawer-side w-0 bg-black">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className=" p-4 w-[260px] min-h-[100%] sm:w-[270px] bg-zinc-900 bg-opacity-90 text-base-content pt-[40px] ">
                    <div className="w-fit absolute right-1  top-4 z-50 text-white ">
                        <button onClick={hideDrawer}>
                            <AiFillCloseCircle size={36}/>
                        </button>
                    </div>
                    
                    <div className='w-[200px] mx-[13px] pt-[5px] mb-[20px]  my-0 '>
                        <img src={ProfileImage} className='rounded-full border-white border-4 hover:border-0  transition-all ease-linear duration-300 delay-100 shadow-[0_0_20px_gray] ' />
                    </div>
        
                    <div className=' text-black w-[180px] h-[35px] bg-yellow-500 mx-[20px] mb-[3vh] flex items-center justify-center  rounded-xl font-mono font-extrabold	shadow-[0_0_10px_gray] hover:shadow-[0_0_20px_gray]'>
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
                    <div className=" flex flex-col gap-[0.5px] mx-[15px] w-[200px] min-h-[45vh]  text-base-content  ">
                    
                    {(temp==1|| state.num==1)?(
                        <button onClick={()=>navigate('/',{state:{num:1}})} className=" flex gap-3 justify-center items-center w-full mb-[10px] my-[8px] h-[6vh] border  border-yellow-500   bg-gray-900 text-lg  m-1 text-yellow-500  transition-all ease-in-out duration-300 delay-100 rounded-3xl  shadow-[0_0_5px_gray] ">
                    <GoHome />
                    Home
                    </button>

                    ):(
                        <button onClick={()=>navigate('/',{state:{num:1}})} className=" flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black  bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 rounded-3xl  shadow-[0_0_5px_gray] ">
                    <GoHome />
                    Home
                    </button>
                    )}
                    
                    {
                        (temp !=1 && state.num==2)?(
                            <button onClick={()=>navigate('/about',{state:{num:2}})} className="flex gap-3 justify-center items-center w-full mb-[10px] my-[8px] h-[6vh] border  border-yellow-500   bg-gray-900 text-lg  m-1 text-yellow-500  transition-all ease-in-out duration-300 delay-100 rounded-3xl  shadow-[0_0_5px_gray]   ">
                    <IoPersonOutline />
                    About me
                    </button>
                        ):(
                            <button onClick={()=>navigate('/about',{state:{num:2}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-3xl  shadow-[0_0_5px_gray]  bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <IoPersonOutline />
                    About me
                    </button>
                        )
                    }
                    {
                        (temp !=1 && state.num==3)?(
                            <button onClick={()=>navigate('/project',{state:{num:3}})} className="flex gap-3 justify-center items-center w-full mb-[10px] my-[8px] h-[6vh] border  border-yellow-500  rounded-3xl  shadow-[0_0_5px_gray]  bg-gray-900 text-lg  m-1 text-yellow-500  transition-all ease-in-out duration-300 delay-100  ">
                    <GoProjectSymlink/>
                    Projects
                    </button>
                        ):(
                            <button onClick={()=>navigate('/project',{state:{num:3}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-3xl  shadow-[0_0_5px_gray]  bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <GoProjectSymlink/>
                    Projects
                    </button>
                        )
                    }
                    {
                        ( temp!=1 && state.num==4)?(
                            <button onClick={()=>navigate('/stack',{state:{num:4}})} className="flex gap-3 justify-center items-center w-full mb-[10px] my-[8px] h-[6vh] border  border-yellow-500  rounded-3xl  shadow-[0_0_5px_gray]  bg-gray-900 text-lg  m-1 text-yellow-500  transition-all ease-in-out duration-300 delay-100  ">
                    <FaReact />
                    Stack
                    </button>
                        ):(
                            <button onClick={()=>navigate('/stack',{state:{num:4}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-3xl  shadow-[0_0_5px_gray]  bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <FaReact/>
                    Stack
                    </button>
                        )
                    }
                    {
                        ( temp!=1 && state.num==6)?(
                            <button onClick={()=>navigate('/post',{state:{num:6}})} className="flex gap-3 justify-center items-center w-full mb-[10px] my-[8px] h-[6vh] border  border-yellow-500  rounded-3xl  shadow-[0_0_5px_gray]  bg-gray-900 text-lg  m-1 text-yellow-500  transition-all ease-in-out duration-300 delay-100  ">
                    <AiOutlinePicture />
                    Posts
                    </button>
                        ):(
                            <button onClick={()=>navigate('/post',{state:{num:6}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-3xl  shadow-[0_0_5px_gray]  bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <AiOutlinePicture/>
                    Posts
                    </button>
                        )
                    }
                    {
                        (temp!=1 && state.num==5)?(
                            <button onClick={()=>navigate('/contact',{state:{num:5}})} className="flex gap-3 justify-center items-center w-full mb-[10px] my-[8px] h-[6vh] border  border-yellow-500  rounded-3xl  shadow-[0_0_5px_gray]  bg-gray-900 text-lg  m-1 text-yellow-500  transition-all ease-in-out duration-300 delay-100  ">
                    <BsTelephoneInbound />
                    Contact me
                    </button>
                        ):(
                            <button onClick={()=>navigate('/contact',{state:{num:5}})} className="flex gap-3 justify-center items-center w-full mb-[10px] text-white  my-[8px] h-[6vh] border hover:border hover:border-yellow-500 border-black rounded-3xl  shadow-[0_0_5px_gray]  bg-black text-lg  m-1 hover:text-yellow-500  hover:border-yellow transition-all ease-in-out duration-300 delay-100 focus:bg-gray-900 ">
                    <BsTelephoneInbound />
                    Contact me
                    </button>
                        )
                    }
                      
                    
                   
                    

                
                </div>
                    
                   
                    

                
                </div>
                
                </div>
            </div>
            
        
        
        
        </>
    )

}
export default SideBarSmall