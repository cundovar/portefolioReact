import React, { useEffect, useState } from "react";
import UseFetch from "../../../../../hooks/useFetch";
import ChoiceTekno from "../../../../portfolio-page/components/choice-tekno";

const CardPortfolio = () => {
 
  const { data, error } = UseFetch('/portfolio.json');
  const [selectedType, setSelectedType] = useState(""); // Ajouter l'état pour stocker le type sélectionné
  if (error) {
    return <div>Une erreur est survenue lors du chargement des données.</div>;
  }
  

  // Filtrer les projets en fonction du type sélectionné
  const filteredProjets =
    selectedType === ""
      ? data // Si rien n'est sélectionné, afficher tous les projets
      : data.filter((projet) => projet.type.includes(selectedType));

  return (
    <>
    <ChoiceTekno/>
      <div className="check w-full flex items-center justify-center space-x-3">
        {/* Ajouter les checkboxes pour les types */}

        <div className=" totalCheck relative flex flex-col items-center justify-center transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-stone-300 duration-300 ...">
        <label>
          <input
          className="cardCheck"
            type="checkbox"
            checked={selectedType === "wordpress"}
            onChange={() =>
              setSelectedType((prevType) =>
                prevType === "wordpress" ? "" : "wordpress"
              )
            }
          />
        </label>


        <div>
        <img src="/images/logo/wordpress.png"/>
       </div>
       <p className="text-center">wordpress</p>


        </div>


        <div className=" totalCheck relative flex flex-col items-center justify-center transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
        <label>
          <input
          className="cardCheck"
            type="checkbox"
            checked={selectedType === "php"}
            onChange={() =>
              setSelectedType((prevType) => (prevType === "php" ? "" : "php"))
            }
          />
        </label>
        <div className=" flex items-center justify-center">
        <img src="/images/logo/php.png" />
       </div>
       <p className="text-center">php</p>

        </div>
    

    <div  id ="reactColor" className=" totalCheck relative flex flex-col items-center justify-center transition ease-in-out delay-150 bg-neutral-900 hover:-translate-y-1 hover:scale-110 hover:bg-neutral-600 duration-300  ... ">

         <label>
          <input
          className="cardCheck"
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
      </div>
      
    <div className="w-full flex  flex-wrap items-center justify-center ">

      {filteredProjets.map((projet,index)=>(

      <div className="cardPortfolio transition" key={index}>
        <div className="relative contain-img-text">
          <div className="containImg absolute">
            <img src={projet.imageSrc } alt={projet.titre}  />
          </div>
          <div className="hovver text-center absolute transition flex justify-center items-center">
            <p>{projet.description}</p>
          </div>
        </div>

        <div>
          <div className="text-center  border-y border-slate-600 border-solid mt-2">
            <h4>{projet.titre}</h4>
            <p>{projet.tekno} </p>
          </div>
          <ul className="flex items-center justify-center ulVoir">
            <li><a href={projet.lien}>voir</a> </li>
            <li></li>
            <li><a href={projet.lienCode}>voir code</a> </li>
          </ul>
        </div>
      </div>

      ))}
    </div>
    </>
  );
};

export default CardPortfolio;
