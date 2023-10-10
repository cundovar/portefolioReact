import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Typewriter from "../../../../hooks/typewriter";

const Titre = () => {
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
    <div className=" total-titre w-3/5   flex flex-col ">
    
    </div>
  );
};

export default Titre;
