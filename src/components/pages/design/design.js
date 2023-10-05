import React from "react";

import Crea1 from "./crea1/crea1";
import Crea3 from "./crea3/crea3";


const Design=()=>{

    return(
        <section className="border w-full border-black  sectionDesign">

                  <div className="bg-white flex items-center justify-center space-x-3">
                    <button>preview</button>
                    <button>nect</button>
                  </div>
                  <div className="flex items-center justify-center">

           <Crea1/>
       
            
                  </div>
        </section>
    )
}

export default Design