import { Avatar, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const Menu = () => {
  const [isDivDown, setIsDivDown] = useState(false);

  const handleButtonClick = () => {
    if (isDivDown) {
      // Si la div est déjà en bas, remettez-la en haut
      gsap.to(".animating-div", {
        y: -50,
        duration: 0.7,
        ease: "power2.inOut",
        opacity:0,
        display:"none"
      });
    } else {
      // Sinon, faites-la descendre
      gsap.to(".animating-div", {
        y: 120,
        duration:0.7,
        ease: "power2.inOut",
        opacity:1,
        display:"block"
      });
    }

    // Inversez la valeur de isDivDown
    setIsDivDown(!isDivDown);
  };
  const fermeButtonClick=()=>{
   if(isDivDown){
    gsap.to(".animating-div", {
      y: 0,
      duration: 0.7,
      ease: "power2.inOut",
      opacity:0,
      display:"none"
    });

   }
  }

 
  return (
    <div className="navbar-menu w-full bg-stone-300 flex  items-start ">
      <div className="navbar-menu-2 flex  w-full ">
        <ul className=" menu w-full  justify-center flex ">
          <NavLink to="/" className=""
           onClick={fermeButtonClick}
          >
            <li className=" flex justify-center items-center ">
              <h5 className="move-line" >Accueil</h5>
            </li>
          </NavLink>


          <li className="  flex justify-center relative  items-center flex-col " >
              <div className="flex  dropdown relative  ">
                <button onClick={handleButtonClick} className="flex items-center justify-center" >
                  <h5 >
                    Portfolio
                  </h5>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ color: "#e2e5e9",marginLeft:"10px" }}
                  />
                </button>
              </div>
             
                <div className="menu animating-div opacity-0 max-sm:ml-10 flex absolute max-sm:z-50 xl:-top-14 max-sm:flex max-sm:flex-col max-sm:-top-36 z-50  max-sm:w-5/12  max-sm:mt-16 ">
                  <NavLink to="/portfolio">
                    <button  className=" ">
                    <h6  style={{marginBottom:"10px"}} className="move-line">Projets</h6>

                    </button>
                  </NavLink>

                  <NavLink to="/creation">
                    <button  className=" ">

                    <h6 className="move-line">Travaux</h6>
                    </button>
                  </NavLink>
                </div>
           
            </li>

          <NavLink to="/contact" className="" onClick={fermeButtonClick}>
            <li className=" flex justify-center items-center ">
              <h5 className="move-line" >Contact</h5>
            </li>
          </NavLink>
  
       
      
        </ul>

        <div className="button-circle"></div>
      </div>
    </div>
  );
};

export default Menu;
