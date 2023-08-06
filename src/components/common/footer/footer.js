import React from "react";

const Footer = () => {
  return (
    <div className=" footer w-full">
      <div className="w-5/6 flex justify-around footer-text-social">
        <div className="w-1/2">
            <div className="w-1/2 flex justify-center itmes-center footer-text">
          <p>
            Portfolio en ligne de Facundo Varas, artisant du web curieus et
            passionné
          </p>

            </div>
        </div>
        <div className="w-1/2 flex space-x-3 justify-center itmes-center footer-social">
          <p>Présence virtuel</p>
          <div className="social-icon ">
            <ul className="space-y-3">
                <li>Github  </li>
                <li>linke</li>
                <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full footer-menu">
        <div className="flex ">
          <p>copirirgth@2023</p>
        </div>
        <div className="flex w-full justify-end footer-menu">
          <ul className=" flex space-x-3 ">
            <li>accueil</li>
            <li>Portfolio</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
