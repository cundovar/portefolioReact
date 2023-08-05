import React from "react";
import { NavLink } from "react-router-dom";

const Titre = () => {
  return (
    <div className=" total-titre w-3/5 flex flex-col items-center justify-center">
      <div>
        <NavLink to="/">
          <h1>Développeur front-end</h1>
          <h3>Intégrateur web</h3>
        </NavLink>
      </div>
    </div>
  );
};

export default Titre;
