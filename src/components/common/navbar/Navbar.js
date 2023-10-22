import React, { useEffect, useState } from "react";
import Menu from "./components/menu/menu";

import { NavLink } from "react-router-dom";
import Typewriter from "../../hooks/typewriter";

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
    <div className="z-50 flex justify-start  max-sm:pt:10 max-sm:flex-col  max-sm:justify-center max-sm:items-center    items-start w-full bg-stone-300 ">
      <div className="w-2/3   flex flex-col max-sm:flex-col max-sm:w-full   max-sm:justify-center max-sm:items-center ">
        <div className=" w-1/3  flex flex-col max-sm:flex-col max-sm:w-full p-5 bg-rose-200 max-lg:w-2/3 justify-center max-sm:items-center ">

        <div className=" flex   justify-start max-sm:justify-center max-sm:w-full  max-sm:ml-0  items-start mt-0">
          <NavLink to="/" className="m-0 max-sm:w-full  max-sm:justify-center  ">
            <h1 className="   max-sm:w-full   ">Dev front-end</h1>
          </NavLink>
        </div>
        <div className=" max-sm:w-full max-sm:justify-center max-sm:flex   max-sm:ml-0 space-x-5">
          <h3 className="max-sm:w-full max-sm:justify-center max-sm:flex  ">Intégrateur web </h3>
        </div>
        <div className=" ax-sm:w-full max-sm:justify-center max-sm:flex   max-sm:ml-0 ">
          <h4>
            {" "}
            {startTypewriter && <Typewriter text="Facundo Varas" delay={100} />}
          </h4>

        </div>
        </div>
      </div>

      <div className=" w-1/3 flex max-sm:w-full flex-col ml-7 max-sm:ml-0 justify-between pb-10 pt-5   ">
        {/*  id="sticky-parallax-header" */}

      
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
