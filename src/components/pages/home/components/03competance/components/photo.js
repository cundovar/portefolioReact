import React from "react";

const Photo = () => {
  return (
    <div className="text_competence w-1/3 ">
   
      <div className="flex space-x-5 foto">
        <div className="space-y-3 W-1/3 flex flex-col items-center justify-center">
          <a href="https://github.com/cundovar" __blank>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/facundo-varas/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <p>CV</p>
        </div>
        <div className="w-2/3 flex items-center justify-center ">
          <img src="/images/moi.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Photo;
