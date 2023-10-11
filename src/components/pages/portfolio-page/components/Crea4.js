import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Crea4=()=>{
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".triggerss", {
      x: 500,
      scrollTrigger: {
        duration: 0.5,
        trigger: ".scrolyl", // L'élément qui déclenchera l'animation
       end:"center center",
        start: "bottom bottom",
      
      },
    });


    return(
< div className="h-full ">

<div className="bg-stone-500  h-96" ></div>
<div className="bg-stone-500  h-96" ></div>
<div className="bg-stone-500  h-96" ></div>

<div className=" scrolyl flex w-11/12 bg-yellow-300 h-96 relative ">
 <div className="self-end">

    <div className="h-24 w-24 bg-slate-950 absolute"></div>
    <div className="h-24 w-24 triggress bg-slate-300 "></div>
 </div>


</div>
<div className="bg-stone-500  h-full" ></div>
</div>

    )
}


export default Crea4