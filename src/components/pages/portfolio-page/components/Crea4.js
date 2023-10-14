import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Crea5 from "../../../crea5";

const Crea4 = () => {
  const items = document.querySelectorAll(".item");
  gsap.defaults({duration:0.3});
  
  items.forEach(function(item,index){
    const tween = gsap
  .timeline({paused:true})
  .to(item.querySelector('.text'), {color:'white', x:5, scale:1.3, transformOrigin:'left center'})
 
  
  item.addEventListener('mouseenter', function () {
    tween.play();
  })
  
  item.addEventListener('mouseleave', function () {
    tween.reverse();
  })
  })
  


  return (
    <>
     <div className="  bg-pink-500 overflow-hidden" >
      <div className="item">

      <h3 className="text">passion</h3>
      </div>
      <div className="item">

      <h3 className="text">passion</h3>
      </div>
      <div className="item">

      <h3 className="text">passion</h3>
      </div>
      </div>
   
    
    <Crea5/>
    </>
  );
};
export default Crea4;
