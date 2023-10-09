import React from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/footer";
import Home from "./home/Home";
import Contact from "./contact/contact";
import PortefolioPage from "./portfolio-page/portfolio-page";
import Design from "./design/design";
import Crea3 from "./design/crea3/crea3";
import Crea1 from "./design/crea1/crea1";
import Crea2 from "./design/crea2/crea2";



const Pages=()=> {

    return(

        <>
        <Router>
             <div  className="space-y-5 h-full flex flex-col   font2">

             <Navbar/>
                <div className="interieur flex flex-col justify-center ">
             <Routes>

                <Route path="/" element={<Home />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/portfolio" element={<PortefolioPage />}/>
                <Route path="/creation" element={<Design />}/>
                <Route path="/creation3" element={<Crea3/>}/>
                <Route path="/creation1" element={<Crea1/>}/>
                <Route path="/creation2" element={<Crea2/>}/>
               
             </Routes>
                </div>
             <Footer/>
             </div>

        </Router>
            


        </>
      
    )
}

export default Pages;