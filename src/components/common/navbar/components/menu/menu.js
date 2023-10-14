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
        y: 0,
        duration: 1,
        ease: "power2.inOut",
      });
    } else {
      // Sinon, faites-la descendre
      gsap.to(".animating-div", {
        y: 100,
        duration: 1,
        ease: "power2.inOut",
      });
    }

    // Inversez la valeur de isDivDown
    setIsDivDown(!isDivDown);
  };

 
  return (
    <div className="navbar-menu w-full  flex  items-start ">
      <div className="navbar-menu-2 flex  w-full ">
        <ul className=" menu w-full border flex flex-wrap justify-center ">
          <NavLink to="/" className="w-1/2">
            <li className=" flex justify-center items-center border">
              <h5 className="move-line" >Accueil</h5>
            </li>
          </NavLink>

          <NavLink to="/contact" className="w-1/2">
            <li className=" flex justify-center items-center border">
              <h5 className="move-line" >Contact</h5>
            </li>
          </NavLink>
  
            <li className="w-full border flex justify-center items-center rounded-3xl bg-orange-300 p-4" >
              <div className="flex  dropdown relative  ">
                <button onClick={handleButtonClick} className="flex" style={{ marginRight: "0", paddingRight: "5px",marginTop:".7rem" }}>
                  <h5 >
                    Portfolio
                  </h5>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ color: "#e2e5e9", marginTop: ".4rem",marginLeft:"10px" }}
                  />
                </button>
              </div>
             
                <div className="menu animating-div   max-sm:-bottom-2 z-50 flex flex-col max-sm:w-5/12 rounded max-sm:px-0  ">
                  <NavLink to="/portfolio">
                    <button  className="max-sm:ml-3 ">
                    <h6  style={{marginBottom:"10px"}} className="move-line">Projets</h6>

                    </button>
                  </NavLink>

                  <NavLink to="/creation">
                    <button  className="max-sm:ml-2 ">

                    <h6 className="move-line">Gabarits</h6>
                    </button>
                  </NavLink>
                </div>
           
            </li>
      
        </ul>

        <div className="button-circle"></div>
      </div>
    </div>
  );
};

export default Menu;
