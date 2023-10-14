
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import Test from "./tests";



const Crea5 = () => {
 
    useEffect(() => {
        // Créez une animation GSAP pour l'effet d'overscroll vertical
        const triggerElement = document.querySelector('.js-scroll-list');
        const contentElement = document.querySelector('.js-scroll-content');
    
        // Écoutez le défilement
        triggerElement.addEventListener('scroll', () => {
          // Obtenez la position de défilement verticale
          const scrollTop = triggerElement.scrollTop;
    
          // Si le défilement atteint le haut de la liste, activez l'animation
          if (scrollTop === 0) {
            // Créez une animation GSAP ici
            gsap.to(contentElement, {
              y: -10, // Ajustez la valeur de déplacement vertical
              ease: 'none',
              rotationX:360,
              duration:3

            });
          }
        });
      }, []);
    
      return (

        <>
        
        
        <div className="wrapper mb-96">
          <div className="scroll-list js-scroll-list h-72  overflow-scroll ">

            <div className="scroll-list__wrp js-scroll-content h-72 overflow-hidden">
              <div className="h-96 w-96 border bg-purple-600 text-7xl">Javascript</div>
            </div>
            <div className="scroll-list__wrp js-scroll-content h-72 overflow-hidden">
              <div className="h-96 w-96 border bg-purple-500 text-7xl">taiwlind</div>
            </div>
            <div className="scroll-list__wrp js-scroll-content h-72 overflow-hidden">
              <div className="h-96 w-96 border bg-purple-300 text-7xl">react</div>
            </div>
            <div className="scroll-list__wrp js-scroll-content h-72 overflow-hidden">
              <div className="h-96 w-96 border bg-purple-900 text-7xl">truc</div>
            </div>
          </div>
             
        </div>

        <Test/>
        </>
      );
    };



  
 




export default Crea5;


