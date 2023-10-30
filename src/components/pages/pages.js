import React from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/footer";
import Home from "./home/Home";

import PortefolioPage from "./portfolio-page/portfolio-page";

import Crea3 from "./design/crea3/crea3";
import Crea1 from "./design/crea1/crea1";
import Crea2 from "./design/crea2/crea2";






const Pages=()=> {

  

    return(

        <>
        <Router>
             <div  className="  h-full flex flex-col    font2">

             <Navbar/>
                <main className="  flex   flex-col justify-center items-center w-full    ">
                  <div className="    w-full h-full   ">
             <Routes>

                <Route path="/" element={<Home />} exact/>
            
                <Route path="/portfolio" element={<PortefolioPage />} exact/>
          
                <Route path="/portfolio/crea3" element={<Crea3/>} exact/>
                <Route path="/portfolio/crea1" element={<Crea1/>} exact/>
                <Route path="/portfolio/crea2" element={<Crea2/>} exact/>
           
               
             </Routes>
                  </div>
                </main>
             <Footer/>
             </div>

        </Router>
            


        </>
      
    )
}

export default Pages;