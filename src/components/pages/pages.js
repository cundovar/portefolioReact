import React from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/footer";
import Home from "./home/Home";



const Pages=()=> {

    return(

        <>
        <Router>
             <div  className="space-y-5">

             <Navbar/>
             <Routes>
                <Route path="/" element={<Home />}/>
               
             </Routes>
             <Footer/>
             </div>

        </Router>
            


        </>
      
    )
}

export default Pages;