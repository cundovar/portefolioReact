import React from "react";



import CustomBoutonn from "../../../common/button";
import { useRef } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

import { faPhone } from "@fortawesome/free-solid-svg-icons";

import Photo from "./03competance/components/photo";
import UseFetch from "../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tekno from "./03competance/components/tekno";
import Savoir from "./03competance/components/savoir";
import { NavLink } from "react-router-dom";
import AnimationSVG from "./animationSVG";



export const Competance = () => {
  const jsonUrl = "/tekno.json";
  const { data: tekno, error: teknoError } = UseFetch(jsonUrl);

  //carousel compétences
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  };

  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <div className="border-b w-full mt-10">
        <h3 className="max-sm:ml-5">savoir faire</h3>
      </div>
      <div className="competance flex flex-wrap 2xl:w-5/6 xl:w-full pt-4 xl:space-y-20">
        <Tekno className="w-1/3" />
        <Savoir className="w-1/3 " />
        <Photo className="w-1/3 max-sm:w-full " />
      </div>
      <div className="w-full relative">
        <div className="border-b mt-20 mb-6 w-full">
          <h3 className="max-sm:ml-5">Présentation </h3>
        </div>
        <div className="competance   flex flex-wrap  xl:w-full pt-4 xl:space-y-20">
          <div className="w-full    relative   rounded-3xl text-justify  ">
            <div
              className="  w-full flex 2xl:space-x-5 max-lg:flex-col h-full   m-auto shadow-2xl"
              style={{ minHeight: "55rem" }}
            >
              <div className="w-1/2 max-lg:w-full  relative shadow-2xl h-full md:p-12 space-y-4 max-md:p-3  ">
                <p className="text-2xl">
                Enthousiaste et passionné par le monde du développement web, je suis Facundo, un intégrateur web et développeur front-end. Mon parcours a débuté avec un bootcamp, une première étape qui a déclenché ma passion pour le code.
                </p>
                <p className="2xl:text-xl xl:text-xl">Je suis conscient que devenir un développeur accompli ne se fait pas en un claquement de doigts, mais cela fait déjà deux ans que je me plonge intensément dans le monde du développement, explorant divers langages de manière autodidacte. </p>
                <p className="2xl:text-xl xl:text-xl">
                Au fil de mes journées, je me lance constamment des défis, découvrant de nouvelles technologies et perfectionnant mes compétences.
                </p>
                <p className="2xl:text-xl xl:text-xl">
                Dans ce portfolio vous pourrez explorer
                  mes travaux sur 
                  <span className="2xl:text-2xl xl:text-xl font-semibold" >  WORDPRESS   </span>

                  <span className="2xl:text-2xl xl:text-xl font-semibold" > REACT  </span>
                  <span className="2xl:text-2xl xl:text-xl font-semibold" >SYMFONY  </span>
                 ou le
                 
                  <span className="2xl:text-2xl xl:text-xl font-semibold" > LOWCODE </span>
                 .
                </p>
                <p className="2xl:text-xl xl:text-xl">
                  
                </p>
                <p className="2xl:text-xl xl:text-xl">
                  Et pour le CSS :
                  <span className="2xl:text-2xl xl:text-xl font-semibold" >TAILWIND</span>  et 
                  <span className="2xl:text-2xl xl:text-xl font-semibold" > BOOTSTRAP</span>,
                  <span className="2xl:text-2xl xl:text-xl font-semibold" >SCSS</span> 
                </p>
                <p className="2xl:text-xl xl:text-xl">
                Au-delà de mes compétences techniques, ma curiosité m'incite à rester constamment à jour sur les dernières avancées technologiques, effectuant une veille régulière pour rester à la pointe de mon domaine. 
                </p>
                {/* <p className="2xl:text-2xl xl:text-xl">
                    Je ne connais pas tout mais j’ai comme ami un nommé Chat et
                    Google est mon chat de compagnie.
                  </p> */}
            

                <AnimationSVG/>
              </div>
              <div className="w-1/2 max-lg:w-full bg-gray-900    relative">
                <div className="absolute z-50 right-0 m-10 ">
                  <CustomBoutonn
                    text="suivant"
                    icon={faArrowRight}
                    onclick={nextSlide}
                  />
                </div>

                <Slider {...settings} ref={sliderRef}>
                  {tekno.map((item, index) => (
                    <div
                      className="w-full ft bg-gray-900   p-10 max-sm:p-5 m-auto space-y-5"
                      key={index}
                    >
                      <div className={`boder p-3 rounded-xl  gt ${item.bg}`}>
                        <h1 className=" text-slate-600 ">{item.titre} </h1>
                      </div>

                      <div className="border border-zinc-500 p-2 w-4/6xl:w-full max-sm:w-full max-sm:p-1  xl-5">
                        <div className=" border border-zinc-500 p-2 ggdd m-auto  ">
                          <ul className="xl:space-y-10 p-5 text-gray-400 max-sm:space-y-3">
                            <div className="flex  items-center space-x-3">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ color: "#e647bc" }}
                                className="self-start pt-2"
                              />
                              <li className="text-2xl max-sm:text-xl text-justify">
                                {item.l1}
                              </li>
                            </div>
                            <div className="flex   items-center space-x-3">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ color: "#e647bc" }}
                                className="self-start pt-2"
                              />
                              <li className="text-2xl max-sm:text-xl text-justify">
                                {item.l2}
                              </li>
                            </div>
                            <div className="flex  items-center space-x-3">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ color: "#e647bc" }}
                                className="self-start pt-2"
                              />
                              <li className="text-2xl max-sm:text-xl text-justify">
                                {item.l3}
                              </li>
                            </div>
                            <div className="flex  items-center space-x-3">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ color: "#e647bc" }}
                                className="self-start pt-2 "
                              />
                              <li className="text-2xl max-sm:text-xl text-justify">
                                {item.l4}
                              </li>
                            </div>
                            <div className="flex  items-center space-x-3">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ color: "#e647bc" }}
                                className="self-start pt-2"
                              />
                              <li className="text-2xl text-justify">
                                {item.l5}
                              </li>
                            </div>
                            <div className="flex  items-center space-x-3">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                                style={{ color: "#e647bc" }}
                                className="self-start pt-2"
                              />
                              <li className="text-2xl max-sm:text-xl text-justify">
                                {item.l6}
                              </li>
                            </div>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-10 pb-96  " id="contact">
      <div className="border-b w-full mt-10">
        <h3 className="max-sm:ml-5">Contact</h3>
        </div>
