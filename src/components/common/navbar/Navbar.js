import React from "react";
import Menu from "./components/menu/menu";
import Titre from "./components/tritre/titre";



const Navbar=()=>{

    return(
        <div className="navbar flex">
            <Titre/>
            <Menu/>


        </div>

        
    )
}

export default Navbar;