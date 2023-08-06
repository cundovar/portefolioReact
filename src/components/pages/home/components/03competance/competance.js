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
        <div className="competance flex w-5/6">
          
          <Savoir/>
          <Tekno/>
          <Photo/>
          

        </div>
        
        
        </>


        
        
      )


}


export  default Competance