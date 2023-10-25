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
    <div className="z-50 flex justify-start  max-md:pt:10 max-md:flex-col  max-md:justify-center max-md:items-center    items-start w-full bg-stone-300 ">
      <div className="w-2/3   flex flex-col max-md:flex-col max-md:w-full   max-md:justify-center max-md:items-center ">
        <div className=" flex flex-col max-md:flex-col max-md:w-full p-5 2xl:m-9 xl:ml-9 rounded-xl bg-pink-200 xl:w-1/3  lg:w-2/3 justify-center max-sm:items-center ">

        <div className=" flex   justify-start max-sm:justify-center max-md:w-full  max-md:ml-0  items-start mt-0">
          <NavLink to="/" className="m-0 max-md:w-full  max-md:justify-center  ">
            <h1 className="   max-sm:w-full   ">Dev front-end</h1>
          </NavLink>
        </div>
        <div className=" max-sm:w-full max-md:justify-center max-md:flex   max-md:ml-0 space-x-5">
          <h3 className="max-sm:w-full max-md:justify-center max-md:flex  ">Intégrateur web </h3>
        </div>
        <div className=" ax-sm:w-full max-md:justify-center max-md:flex   max-sm:ml-0 ">
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
