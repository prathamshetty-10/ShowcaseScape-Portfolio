
import Typewriter from 'typewriter-effect'
import SideBar from '../components/sideBar'
import SideBarSmall from '../components/sideBarSmall';
import {motion} from "framer-motion"
import Cplusimage from "../assets/icons8-c-48.png"
import Cimage from '../assets/c.png'
import Pimage from '../assets/py.png'
import Himage from '../assets/html.png'
import Csimage from '../assets/css.png'
import Jimage from '../assets/js.png'
import Rimage from '../assets/react.png'
import Nimage from '../assets/node.png'
import Eimage from '../assets/ex.png'
import Timage from '../assets/tail.png'
import Vimage from '../assets/vs.png'
import Gitimage from '../assets/git.png'
import GitHubimage from '../assets/github.png'
import Mongo from '../assets/mongo.png'
import sql from '../assets/sql.png'
function StackPage(){
    
    return(
        <div className='flex'>
        <SideBar />
        <SideBarSmall/>
        <div className='w-[100vw] lg:w-[80vw] lg:ml-[20vw] min-h-[100vh] bg-black overflow-auto '>
            <motion.div className="my-[60px] lg:mt-[80px] ml-[60px] lg:ml-[90px]  mb-[50px] md:mb-[80px]"
                initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}>
                <h4 className="text-3xl lg:text-6xl text-extrabold text-white flex">
                    My Tech <span className="text-yellow-500 px-[15px]"> Arsenal </span> <span className="text-yellow-500"><Typewriter options={{
                    autoStart:true,
                    loop:true,
                    delay:100,
                    strings:[
                        "!!!!"
                    ],
                 }}
                /></span>
                </h4>
            </motion.div>
            <motion.div className="px-[35px] pb-[30px]"
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}><h1 className="text-lg lg:text-2xl text-white ">
                Behold my tech Arsenal, each tool is a brushstroke in the masterpiece of innovation, crafting solutions that inspire. I harness the power of cutting-edge technologies to sculpt digital marvels
                </h1>
            </motion.div>
            <motion.div className="px-[35px] pb-[30px]"
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}
            ><h1 className="text-lg lg:text-2xl text-yellow-500 mt-[20px] ">
                {"<"}Languages{"/>"}
                </h1>
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
                    <img src={Pimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            Python
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        The language where my coding odyssey began, igniting a love affair with its simplicity and power.
                        </div>
            
                    </div>
            
                </div>
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 '>
                    <img src={Himage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            HTML
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                         The 'skeleton' of the internet, where {"<"}div{">"} is the duct tape and {"<"}br{">"} is the emergency exit for bad code
                        </div>
            
                    </div>
            
                </div>
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 '>
                    <img src={Csimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            CSS
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        Turning 'web pages' into 'web slayers' one {"<"}style{">"} at a time
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
            <motion.div className="px-[35px] pb-[30px]"
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}
            ><h1 className="text-lg lg:text-2xl text-yellow-500 mt-[80px] ">
                {"<"}Frameworks{"/>"}
                </h1>
            </motion.div>
            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}} >
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300  '>
                    <img src={Rimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            React
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        React is like the superhero of web development, swooping in to save the day whenever your UI needs rescuing .  
                        </div>
            
                    </div>
            
                </div>
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 '>
                    <img src={Nimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            Node.js
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        the caffeine-fueled marathon runner of the backend world.
                        </div>
            
                    </div>
            
                </div>
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300 '>
                    <img src={Eimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            Express
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        The laid-back surfer dude of backend frameworks. It's all about catching those HTTP waves and riding them with ease, man.
                        </div>
            
                    </div>
            
                </div>
                
            
            
            </motion.div>
            <motion.div className="px-[35px] pb-[30px]"
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}
            ><h1 className="text-lg lg:text-2xl text-yellow-500 mt-[80px] ">
                {"<"} CSS Framework{"/>"}
                </h1>
            </motion.div>
            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}} >
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300  '>
                    <img src={Timage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            Tailwind CSS
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        The buffet of styling options for the indecisive designer.  
                        </div>
            
                    </div>
            
                </div>
                
                
            
            
            </motion.div>
            <motion.div className="px-[35px] pb-[30px]"
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}
            ><h1 className="text-lg lg:text-2xl text-yellow-500 mt-[80px] ">
                {"<"} Developer Tools{"/>"}
                </h1>
            </motion.div>
            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}} >
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300  '>
                    <img src={Vimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            VS Code
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        My trusty sidekick, the Swiss Army knife of code editors.
                        </div>
            
                    </div>
            
                </div>
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300  '>
                    <img src={Gitimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            Git
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        The ultimate time-traveling cowboy of version control. 
                        </div>
            
                    </div>
            
                </div>
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300  '>
                    <img src={GitHubimage} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            GitHub
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        The digital scrapbook where I pin my prized creations. 
                        </div>
            
                    </div>
            
                </div>
                
                
            
            
            </motion.div>
            <motion.div className="px-[35px] pb-[30px]"
            initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}}
            ><h1 className="text-lg lg:text-2xl text-yellow-500 mt-[80px] ">
                {"<"} Databases{"/>"}
                </h1>
            </motion.div>
            <motion.div initial={{opacity:0,transition:{duration:0.5}}}
                animate={{opacity:1,transition:{duration:0.5}}}
                exit={{opacity:0,transition:{duration:0.5}}} >
                <div className='flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300  '>
                    <img src={Mongo} className='h-[55px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                        MongoDB
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        The free-spirited artist of databases.
                        </div>
            
                    </div>
            
                </div>
                <div className='mb-[120px] flex mx-[30px] my-[25px] bg-zinc-900 h-[90px] hover:shadow-[0_0_25px_gray] transition-all ease-in-out duration-300  '>
                    <img src={sql} className='h-[60px] m-[15px] mx-[30px]'/>
                    <div>
                        <div className='text-3xl lg:text-2xl text-white font-bold mx-[20px] mt-[20px] lg:mt-[10px]'>
                            MySQL
                        </div>
                        <div className='hidden lg:block lg:text-lg lg:text-white lg:mx-[20px] lg:mt-[5px]'>
                        Too many relationships !! Not enough joins.
                        </div>
            
                    </div>
            
                </div>
                
                
                
            
            
            </motion.div>


        </div>
        </div>
    
    )

}
export default StackPage;