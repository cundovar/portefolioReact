import React from "react";

const Photo = () => {
  return (
    <div className="text_competence w-1/3 ">
   
      <div className="flex space-x-5 foto">
        <div className="space-y-3 W-1/3 flex flex-col items-center justify-center realtive">
          <a href="https://github.com/cundovar" className="relative" >
            <i className="fa-brands fa-github absolute top-0 right-0"></i>
          </a>
          <a href="https://www.linkedin.com/in/facundo-varas/ " className="relative">
            <i className="fa-brands fa-linkedin absolute top-5 right-0"></i>
          </a>
      
        </div>
        <div className="w-2/3 flex items-center justify-center relative ">
          <img src="/images/moi.jpg" />
          <p></p>
          <p></p>
          <p></p>

        </div>
      </div>
    </div>
  );
};

export default Photo;
