import React, { useEffect, useState } from "react";


const Checkbox =()=>{
  const [projetData, setProjetData] = useState([]);
  const [selectedType, setSelectedType] = useState(""); // Ajouter l'état pour stocker le type sélectionné

  useEffect(() => {
    fetch("/portfolio.json")
      .then((response) => response.json())
      .then((data) => {
        setProjetData(Object.values(data));
      })
      .catch((error) => console.error("erreur chargement des données"));
  }, []);

  // Filtrer les projets en fonction du type sélectionné
  const filteredProjets =
    selectedType === ""
      ? projetData // Si rien n'est sélectionné, afficher tous les projets
      : projetData.filter((projet) => projet.type.includes(selectedType));

return(
  <>
  
   {/* Ajouter les checkboxes pour les types */}
   <label>
          <input
          className="hh"
            type="checkbox"
            checked={selectedType === "wordpress"}
            onChange={() =>
              setSelectedType((prevType) =>
                prevType === "wordpress" ? "" : "wordpress"
              )
            }
          />
          WordPress
        </label>
        <label>
          <input
            type="checkbox"
            checked={selectedType === "php"}
            onChange={() =>
              setSelectedType((prevType) => (prevType === "php" ? "" : "php"))
            }
          />
          PHP
        </label>
    

    <div className=" ttt relative">

         <label>
          <input
          className="hh absolute"
             type="checkbox"
             checked={selectedType === "react"}
             onChange={()=>
            setSelectedType((prevType)=>(prevType ==="react" ? "" :"react"))
          }/>
          
         </label>
       <div>
        <img src="/images/logo/react.png"/>
       </div>
       <p className="text-center">react</p>

    </div>

        {/* Ajouter plus de checkboxes pour d'autres types si nécessaire */}
  
  
  
  </>



)

}

export default Checkbox