<div className="w-full flex justify-center items-center">


        <div className="flex w-4/6 max-md:w-full max-md:flex-col max-md:space-y-5 max-md:mt-5   justify-between item-center p-10 mt-20">
        
            <div className="w-1/2  max-md:w-full space-y-5 max-md:flex max-md:flex-col max:md:justify-center max-md:bg-cyan-100 max-md:p-1 ">
              <div className=" p-3 pl-0">

              <p className="text-2xl">FACUNDO VARAS</p>
              <p className="text-xl">intégrateur-Devéloppeur front-end-Freelance</p>
              </div>
              <div className="hover:text-slate-400">

              <NavLink to="/">
                <p>https://pix.varascundo.com/</p>
              </NavLink>
              </div>
              <p className="text-xl">Paris 20</p>
            </div>


            <div className="w-1/2  max-md:w-full space-y-5">
              <div className="border hover:bg-cyan-100 p-3 flex text-6xl">
                <div  className="w-1/12  max-sm:mr-2">
                <FontAwesomeIcon icon={faPhone}  className="text-xl text-pink-300" />
                </div>
                <div>06 23 84 84 45</div>
              </div>
              <div className="border hover:bg-cyan-100 p-3 flex">
                <div  className="w-1/12 max-sm:mr-2 " ><FontAwesomeIcon icon={faEnvelopeOpen} className="text-xl text-pink-300"  /></div>
                <div> <a className="hover:text-slate-400" href="mailto: varas.cundo@gmail.com"> varas.cundo@gmail.com</a> </div>
              </div>
              <div className="border hover:bg-cyan-100 p-3 flex  ">
                <div className="w-1/12 max-sm:mr-2"> 
                <a href="https://www.linkedin.com/in/facundo-varas/">

                 <i className="fa-brands pink  fa-linkedin fa-xl text-pink-300" ></i>
                </a>
                 </div>
                <div>Mon profil LinkedIn</div>
              </div>
            
            </div>
          </div>
</div>
        </div>
      
     
    </>
  );
};
