import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" footer w-full">
      <div className="w-5/6 flex justify-around footer-text-social">
        <div className=" exp w-1/2">
          <div className="w-1/3 flex justify-center itmes-center footer-text ">
            <p className="text-justify ">
              Portfolio en ligne de Facundo Varas, artisant du web curieux et
              passionné.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex space-x-3 justify-center itmes-center footer-social">
          <p>Présence virtuel</p>
          <div className="social-icon ">
            <ul className="space-y-3">
              <li>Github </li>
              <li>linkedin</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full foot footer-menu">
        <div className="flex ">
          <p>copyrirgth@2023</p>
        </div>
        <div className="flex w-full justify-end  footer-menu">
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
