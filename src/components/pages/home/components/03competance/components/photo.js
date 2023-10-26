import React from "react";
import CardCreaHome from "../../../../../hooks/CradcreaHome";


const Photo = () => {
  return (
    <div className="text_competence w-1/3 flex items-center xl:items-end justify-center max-lg:mt-3    ">
      <div className="flex  sm:visible md:hidden    items-center  justify-center ">
        <div className="w-full flex items-center justify-around space-x-6  relative shadow-lg shadow-neutral-600  ">

        <img src="/images/moi.jpg" className=" rounded-full h-28 w-28" />
          <a  
            href="https://github.com/cundovar"
            target="_blank"
            rel="noopener noreferrer"
            className="  iconGit h-6 w-6 flex items-center justify-center max-lg:-top-9 max-lg:left-40  max-sm:-top-7 max-sm:left-40"
          >
            <i className="fa-brands pink fa-github fa-xl  "></i>
          </a>
       

      
          <a
            href="https://www.linkedin.com/in/facundo-varas/ "
            target="_blank"
            rel="noopener noreferrer"
            className=" iconLinke h-6 w-6 flex items-center justify-center max-lg:-top-9 max-lg:left-12 max-sm:-top-7 max-sm:left-28"
          >
            <i className="fa-brands pink  fa-linkedin fa-xl" ></i>
          </a>
         
        
        </div>
      </div>
      <div className="max-sm:hidden  max-md:hidden 2xl:visible" >

      <CardCreaHome   dataImage="/images/moi.jpg" >
      <a  
            href="https://github.com/cundovar"
       
            className=" iconGit z-50  "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands pink fa-github fa-xl pt-20 "></i>
          </a>

          
          <a
            href="https://www.linkedin.com/in/facundo-varas/ "
            target="_blank"
            rel="noopener noreferrer"
            className="ml-10"
          
          >
            <i className="fa-brands pink  fa-linkedin fa-xl" ></i>
          </a>

              </CardCreaHome>
      </div>

    </div>
  );
};

export default Photo;
