import React from "react";
import Animation from "./animation/animation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faGlobe, faMessage, faBuilding } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (<div className="bg-stone-300">
  
  
  
       <div className="w-full border-b mb-8 ">
        <h3>Contact</h3>
       </div>
    <div className="total-contact w-full flex ">
      <div className="contact-form w-3/4 flex">
        <form className="w-full flex" action="" method="post">
          <div className="contact-identifiant w-1/3  flex flex-col items-end justify-center ">
            <div className="w-3/4 space-y-5">

           
            <p className="relative">
              <input
                id="chp_nom"
                name="chp_author"
                type="text"
                title="Votre nom *"
                className="required border bg-gray-300 relative"
                placeholder="Votre nom*"
              />
              <span className="absolute left-1">
                <FontAwesomeIcon icon={faUser} />{" "}
              </span>
            </p>
            <p className="relative">
              <input
                name="chp_author"
                type="email"
                title="Votre mail *"
                className="required relative border bg-gray-300"
                placeholder="Votre mail*"
              />
              <span className="absolute left-1">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </p>

            <p className="relative">
              <input
                name="chp_author"
                type="text"
                title="Votre mail *"
                className="required relative border bg-gray-300"
                placeholder="Votre site internet"
              />
              <span className="absolute left-1">
              <FontAwesomeIcon icon= {faGlobe }/>
              </span>
            </p>


            <p className="relative">
              <input
                name="chp_author"
                type="email"
                title="Votre mail *"
                className="required relative border bg-gray-300"
                placeholder="Votre société"
              />
              <span className="absolute left-1">
              <FontAwesomeIcon icon= {faBuilding }/>
              </span>
            </p>
            <p className="text-justify parag">* Les champs marqués d'une étoile sont obligatoires.</p>

            <div className="text-contact-fin ">

            <p className="parag text-justify">Pour me contacter vous pouvez également utiliser l'adresse : varas.cundo@gmail.com</p>
            </div>
            </div>


          </div>

          <div className="contact-text w-2/3 ">
            <div className="flex flex-col ">
              <h3 className="space-y-5">ecrivez</h3>
              <div className="flex flex-col items-center justify-center">

              <p className="relative mx-8 ">

              <textarea
                id="message"
                type="text"
                rows="15"
                cols="60"
             
                className="bg-gray-400 "
                placeholder="Votre message *"
              ></textarea>
               <span className="absolute left-1">
              <FontAwesomeIcon icon= {faMessage }/>
              </span>

              </p>
              
              <button>envoyez</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="contact-animation w-1/4 bg-gray-300 relative">
        <Animation/>
      </div>
    </div> 
  </div>
  );
};

export default Contact;
