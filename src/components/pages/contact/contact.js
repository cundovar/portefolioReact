import React from "react";
import Typewriter from "../../hooks/typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faGlobe,
  faMessage,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import CustomBoutonn from "../../common/button";
import { Helmet } from "react-helmet";


const Contact = () => {

  const Meta=()=>{
    return(
      <div>
      <Helmet>
          <title> Page de contact - Mon portfolio dévéloppeur web</title>
          <meta
          name=" ici vous pourrez remplir le formulaire de contact et de mander mes services"
          content="Bienvenue sur mon site Web. Découvrez mes services et réalisations.Ici vous pourrez remplir le formulaire de contact et de mander mes services"/>
      </Helmet>
  </div>

    )
  }


  return (
    <>
    <Meta/>
    <div className="bg-stone-300 contact mt-5">
      <div className="w-full border-b mb-8 px-10 ">
        <h3>Contact</h3>
      </div>
      <div className="total-contact w-full flex px-10 ">
        <div className="contact-form w-full flex  ">
          <form
            className="w-full flex  items-center justify-center"
            action=""
            method="post"
          >
            <div className="contact-identifiant w-1/3  flex flex-col items-center justify-center ">
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
                    <FontAwesomeIcon icon={faUser} alt="icon name" />{" "}
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
                    <FontAwesomeIcon icon={faEnvelope} alt="icon mail"  />
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
                    <FontAwesomeIcon icon={faGlobe} alt="icon contact" />
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
                    <FontAwesomeIcon icon={faBuilding} alt="icon entreprise"/>
                  </span>
                </p>
                <p className="text-justify parag light-text">
                  * Les champs marqués d'une étoile sont obligatoires.
                </p>

                <div className="text-contact-fin ">
                  <p className="parag text-justify">
                    Pour me contacter vous pouvez également utiliser l'adresse :
                    varas.cundo@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-text w-1/3 ">
              <div className="flex flex-col ">
                <div className="mb-3">
                  <h4 className="">
                    <Typewriter text="Votre message :" delay={100} />
                  </h4>
                </div>
                <div className="flex flex-col items-center justify-center space-y-3 pb-5">
                  <p className="relative mx-8  " style={{ width: "100%" }}>
        
                    <textarea
                      placeholder="écrivez un message"
                      id="message"
                      type="text"
                      rows="15"
                      cols="60"
                      className="bg-neutral-300 shadow-lg  shadow-neutral-500/50  "
                      style={{ width: "100%" }}
                    ></textarea>
                    <span className="absolute left-1">
                      <FontAwesomeIcon icon={faMessage} alt="icon message" />
                    </span>
                  </p>

                  <CustomBoutonn type="submit" text="envoyer" className="self-start" />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;
