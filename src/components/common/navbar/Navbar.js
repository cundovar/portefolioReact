import React, { useEffect, useState } from "react";
import Menu from "./components/menu/menu";
import Titre from "./components/tritre/titre";
import { NavLink } from "react-router-dom";
import Typewriter from "../../hooks/typewriter";

const Navbar = () => {
  const [startTypewriter, setStartTypewriter] = useState(false);

  useEffect(() => {
    // Démarre la machine à écrire après 2 secondes
    const timeout = setTimeout(() => {
      setStartTypewriter(true);
    }, 6000);

    // Nettoie le timeout lorsque le composant est démonté
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="z-50 flex w-full bg-stone-300  border border-slate-950 ">
      <div className="w-2/3 flex items-center justify-center">
        <div className="flex w-full border space-x-20 items-center border-stone-900">
          <NavLink to="/">
            <h1>Dev front-end</h1>
          </NavLink>
          <h3 className="flex space-x-20">Intégrateur web </h3>
          <h4>
            {" "}
            {startTypewriter && <Typewriter text="Facundo Varas" delay={100} />}
          </h4>
        </div>
      </div>

      <div className=" w-1/3 flex self-end border border-emerald-950 flex-col ml-7 justify-between pb-10 pt-5   ">
        {/*  id="sticky-parallax-header" */}

        <Titre />
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
