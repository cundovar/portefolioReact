import React, { useEffect, useState } from "react";
import { gsap,Sine } from "gsap"

import TextTransition from 'react-text-transition';










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
           
            opacity:1,
       
            x: 0,
            y: 0,
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
          const image = this.querySelectorAll(".image");
          const imageBack = this.querySelector(".imageBack");
    
          gsap.to(element, {
            duration: 1,
            scale: 1.2,
            x: 0,
            y:0
          });
    
          gsap.to(text, {
            duration: 1.5,
        
   
            x: 0,
            y: 0,
            opacity:0
          });
    
          gsap.to(image, {
            duration: 1,
            opacity: 0,
            x:0,
            y:0,
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
   
      const texts = [  ' Portfolio ','en ligne de', 'Facundo Varas'];
      const [index, setIndex] = useState(0);
    
      useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((index) => (index + 1) % texts.length);
        }, 2000);
    
        return () => clearInterval(intervalId);
      }, []);


    return(

        <div className="text_competence flex items-center justify-center  w-1/3">

            <div className="  border  mainBotao rounded-3xl   w-full h-full overflow-hidden   bg-pink-200  ">

            <div className=" h-5/6  w-full  p-2 border flex flex-col items-center justify-center ">
            

                <p className="text-5xl  image  text-justify border opacity-0"  style={{fontFamily: "Caveat, cursive"}} >
               Artisant du web. je suis curieux et  passionné. 
                </p>
          <div className=" ">
                <p className="text-5xl  text  text-justify border opacity-0"  style={{fontFamily: "Caveat, cursive"}} >
                  Un café et au boulot !
                </p>

              

          </div>
          </div>


            <div className="imageBack h-1/6 flex items-end">

            <h5 className=" text-6xl self-start " style={{fontFamily: "Caveat, cursive"}}>Passion</h5>
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