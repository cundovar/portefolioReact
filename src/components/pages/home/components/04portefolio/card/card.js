import React from "react";

const CardPortfolio = () => {
  return (
    <div className="w-full ">
      <div className="cardPortfolio ">
        <div className="relative contain-img-text">
          <div className="containImg absolute">
            <img src="" />
          </div>
          <div className="hovver absolute transition flex justify-center items-center">
            <p>texte a definir json</p>
          </div>
        </div>

        <div className="ui">
          <ul className="flex items-center justify-center ulVoir">
            <li>voir</li>
            <li>voir code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPortfolio;
