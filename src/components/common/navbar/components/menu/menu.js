import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="navbar-menu  flex  items-start ">
      <div className="navbar-menu-2 flex items-end justify-end backdrop-blur-sm backdrop-blur-sm bg-white/10 ">
        <ul className=" menu flex  items-start justify-end">
          <NavLink to="/">

          <li>
            Accueil
          </li>
          </NavLink>
          <li>
          compétences
          </li>
          <li>
            Portfolio
          </li>
          <NavLink to="/contact">
            <li>Contact</li>
          </NavLink>
        </ul>

        <div className="button-circle"></div>
      </div>
    </div>
  );
};

export default Menu;
