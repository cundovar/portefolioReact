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
  return (
    <div className="navbar-menu  flex  items-start ">
      <div className="navbar-menu-2 flex  justify-end ">
        <ul className=" menu flex  items-start justify-end space-x-3">
          <NavLink to="/">
            <li>
              <h5 className="move-line">Accueil</h5>
            </li>
          </NavLink>

          <NavLink to="/portfolio " className="relative">
            <li >
              <div className="flex dropdown  ">
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
                <div className="menu absolute ">
                  <NavLink to="/portfolio">
                    <h6 onClick={} style={{marginBottom:"10px"}}>Projets</h6>
                  </NavLink>

                  <NavLink to="/creation">
                    <h6>Gabarits</h6>
                  </NavLink>
                </div>
              ) : null}
            </li>
          </NavLink>
          <NavLink to="/contact">
            <li>
              <h5 className="move-line">Contact</h5>
            </li>
          </NavLink>
        </ul>

        <div className="button-circle"></div>
      </div>
    </div>
  );
};

export default Menu;
