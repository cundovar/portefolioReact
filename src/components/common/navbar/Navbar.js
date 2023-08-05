import React from "react";
import Menu from "./components/menu/menu";
import Titre from "./components/tritre/titre";



const Navbar=()=>{

    return(
        <div className="navbar flex">

            <div className=" navbar-contain flex w-5/6 justify-between  ">

            <Titre/>
            <Menu/>

            </div>


        </div>

        
    )
}

export default Navbar;