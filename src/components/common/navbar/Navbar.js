import React from "react";
import Menu from "./components/menu/menu";
import Titre from "./components/tritre/titre";



const Navbar=()=>{

    return(
        <div className="navbar flex items-center justify-center  ">

            <div className=" navbar-contain flex w-full justify-between pb-10 pt-5   " >
                {/*  id="sticky-parallax-header" */}

            <Titre/>
            <Menu/>

            </div>


        </div>

        
    )
}

export default Navbar;