import React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useEffect } from "react";

const Tekno = () => {

  
        const divRef = useRef(null);
      
        useEffect(() => {
          const container = divRef.current;
          const trigger=document.querySelectorAll('.technologie')
          // Fonction pour gérer l'effet de défilement
          const handleScroll = () => {
            const scrollPosition = container.scrollTop;
            const textElements = container.querySelectorAll(".titre_scroll");
      
            // Ajustez ces valeurs selon vos besoins
            const maxScroll = container.scrollHeight - container.clientHeight;
            const maxSize = 3; // Taille maximale du texte
            const maxOpacity = 1; // Opacité maximale
      
            textElements.forEach((text) => {
              const offset = text.offsetTop - scrollPosition;
              const scale = 1 + (maxSize - 1) * (1 - offset / maxScroll);
              const opacity = maxOpacity * (1 - offset / maxScroll);
      
              gsap.to(text, {
                duration: 0.5,
                scale,
                opacity,
              });
            });
             
        };
        const animateOver=function(){
            const tekno =this.querySelectorAll('.tekno')
            const scrolly =this.querySelectorAll('.scrolly')
            gsap.to(tekno,{
                duration:1,
                opacity:0,
                display:'none'
            })
            gsap.to(scrolly,{
                duration:1,
                opacity:1
            })
        }

        const animateOut=function(){

            const tekno =this.querySelectorAll('.tekno')
            const scrolly =this.querySelectorAll('.scrolly')
            gsap.to(tekno,{
                duration:1,
                opacity:1,
                display:"block"
            })
            gsap.to(scrolly,{
                duration:1,
                opacity:0
            })

        }
          trigger.forEach((el) => {
            el.addEventListener("mouseover", animateOver, false);
            el.addEventListener("touchstart", animateOver, false);
            el.addEventListener("mouseout", animateOut, false);
            el.addEventListener("touchend", animateOut, false);
          });
      
          container.addEventListener("scroll", handleScroll);
      
          return () => {
            container.removeEventListener("scroll", handleScroll);
            trigger.forEach((el) => {
                el.removeEventListener("mouseover", animateOver, false);
                el.removeEventListener("touchstart", animateOver, false);
                el.removeEventListener("mouseout", animateOut, false);
                el.removeEventListener("touchend", animateOut, false);
            });
          };
        }, []);



  return (
    <div className="text_competence technologie w-1/3 relative ">
      <div className=" flex flex-col h-full bg-sky-700 rounded-3xl ">
        <div className="h-96 w-full scrolly  overflow-auto custom-scrollbar opacity-0 " ref={divRef}>
          <div className="h-1/2 flex items-center justify-center titre_scroll text-4xl">dd</div>
          <div className="h-1/2 flex items-center justify-center titre_scroll text-4xl">dd</div>
          <div className="h-1/2 flex items-center justify-center titre_scroll text-4xl">dd</div>
          <div className="h-1/2 flex items-center justify-center titre_scroll text-4xl">dd</div>
          <div className="h-1/2 flex items-center justify-center titre_scroll text-4xl">dd</div>
          <div className="h-1/2 flex items-center justify-center titre_scroll text-4xl">dd</div>
        </div>
         <div className="h-1/6 absolute bottom-0 left-0">

        <h5 className=" tekno text-6xl  ">tekno</h5>
         </div>
      </div>
      {/* 
             <div className="2xl:w-2/3 xl:w-full">

            <p>Les technos que j'utilise la plupart du temps sont : 
            </p>
            <ul>
                <li>Javascript</li>
                <li>taiwlind</li>
                <li>php</li>
                <li>twig</li>
            </ul>

             </div> */}
    </div>
  );
};

export default Tekno;
