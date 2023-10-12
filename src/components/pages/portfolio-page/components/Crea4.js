import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Crea4 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const triggerssRef = useRef(null);
  useEffect(()=>{
    const element = triggerssRef.current;
    gsap.to(element, {
      x: 700,
      scrollTrigger: {
        duration: 0.5,
        trigger: element, // L'élément qui déclenchera l'animation
  
        start:"top bottom",
     end:"top top",
        markers: true,
        scrub: true,
        triggerOnce: true,
      },
  })
  },[]);

  return (
    <div className="h-full ">
      <div className="bg-stone-500  h-96"></div>
      <div className="bg-stone-500  h-96"></div>
      <div className="bg-stone-500  h-96"></div>

      <div className=" scrolyl flex w-11/12 bg-yellow-300 h-96 relative ">
        <div className="bg-stone-500  h-96"></div>
      </div>
      <div className="bg-stone-500  h-96"></div>
      <div className="bg-stone-500  h-96"></div>
      <div className="bg-stone-500 flex h-96">
        <div className="self-end">
          <div className="h-24 w-24 bg-slate-950 absolute"ref={triggerssRef} ></div>
          <div className="h-24 w-24 triggerss bg-slate-300 "></div>
        </div>
      </div>
    </div>
  );
};

export default Crea4;
