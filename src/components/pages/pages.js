import React from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/footer";
import Home from "./home/Home";
import Contact from "./contact/contact";
import PortefolioPage from "./portfolio-page/portfolio-page";
import Design from "./design/design";



const Pages=()=> {

    return(

        <>
        <Router>
             <div  className="space-y-5">

             <Navbar/>
             <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/portfolio" element={<PortefolioPage />}/>
                <Route path="/creation" element={<Design />}/>
               
             </Routes>
             <Footer/>
             </div>

        </Router>
            


        </>
      
    )
}

export default Pages;