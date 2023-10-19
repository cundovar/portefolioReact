import React from "react";
import CardCreaTof from "../../../../../hooks/CardCreaTof";


const Photo = () => {
  return (
    <div className="text_competence w-1/3 flex items-center xl:items-end justify-center max-lg:mt-3    ">
      <div className="flex  max-lg:visible xl:hidden  items-center  justify-center ">
        <div className="w-2/3 flex ima relative shadow-lg shadow-neutral-600  ">
          <a  
            href="https://github.com/cundovar"
            target="_blank"
            className="absolute  iconGit h-6 w-6 flex items-center justify-center max-lg:-top-9 max-lg:left-40  max-sm:-top-7 max-sm:left-40"
          >
            <i className="fa-brands pink fa-github fa-xl  "></i>
          </a>
       

      
          <a
            href="https://www.linkedin.com/in/facundo-varas/ "
            target="_blank"
            className="absolute iconLinke h-6 w-6 flex items-center justify-center max-lg:-top-9 max-lg:left-12 max-sm:-top-7 max-sm:left-28"
          >
            <i className="fa-brands pink  fa-linkedin fa-xl" ></i>
          </a>
         
          <img src="/images/moi.jpg" className="" />
        </div>
      </div>
      <div className="max-sm:hidden max-lg:hidden xl:visible 2xl:visible" >

      <CardCreaTof   dataImage="/images/moi.jpg" >
      <a  
            href="https://github.com/cundovar"
            target="_blank"
            className=" iconGit  "
            slot="content"
          >
            <i className="fa-brands pink fa-github fa-xl pt-20 "></i>
          </a>
          <a
            href="https://www.linkedin.com/in/facundo-varas/ "
            target="_blank"
            className="ml-10"
            slot="content"
          >
            <i className="fa-brands pink  fa-linkedin fa-xl" ></i>
          </a>

              </CardCreaTof>
      </div>

    </div>
  );
};

export default Photo;
