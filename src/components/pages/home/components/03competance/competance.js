import React from "react";
import Tekno from "./components/tekno";
import Savoir from "./components/savoir";
import Photo from "./components/photo";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
import { useEffect } from "react";
import { useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import CustomBoutonn from "../../../../common/button";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Texts = [" Portfolio ", "en ligne de", "Facundo Varas"];

export const Competance = () => {
  gsap.registerPlugin(Flip);
  document.querySelector(".change");

  return (
    <>
      <div className="border-b w-full">
        <h3>savoir faire</h3>
      </div>
      <div className="competance flex flex-wrap 2xl:w-5/6 xl:w-full pt-4 xl:space-y-20">
        <Savoir className="w-1/3 " />
        <Tekno className="w-1/3" />
        <Photo className="w-1/3 change" />
        <div className="w-full relative">
          <button className="absolute top right-0 m-10">
            <CustomBoutonn text="tekno"  icon={faArrowRight} alt="icon button" />
          </button>
          <div className="w-full flex justify-center items-center  rounded-3xl text-justify bg-orange-100 h-auto ">
            <div className="w-3/6 space-y-4 p-10">
              <p className="text-3xl">
                Je m’appelle Facundo et je suis intégrateur web, développeur
                front-end.
              </p>
              <p className="text-2xl">Après une bootcamp…. </p>
              <p className="text-2xl ">
                Oui je sais qu'on ne devient pas développeur en 6 mois…
              </p>
              <p className="text-2xl">
                {" "}
                Mais cela fait deux que je développe sur divers langages en
                autodidacte.
              </p>
              <p className="text-2xl">
                Tous les jours je code et découvre de nouvelles choses et monte
                en compétence, dans ce portfolio vous pourrez explorer mes
                travaux sur WORDPRESS REACT SYMFONY ou le LOWCODE.
              </p>
              <p className="text-2xl">
                Et pour le CSS : TAILWIND et BOOTSTRAP, SCSS
              </p>
              <p className="text-2xl">
                Je prends un soin particulier pour le responsive ( tablette et
                mobile ou écran extra-large) et le SEO.
              </p>
              <p className="text-2xl">
                Je ne connais pas tous mais j’ai comme ami un nommé Chat et
                Google est mon chat de compagnie.
              </p>
              <p className="text-2xl">
                Je me tiens régulièrement informé sur les nouvelles technologies
                en faisant une veille régulière.
              </p>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
