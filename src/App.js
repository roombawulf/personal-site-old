import Navbar from "./Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";


import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Experience from "./canvas/Experience";


export default function App(){
    const location = useLocation()
    return (
        <>
            <Experience />
            <Navbar />
            <AnimatePresence mode='wait'>
                <Routes key={location.pathname} location={location}>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/contact' element={<Contact />}/>
                </Routes>
            </AnimatePresence>
        </>
    )
}