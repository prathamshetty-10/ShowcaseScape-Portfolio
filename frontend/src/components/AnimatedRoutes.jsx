import React from "react";
import {Route, Routes } from "react-router-dom";
import StackPage from '../Pages/StackPage'
import Project from "../Pages/ProjectPage";
import SideBar from '../components/sideBar'
import NotFound from '../Pages/NotFound'
import HomePage from '../Pages/HomePage'
import Contact from '../Pages/ContactPage'
import About from "../Pages/AboutPage";
import Post from '../Pages/PostsPage'
import { useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion' // if not working 'framer-motion/dist/framer-motion''
function AnimatedRoutes(){
    const location=useLocation();
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/stack" element={<StackPage/>}></Route>
      <Route path="/project" element={<Project/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/post" element={<Post/>}></Route>

      

      

      


      <Route path="*" element ={<NotFound/>}></Route>
      </Routes>
      </AnimatePresence>
    )
}
export default AnimatedRoutes