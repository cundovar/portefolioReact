import React, { useEffect } from "react";
import { gsap,Sine } from "gsap"


const Savoir=()=>{

    useEffect(() => {
        const trigger = document.querySelectorAll(".mainBotao");
    
        const animateOver = function () {
          const text = this.querySelectorAll(".text");
          const image = this.querySelectorAll(".image");
          const element = this.querySelectorAll(".element");
          const imageBack = this.querySelectorAll(".imageBack");
    
          gsap.to(element, {
            duration: 1,
            scale: 1.5,
            x: 500,
          });
    
          gsap.to(text, {
            duration: 1,
            ease: Sine.easeOut,
            autoRound: false,
            x: 100,
            y: 40,
          });
    
          gsap.to(image, {
            duration: 1,
            opacity: 1,
            x: 0,
            y: 0,
          });
    
          gsap.to(imageBack, {
            duration: 1,
            opacity: 0,
          });
        };
    
        const animateOut = function () {
          const element = this.querySelector(".element");
          const text = this.querySelector(".text");
          const image = this.querySelector(".image");
          const imageBack = this.querySelector(".imageBack");
    
          gsap.to(element, {
            duration: 1,
            scale: 1.2,
            x: 0,
            y:0
          });
    
          gsap.to(text, {
            duration: 1,
            ease: Sine.easeOut,
            autoRound: false,
            x: -100,
            y: -100,
          });
    
          gsap.to(image, {
            duration: 1,
            opacity: 0,
            x:-10,
            y:-10,
          });
    
          gsap.to(imageBack, {
            duration: 1,
            opacity: 1,
          });
        };
    
        trigger.forEach((el) => {
          el.addEventListener("mouseover", animateOver, false);
          el.addEventListener("touchstart", animateOver, false);
          el.addEventListener("mouseout", animateOut, false);
          el.addEventListener("touchend", animateOut, false);
        });
    
        return () => {
          // Clean up event listeners when the component unmounts
          trigger.forEach((el) => {
            el.removeEventListener("mouseover", animateOver, false);
            el.removeEventListener("touchstart", animateOver, false);
            el.removeEventListener("mouseout", animateOut, false);
            el.removeEventListener("touchend", animateOut, false);
          });
        };
      }, []);
    


    return(

        <div className="text_competence flex items-center justify-center  w-1/3">

            <div className="  border  mainBotao rounded-3xl  w-full h-full overflow-hidden bg-yellow-300 ">

            <div className="image h-5/6 text-4xl text-justify border opacity-0 w-5/6 p-2  ">
                <p className="text-5xl text-center">
                Portfolio en ligne de Facundo Varas,
                </p>
                <p className="text-5xl text-center">
               artisant du web curieux et   passionné.
                </p>
          </div>


            <div className="imageBack h-1/6">

            <h5 className=" self-end text-6xl  ">Passion</h5>
            </div>

            </div>





{/*             
            <div className="2xl:w-2/3 xl:w-full">
            <p>Je suis <strong>intégrateur web/ dévéloppeur web front-end</strong> 

            </p>
            <p>
             Je travails essentiellement sur React et WordPress.

            </p> */}

            {/* </div> */}

        </div>
    )
}

export default Savoir