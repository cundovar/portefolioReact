import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Contact=()=>{


    return(

        <div className="total-contact w-full flex ">

            <div className="contact-form w-3/4 flex">

                     <form className="w-full flex" action="" method="post">
               <div className="contact-identifiant w-1/3 bg-gray-500 flex flex-col items-center justify-center space-y-10">
                      
               <p className="relative">

                <input id="chp_nom" name="chp_author" type="text" title="Votre nom *" className="required border bg-gray-300 relative"/>
                    <span className="absolute left-6"><FontAwesomeIcon icon={faUser} /> </span>
              
               </p>
               <p className="relative">

                <input  name="chp_author" type="email" title="Votre mail *" className="required relative border bg-gray-300"/>
                    <span className="absolute left-6"><FontAwesomeIcon icon= {faEnvelope} /></span>

               </p>
              </div>


               <div className="contact-text w-2/3 bg-gray-600" >
                <div className="flex flex-col">

                    <h3 className="space-y-5">ecrivez</h3>

                <textarea id="message" rows="5" cols="33" className="bg-gray-400"></textarea>
               <button>envoyez</button>

                </div>

               </div>
                     </form>

            </div> 



               <div className="contact-animation w-1/4 bg-gray-300">
gggg
               </div> 

        </div> // fin total-contact
    )
}

export default Contact