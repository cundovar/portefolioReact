import React from "react";
import Tekno from "./components/tekno";
import Savoir from "./components/savoir";
import Photo from "./components/photo";


const Competance=()=>{

      return(
        <>
        <div className="border-b w-full">
          <h3>savoir faire</h3>
        </div>
        <div className="competance flex flex-wrap w-5/6 pt-4">
          
          <Savoir className="w-1/3"/>
          <Tekno className="w-1/3"/>
          <Photo className="w-1/3"/>
          <div className="w-full flex rounded-3xl bg-indigo-500 h-96">
             <h3 className="self-end">Service et prestation</h3>
          </div>
          

        </div>

        
        
        
        </>


        
        
      )


}


export  default Competance