import { Avatar, DropdownMenu, Flex, Text } from "@radix-ui/themes";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleButtonMenu=()=>{
    setOpen(false)
  }
  return (
    <div className="navbar-menu  flex flex-col items-start ">
      <div className="navbar-menu-2 flex  justify-end ">
        <ul className=" menu flex  items-start justify-end space-x-3">
          <NavLink to="/">
            <li>
              <h5 className="move-line" onClick={handleButtonMenu}>Accueil</h5>
            </li>
          </NavLink>

  
            <li >
              <div className="flex  dropdown relative  ">
                <button onClick={handleOpen} className="flex" style={{ marginRight: "0", paddingRight: "5px",marginTop:".7rem" }}>
                  <h5 >
                    Portfolio
                  </h5>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ color: "#e2e5e9", marginTop: ".4rem",marginLeft:"10px" }}
                  />
                </button>
              </div>
              {open ? (
                <div className="menu absolute  max-sm:-bottom-2 z-50 flex flex-col max-sm:w-5/12 rounded max-sm:px-0  ">
                  <NavLink to="/portfolio">
                    <button onClick={handleButtonMenu} className="max-sm:ml-3 ">
                    <h6  style={{marginBottom:"10px"}} className="move-line">Projets</h6>

                    </button>
                  </NavLink>

                  <NavLink to="/creation">
                    <button onClick={handleButtonMenu} className="max-sm:ml-2 ">

                    <h6 className="move-line">Gabarits</h6>
                    </button>
                  </NavLink>
                </div>
              ) : null}
            </li>
      
          <NavLink to="/contact">
            <li>
              <h5 className="move-line" onClick={handleButtonMenu}>Contact</h5>
            </li>
          </NavLink>
        </ul>

        <div className="button-circle"></div>
      </div>
    </div>
  );
};

export default Menu;
