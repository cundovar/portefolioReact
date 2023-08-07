import React from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "../../../../hooks/typewriter";

const Titre = () => {

  
  return (
    <div className=" total-titre w-3/5 flex flex-col items-center justify-center">
      <div className="">
        <NavLink to="/">
          <h1>Développeur front-end</h1>
          <h3>Intégrateur web <Typewriter  text="Facundo Varas" delay={100}/>   </h3>
        </NavLink>
       
      </div>
    </div>
  );
};

export default Titre;
