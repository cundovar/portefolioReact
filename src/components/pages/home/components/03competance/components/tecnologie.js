import React from "react";
import UseFetch from "../../../../../hooks/useFetch";
import { gsap } from "gsap";

import { useEffect, useRef } from 'react';

const Tecnologie =()=>{
    const containerRef = useRef(null);

    useEffect(() => {
      const container = containerRef.current;
  
      // Créez une animation GSAP pour faire tourner le conteneur
      gsap.to(container, {
        rotation: 360, // Rotation de 360 degrés (un cercle complet)
        duration: 5, // Durée de l'animation (en secondes)
        repeat: -1, // Répétez indéfiniment
        ease: 'linear', // Accélération linéaire
      });
    }, []);
  
    return (
      <>
        
      <div className=" btn m-10 p-10">
        <div  className="text-circle-container border  h-64 w-64 ">
        <h1><span style={{'--i': 1}}>c</span></h1>
        <h1><span style={{'--i': 2}}>0</span></h1>
        <h1><span style={{'--i': 3}}>p</span></h1>
        <h1><span style={{'--i': 4}}>i</span></h1>
        <h1><span style={{'--i': 5}}>r</span></h1>
        <h1><span style={{'--i': 6}}>i</span></h1>
        <h1><span style={{'--i': 7}}>g</span></h1>
        <h1><span style={{'--i': 8}}>h</span></h1>
        <h1><span style={{'--i': 9}}>t</span></h1>
        <h1><span style={{'--i': 10}}>2</span></h1>
        <h1><span style={{'--i': 11}}>0</span></h1>
        <h1><span style={{'--i': 12}}>2</span></h1>
        <h1><span style={{'--i': 13}}>3</span></h1>
        </div>
      </div>

      </>
    );
  };
 




export default Tecnologie