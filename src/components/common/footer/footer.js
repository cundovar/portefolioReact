import React from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
const Footer = () => {


  const containerRef = useRef(null);

  useEffect(() => {
  //   const container = document.querySelectorAll('.tourne');

    // Créez une animation GSAP pour faire tourner le conteneur
  //   gsap.to(container, {
  //     rotation: 360, // Rotation de 360 degrés (un cercle complet)
  //     duration: 10, // Durée de l'animation (en secondes)
  //     repeat: -1, // Répétez indéfiniment
  //    ease:"none"
  //   });

  const text=document.querySelector
  }, []);


  return (
    <div className=" border footerr absolute flex  max-sm:justify-center max-sm:items-center  max-sm:flex-col-reverse  w-full ">
   
   <div className=" w-1/2 border max-sm:w-full  max-sm:justify-center max-sm:items-center  flex justify-start items-end">

        <div className="  m-10 ml-20 flex max-sm:w-full max-sm:items-center  border  justify-center  ">


<h6 className="max-sm:w-full m-auto">COPYRIGHT 2023</h6>

        </div>
   </div>

    
        <div className=" w-1/2  max-sm:w-full flex items-center border">
          <ul className=" flex space-x-3 m-auto ">

            <NavLink to="/">
              <li className="move-line">accueil</li>
            </NavLink>
            <NavLink to="/portfolio">
              <li className="move-line">Portfolio</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="move-line">contact</li>
            </NavLink>

          </ul>
        </div>
      </div>
     
      
    
  );
};

export default Footer;
