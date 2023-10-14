import React from "react";
import Tekno from "./components/tekno";
import Savoir from "./components/savoir";
import Photo from "./components/photo";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";



const Competance=()=>{

  gsap.registerPlugin(Flip)
  document.querySelector(".change")

      return(
        <>
        <div className="border-b w-full">
          <h3>savoir faire</h3>
        </div>
        <div className="competance flex flex-wrap 2xl:w-5/6 xl:w-full pt-4">
          
          <Savoir className="w-1/3 "/>
          <Tekno className="w-1/3"/>
          <Photo className="w-1/3 change"/>
          <div className="w-full flex rounded-3xl bg-indigo-500 h-96">
             <h3 className="self-end">Service et prestation</h3>
          </div>
          

        </div>

        
        
        
        </>


        
        
      )


}


export  default Competance