
import React, { useEffect, useState } from "react";
import  gsap  from "gsap";
import Test from "./tests";
import { Flip } from "gsap/Flip";



const Crea5 = () => {
 
    useEffect(() => {

        gsap.registerPlugin(Flip);

        const box = document.querySelector(".bouge");
        const contain = document.querySelector(".contain");
        const newContain = document.querySelector(".recept");
    
        document.querySelector(".button").addEventListener("click", () => {
          const state = Flip.getState(box);
    
          // Utilisez "contains" pour vérifier si un élément est déjà un enfant du conteneur
          const currentContainer = box.parentNode;
          const targetContainer = currentContainer === contain ? newContain : contain;
    
          if (!targetContainer.contains(box)) {
            targetContainer.appendChild(box);
          }
    
          Flip.from(state, {
            duration: 1,
            ease: "power1.inOut", // Correction de la valeur ease
            scale: true,
          });
        });











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

        <div className="flipy h-96 w-full  ">
            <div className="flex flex-wrap w-full space-x-6">
                <div className=" fli h-32 w-32 bg-teal-600"></div>
                <div className=" fli h-32 w-32 bg-teal-200"></div>
                <div className=" fli h-32 w-32 bg-teal-900"></div>
                <div className=" fli h-32 w-32 bg-teal-300"></div>
                <div className=" fli h-32 w-32 bg-teal-400"></div>
            </div>
            <div className="but">
                <button>change</button>
            </div>

            <div>
      <div className="bouge">Bouge moi</div>
      <button className="button">Bouton</button>
      <div className="contain">
        
      </div>
      <div className="recept">Conteneur 2</div>
    </div>
             

        </div>
        

        <Test/>
        </>
      );
    };



  
 




export default Crea5;


