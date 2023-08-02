import React, { useEffect, useState } from "react";

const CardPortfolio = () => {

const [ projetData,setProjetData]=useState([])

useEffect(()=>{
  fetch("/portfolio.json")
  .then((response)=>response.json())
  .then((data)=>{
    setProjetData(Object.values(data))
  })
  .catch((error)=>console.error("erreur chargement données"))
},[])

  return (
    <div className="w-full flex space-x-4 ">
      {projetData.map((projet,index)=>(

      <div className="cardPortfolio " key={index}>
        <div className="relative contain-img-text">
          <div className="containImg absolute">
            <img src={projet.imageSrc } alt={projet.titre}  />
          </div>
          <div className="hovver absolute transition flex justify-center items-center">
            <p>{projet.description}</p>
          </div>
        </div>

        <div className="ui">
          <ul className="flex items-center justify-center ulVoir">
            <li><a href={projet.lien}>voir</a> </li>
            <li>{projet.titre}</li>
            <li><a href={projet.lieCode}>voir code</a> </li>
          </ul>
        </div>
      </div>

      ))}
    </div>
  );
};

export default CardPortfolio;
