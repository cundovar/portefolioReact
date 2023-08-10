import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" footer w-full">
      <div className="w-5/6 flex justify-center items-center footer-text-social">
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
              <li> <a href="https://github.com/cundovar" className="move-line" target="_blank">Github</a>  </li>
              <li><a href="https://www.linkedin.com/in/facundo-varas/" className="move-line" target="_blank">linkedin</a> </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full foot footer-menu pb-5">
        <div className="flex items-end justify-center pt-3 ">
          <p>copyrirgth@2023</p>
        </div>
        <div className="flex w-full justify-end  footer-menu">
          <ul className=" flex space-x-3 ">

            <NavLink to="/">
              <li className="move-line">accueil</li>
            </NavLink>
            <NavLink to="/portfolio">
              <li className="move-line">Portfolio</li>
            </NavLink>
            <NavLink to="/contact">
              <li className="move-line">contact</li>
            </NavLink>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
