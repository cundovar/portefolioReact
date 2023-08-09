import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar-menu  flex  items-start ">
      <div className="navbar-menu-2 flex items-end justify-end ">
        <ul className=" menu flex  items-start justify-end space-x-3">
          <NavLink to="/">

          <li>
            <h5 className="move-line">

            Accueil
            </h5>
          </li>
          </NavLink>
      
          <NavLink to="/portfolio">

          <li>
            <h5 className="move-line">

            Portfolio
            </h5>
          </li>
          </NavLink>
          <NavLink to="/contact">
            
            <li>
              <h5 className="move-line">

              Contact
              </h5>
              </li>
          </NavLink>
        </ul>

        <div className="button-circle"></div>
      </div>
    </div>
  );
};

export default Menu;
