import React from "react";


const Photo = () => {
  return (
    <div className="text_competence w-1/3 flex items-center justify-cente  ">
      <div className="flex    items-center justify-center ">
        <div className="w-2/3 flex ima relative shadow-lg shadow-neutral-600 ">
          <a  
            href="https://github.com/cundovar"
            target="_blank"
            className="absolute   iconGit h-6 w-6 flex items-center justify-center "
          >
            <i className="fa-brands pink fa-github fa-xl  "></i>
          </a>
       

      
          <a
            href="https://www.linkedin.com/in/facundo-varas/ "
            target="_blank"
            className="absolute iconLinke h-6 w-6 flex items-center justify-center "
          >
            <i className="fa-brands pink  fa-linkedin fa-xl" ></i>
          </a>
         
          <img src="/images/moi.jpg" className="" />
        </div>
      </div>
    </div>
  );
};

export default Photo;
