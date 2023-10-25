
import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";

const Menu = () => {
  const [isDivDown, setIsDivDown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Clic en dehors du dropdown, remettez-le en haut
        if (isDivDown) {
          gsap.to(".animating-div", {
            y: 0,
            duration: 0.7,
            ease: "power2.inOut",
            opacity: 0,
            display: "none"
          });
          setIsDivDown(false);
        }
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDivDown]);

  const handleButtonClick = () => {
    if (isDivDown) {
      // Si la div est déjà en bas, remettez-la en haut
      gsap.to(".animating-div", {
        y: 0,
        duration: 0.7,
        ease: "power2.inOut",
        opacity: 0,
        display: "none"
      });
    } else {
      // Sinon, faites-la descendre
      gsap.to(".animating-div", {
        y: 120,
        duration: 0.7,
        ease: "power2.inOut",
        opacity: 1,
        display: "block"
      });
    }

    // Inversez la valeur de isDivDown
    setIsDivDown(!isDivDown);
  };

  const fermeButtonClick = () => {
    if (isDivDown) {
      gsap.to(".animating-div", {
        y: 0,
        duration: 0.7,
        ease: "power2.inOut",
        opacity: 0,
        display: "none"
      });
      setIsDivDown(false);
    }
  };

  return (
    <div className="navbar-menu w-full bg-stone-300 flex items-start">
      <div className="navbar-menu-2 flex w-full">
        <ul className="menu w-full justify-center flex">
          <NavLink to="/" className="" onClick={fermeButtonClick}>
            <li className="flex justify-center items-center">
              <h5 className="move-line">Accueil</h5>
            </li>
          </NavLink>

          <li className="flex justify-center relative items-center flex-col">
            <div className="flex dropdown relative" ref={dropdownRef}>
              <button onClick={handleButtonClick} className="flex items-center justify-center">
                <h5>Portfolio</h5>
                <FontAwesomeIcon icon={faCaretDown} style={{ color: "#e2e5e9", marginLeft: "10px" }} />
              </button>
            </div>

            <div className="menu animating-div opacity-0 max-sm:ml-10 flex absolute max-sm:z-50 xl:-top-14 max-sm:flex max-sm:flex-col max-sm:-top-36 z-50  max-sm:w-5/12  max-sm:mt-16 ">
              <NavLink to="/portfolio">
                <button>
                  <h6 style={{ marginBottom: "10px" }} className="move-line">
                    Projets
                  </h6>
                </button>
              </NavLink>

              <NavLink to="/creation">
                <button>
                  <h6 className="move-line">Travaux</h6>
                </button>
              </NavLink>
            </div>
          </li>

          <NavLink to="/contact" className="" onClick={fermeButtonClick}>
            <li className="flex justify-center items-center">
              <h5 className="move-line">Contact</h5>
            </li>
          </NavLink>
        </ul>

        <div className="button-circle"></div>
      </div>
    </div>
  );
};
// EXPLICATION CLIC EN DEHORS BOUTON PORTOFOLIO
// L'expression if (dropdownRef.current && !dropdownRef.current.contains(event.target)) est une condition qui vérifie si l'élément représenté par dropdownRef.current existe (c'est-à-dire s'il n'est pas nul) et si l'élément cliqué (event.target) n'est pas contenu dans l'élément représenté par dropdownRef.current. Cette condition est utilisée pour déterminer si un clic a été effectué en dehors de l'élément dropdownRef.current.

// Expliquons-le plus en détail :

// dropdownRef.current est une référence (ou une "ref") à un élément du DOM. Elle est obtenue en utilisant la fonction useRef de React. Cette référence est utilisée pour faire référence à l'élément HTML du dropdown que vous souhaitez surveiller.

// event.target représente l'élément sur lequel l'événement de clic a été déclenché. Il s'agit de l'élément HTML sur lequel l'utilisateur a cliqué.

// dropdownRef.current.contains(event.target) vérifie si l'élément représenté par dropdownRef.current (c'est-à-dire l'élément du dropdown) contient l'élément sur lequel l'événement de clic a été déclenché (c'est-à-dire event.target).

// Ainsi, la condition if (dropdownRef.current && !dropdownRef.current.contains(event.target)) signifie que si l'élément du dropdown existe (non nul) et que l'élément sur lequel l'événement de clic a été déclenché n'est pas contenu dans l'élément du dropdown, alors le clic a été effectué en dehors du dropdown. Cela permet de détecter les clics en dehors de la zone du dropdown pour effectuer les actions appropriées, telles que masquer le dropdown lorsque cela est nécessaire.

export default Menu;
