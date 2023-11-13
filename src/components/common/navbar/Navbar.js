import React, { useEffect, useState } from "react";
import Menu from "./components/menu/menu";

import { NavLink } from "react-router-dom";
import Typewriter from "../../hooks/typewriter";
import AnimationSVGnav from "../SVG/AnimationSVGnav";

const Navbar = () => {
  const [startTypewriter, setStartTypewriter] = useState(false);

  useEffect(() => {
    // Démarre la machine à écrire après 2 secondes
    const timeout = setTimeout(() => {
      setStartTypewriter(true);
    }, 400);

    // Nettoie le timeout lorsque le composant est démonté
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="z-50 flex    items-center max-md:pt:10 max-md:flex-col    max-md:justify-center max-md:items-center     w-full">
      <div className="fixed animSVGnav  z-10">
      <AnimationSVGnav/>
      </div>
      <div className="w-1/3 z-50  flex flex-col max-md:flex-col max-md:w-full  max-md:justify-center max-md:items-center ">
        <div className=" flex flex-col max-md:flex-col max-md:w-full p-5 rounded-xl bg-pink-200 xl:w-full  lg:w-full justify-center max-sm:items-center ">

        <div className=" flex z-20  justify-start max-sm:justify-center max-md:w-full  max-md:ml-0  items-start mt-0">
          <NavLink to="/" className="m-0 max-md:w-full  max-md:justify-center  ">
            <h1 className="   max-sm:w-full   ">Dev front-end</h1>
          </NavLink>
        </div>
        <div className=" max-sm:w-full max-md:justify-center max-md:flex   max-md:ml-0 space-x-5">
          <h3 className="max-sm:w-full max-md:justify-center max-md:flex  ">Intégrateur web </h3>
        </div>
        <div className=" max-sm:w-full max-md:justify-center max-md:flex   max-sm:ml-0 ">
          <h4>
            {" "}
            {startTypewriter && <Typewriter text="Facundo Varas" delay={100} />}
          </h4>
        </div>
          <div className=" max-md:hidden  ">
          <Menu/>

          </div>

        </div>
      </div>

      <div className=" w-1/3 hidden max-md:block  max-sm:w-full flex-col  max-sm:ml-0 justify-center items-center pb-10 pt-5   ">
     

      
        <Menu />
      </div>

    </div>
  );
};

export default Navbar;
