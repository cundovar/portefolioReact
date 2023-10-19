import React from "react";
import Realisation from "./realisation";
import { NavLink } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import CustomBoutonn from "../../../../../common/button";
import { Tab, Tabs } from "./tabs";
const Present = () => {
  return (
    <div className="w-full flex flex-col total-1 pb-5 ">
      {/* <div className=" responsiService ">
        <nav className="w-full border-b mb-8 ">
          <h3>Service et prestation</h3>
        </nav>

        <main className="2xl:w-5/6 lg:w-full space-x-6 responsi3boutons  flex max-lg:flex-col max-lg:ml-10 max-md:ml-0">
          <Tabs>
            <Tab title="1" key={1} selected>
              <div
                className="flex max-lg:flex-col lg:flex-row  lg:space-x-10">
                <div className="flex justify-center items-center">
                  <div className="w-2/3 max-lg:w-full  responsiText-service text-justify space-y-3">
                    <p className="text-justify">
                      Les gabarits livrés sont conformes aux normes W3C.
                    </p>
                    <p className="text-justify">
                      Les pages intégrées sont responsives. Leur compatibilité
                      avec les navigateurs et les résolutions courantes est
                      rigoureusement contrôlée sur les différents supports
                      (mobile, tablette, desktop).
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab title="2">
              <div className="flex items-center justify-center w-full">
                <div className="w-2/3 max-lg:w-full  space-y-1 light-text p-3 bg-neutral-300 ">
                  <p>-Technologies : HTML5, CSS3</p>
                  <p>-Approche modulaire, travail en composants CSS </p>
                  <p>- Pre-Processors : SASS</p>
                  <p>- Pre-Processors : taiwlind</p>
                  <p></p>
                </div>
              </div>
            </Tab>
          </Tabs>
        </main>
      </div> */}
      <div className="divRealisation w-full ">
        <div className="w-full border-b mb-8 flex items-end">
          <h3>Quelques réalisations</h3>
        </div>
        <NavLink to="/portfolio">
          <button className=" text-center xl:mb-5 ">
            <CustomBoutonn text="voir le portfolio" icon={faArrowRight} alt="icon button"/>
          </button>
        </NavLink>
        <div className="w-full space-y-3 flex flex-col total-carousel">
          <Realisation />
        </div>

      </div>
    </div>
  );
};

export default Present;
