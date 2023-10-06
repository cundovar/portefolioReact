import { Flex, ScrollArea, Box, Text } from "@radix-ui/themes";
import React from "react";
import Crea2 from "../crea2/crea2";
import Crea3 from "../crea3/crea3";
const Crea1 = () => {
  return (

    <div className="fond-crea  bb  lg:flex flex-wrap   items-center justify-around p-6 custom-font ">
      
      
     
     
      <div className="lg:w-3/6 md:w-full bg-neutral-300   ">
        <div className="flex items-center justify-center mb-5 p-2">
          <div className="w-1/3">
            <h3 className="custom-font-title ">Innov</h3>
          </div>
          <div className="w-1/3 flex h-full items-center justify-center max-sm:w-2/3">
            <ul className="flex h-full items-center justify-center space-x-3">
              <li>
                <a href="#">Accueil</a>
              </li>
              <li>
                <a href="#">Projets</a>
              </li>
              <li>
                <a href="#">à propos</a>
              </li>
            </ul>
          </div>

          <div className="w-1/3 flex items-center justify-end ">
            <button className="p-3 border font-titre">contact</button>
          </div>
        </div>

        <div className="flex  relative max-lg:flex-col ">
          <div className="w-1/3   ">
            <p className="  mt-24 pl-2 ">édition 01</p>

            <div className="h-1/2   absolute  tot max-lg:ml-0 max-sm:top-25 max-sm:-left-20 max-sm:w-full">
              <h1 className="lg:text-7xl sm:text-5xl md:text-6xl font-titre-fond-g">
                Innovation
              </h1>
              <h1 className="font-titre-fond-g  lg:text-7xl sm:text-5xl md:text-6xl ">
                Architecture
              </h1>
            </div>
          </div>

          <div className="w-2/3flex justify-end  h-96  ">
            <img
              src="/images/crea/house.jpg"
              alt=""
              className=" object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="w-full flex ">
          <div className="xl:w-1/6 lg:w-2/6 md:1/3 p-10">intro</div>
          <div className="xl:w-2/6 lg:w-1/6 pt-12">
            <div className="border border-t border-gray-400 "></div>
          </div>
          <div className="lg:w-3/6 md:2/3 p-10 text-justify">
            On sait depuis longtemps que travailler avec du texte lisible et
            contenant du sens est source de distractions, et empêche de se
            lettres plus ou moins normale, et en tout cas comparable avec celle
            du français standard.
          </div>
        </div>

        <div className=" bg-neutral-400 flex  ">
          <div className="p-10 lg:w-2/3 ">
            <h3 className="text-justify">
              On sait depuis longtemps que travailler avec du texte lisible et
              contenant du sens est source de distractions, et empêche de se
              lettres plus ou moins normale, et en tout cas comparable avec
              celle du français standard.
            </h3>
            <p className="mt-3">Who we are</p>
          </div>

          <div className="w-1/3 ">
            <img
              src="./images/crea/Rect.svg"
              className="w-full h-full object-cover "
            />
          </div>
        </div>
      </div>
      {/* ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;; */}

      <div className="lg:w-2/6 bg-black scrollBar-rigth ">
        <ScrollArea type="always" scrollbars="vertical" style={{ height: 900 }}>
          <Box>
            <Text as="div">
              <div
                className="w-full relative flex bg-slate-200   "
                style={{ height: "30rem" }}
              >
                <div
                  className="absolute"
                  style={{
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)",
                    top: "25px",
                  }}
                >
                  {" "}
                  <img className="" src="./images/crea/logo.png" />{" "}
                </div>
                <div
                  className="absolute  bottom-0"
                  style={{
                    color: "white",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                  }}
                >
                  <h1>01.</h1>
                </div>

                <div className="w-1/2">
                  <img
                    className="object-cover w-full h-full"
                    src="./images/crea/maison.jpg"
                    alt="image-crea"
                  />
                </div>
                <div className="w-1/2 flex items-center justify-center">
                  <div className="w-full flex flex-col items-center justify-center">
                    <div className="flex w-3/4 border-b-2   m-3 border-gray-300 hover:border-gray-500 ">
                      <div style={{ fontSize: ".7rem" }}>01</div>
                      <div className="ml-4">
                        {" "}
                        <a href="#">
                          <h4>Cuisine</h4>
                        </a>{" "}
                      </div>
                    </div>

                    <div className="flex w-3/4 border-b-2  m-3 border-gray-300 hover:border-gray-500 ">
                      <div style={{ fontSize: ".7rem" }}>02</div>
                      <div className="ml-4">
                        {" "}
                        <a href="#">
                          <h4>Salon</h4>
                        </a>{" "}
                      </div>
                    </div>

                    <div className="flex w-3/4 border-b-2  m-3 border-gray-300 hover:border-gray-500 ">
                      <div style={{ fontSize: ".7rem" }}>03</div>
                      <div className="ml-4">
                        {" "}
                        <a href="#">
                          <h4>Salle de bain</h4>
                        </a>{" "}
                      </div>
                    </div>

                    <div className="flex w-3/4 border-b-2  m-3 border-gray-300 hover:border-gray-500 ">
                      <div style={{ fontSize: ".7rem" }}>04</div>
                      <div className="ml-4">
                        {" "}
                        <a href="#">
                          <h4>Innovations</h4>
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-full flex flex-col  relative  bg-stone-800  "
                style={{ height: "30rem" }}
              >
                <button className=" absolute vertical ">
                  <h1 className=" text-7xl z-0 rotate-letter">EXPERIENCE</h1>
                </button>
                <div className="absolute w-1/2 h-1/2 right-0 z-0 background"></div>

                <div className="flex  z-20 flex-col h-full w-full auto items-center">
                  <div className="w-5/6 h-32 " style={{ color: "white" }}>
                    <div className=" w-1/2 h-full bg-stone-900 ">
                      <div className="p-2 projet">
                        <h3>Nos projets</h3>
                        <p>Présentation de nos futures projets </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-5/6 flex z-10  ">
                    <div className="w-1/2 ">
                      <img
                        className="object-cover w-full h-full"
                        src="./images/crea/ville.jpg"
                        alt="image-crea ville"
                      />
                    </div>
                    <div className="w-1/2 bg-white ">
                      <div className="p-1">
                        <h3 className="font-titre-fond">ZION VILLE</h3>
                        <p>Ville du future inspiré par le meilleur du passé </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-5/6 flex mt-3  ">
                    <div className="w-1/2 h-32 ">
                      <img
                        className="object-cover w-full h-full"
                        src="./images/crea/nat.jpg"
                        alt="image-crea ville"
                      />
                    </div>
                    <div className="w-1/2 bg-white">
                      <div className="p-1">
                        <h3 className="font-titre-fond">VILLE VERTE</h3>
                        <p>Ne cherchez plus, vous n'êtes plus en ville </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="w-full  bg-slate-200 auto  "
                style={{ height: "30rem" }}
              >
                <div className="h-2/3 border  bg-neutral-300 relative">
                  {/* <div className="h-full w-1/2 z-0 absolute right-0 opacity-75 ">
                    <img
                      src="./images/crea/Rect.svg"
                      alt="background-blue"
                      className="object-fill w-full h-full z-0"
                    />
                  </div> */}
                  <div className="h-1/4 flex  ">
                    <div className="w-2/6 flex flex-col items-center justify-center">
                      <h4>Notre A team</h4>
                    </div>
                    <div className="w-3/6 ">
                      <div className="h-1/2 border-b border-gray-700"></div>
                    </div>
                    <div className="w-1/6 flex items-center justify-center">
                      <button className="border p-2 font-titre mx-1">
                        contact
                      </button>
                    </div>
                  </div>
                  <div className="h-3/4 flex   items-center justify-between px-3 ">
                    <div className="w-1/4  ">
                      <div
                        className="border border-neutral-950  "
                        style={{ height: "100px", width: "100px" }}
                      >
                        <img
                          src="./images/crea/p1.jpg"
                          alt="image-portrait"
                          className=" object-cover w-full h-full"
                        />
                      </div>

                      <p className="mt-1 w-full">Laurent Dam</p>
                      <p>architecte</p>
                    </div>
                    <div className="w-1/4  ">
                      <div
                        className="border border-neutral-950  "
                        style={{ height: "100px", width: "100px" }}
                      >
                        <img
                          src="./images/crea/p1.jpg"
                          alt="image-portrait"
                          className=" object-cover w-full h-full"
                        />
                      </div>

                      <p className="mt-1 w-full">Laurent Dam</p>
                      <p>architecte</p>
                    </div>
                    <div className="w-1/4  ">
                      <div
                        className="border border-neutral-950  "
                        style={{ height: "100px", width: "100px" }}
                      >
                        <img
                          src="./images/crea/p1.jpg"
                          alt="image-portrait"
                          className=" object-fill w-full h-full"
                        />
                      </div>

                      <p className="mt-1 w-full">Laurent Dam</p>
                      <p>architecte</p>
                    </div>

                  
                  </div>
                </div>
                <div className="h-1/3 flex  items-center justify-center">
                  <div className="w-1/3  flex flex-col items-center justify-center">
                    <p className="text-center">chose à dire </p>
                    <h4 className="text-center">20 ans d'éperiences</h4>
                    <button className="p-1 font-titre">explorer</button>
                  </div>
                </div>
              </div>
            </Text>
          </Box>
        </ScrollArea>
      </div>
    </div>
  );
};

export default Crea1;
