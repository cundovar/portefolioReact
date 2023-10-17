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
import Crea4 from "./portfolio-page/components/Crea4";

import { Element,scroller } from "react-scroll";



const Pages=()=> {

  

    return(

        <>
        <Router>
             <div  className="  h-full flex flex-col bg-red-300   font2">

             <Navbar/>
                <div className=" border border-orange-900 flex   flex-col justify-center items-center w-full    ">
                  <div className=" bg-stone-300 border border-red-900  w-full h-full   ">
             <Routes>

                <Route path="/" element={<Home />}/>
                <Route path="/contact" element={<Contact />}/>
                <Route path="/portfolio" element={<PortefolioPage />}/>
                <Route path="/creation" element={<Design />}/>
                <Route path="/creation3" element={<Crea3/>}/>
                <Route path="/creation1" element={<Crea1/>}/>
                <Route path="/creation2" element={<Crea2/>}/>
                <Route path="/crea4" element={<Crea4/>}/>
               
             </Routes>
                  </div>
                </div>
             {/* <Footer/> */}
             </div>

        </Router>
            


        </>
      
    )
}

export default Pages;