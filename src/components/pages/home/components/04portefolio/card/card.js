import React, { useEffect, useState } from "react";
import UseFetch from "../../../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";

const CardPortfolio = () => {
  
  const { data: portfolioData, error: portfolioError } =UseFetch("/portfolio.json");
  const { data: choiceInputData, error: choiceInputError } = UseFetch("/input-choice-tekno.json");
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      if (portfolioData ) {
        setIsLoading(false);
      }
    }, [portfolioData]);
  
  if (portfolioError) {
    return <div>Une erreur est survenue lors du chargement des données.</div>;
  }
  if (choiceInputError) {
    return <div>erreur chargement données</div>;
  }
  const handleTypeSelection = (typeName) => {
    if (selectedTypes.includes(typeName)) {
      setSelectedTypes(selectedTypes.filter((type) => type !== typeName));
    } else {
      setSelectedTypes([...selectedTypes, typeName]);
    }
  };
  
  const filteredProjects = portfolioData.filter((projet) =>
  selectedTypes.length === 0 || projet.type.some(type => selectedTypes.includes(type))
  );
  
  return (
    <>
       <i className="fas fa-spinner fa-pulse"></i>
      <div className="flex w-2/3 choice-tekno flex-wrap ">
        {choiceInputData.map((items, index) => (
          <div
          key={index}
          style={{ color: items.color, backgroundColor: items.background }}
            className=" flex flex-col items-center justify-center input-choice-tekno flex-wrap"
          >
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                className="checkbox-input"
                checked={selectedTypes.includes(items.name)}
                onChange={() => handleTypeSelection(items.name)}
                style={{
                  color: items.color,
                  backgroundColor: items.background,
                }}
                />
              <span className="checkbox-tile">
                <span className="checkbox-label">{items.name} </span>
              </span>
            </label>
          </div>
        ))}
      </div>

      <div className="w-full flex flex-wrap items-center justify-center">
      
          
        {filteredProjects.map((projet, index) => (
          <div className="cardPortfolio transition" key={index}>
        
            <div className="relative contain-img-text">

              <div className="containImg absolute">

              {isLoading ? (
           <div className="icon">
           <i className="fas fa-spinner fa-pulse"></i>
         </div>
        ) : (
                <img src={projet.imageSrc} alt={projet.titre} />
                )}

              </div>
              <div className="hovver text-center absolute transition flex justify-center items-center hover:bg-pink-400">
                <p>{projet.description}</p>
              </div>
            </div>

            <div className="flex justify-between items-center ">
              <div className=" w-5/6 mt-2 bg-neutral-200 p-1">
                <h6>{projet.titre}</h6>
                <p>{projet.test1} </p>
                <p>{projet.test2} </p>
                <p>{projet.test3} </p>
              </div>

              <ul className="flex flex-col items-center space-y-3 justify-center ulVoir w-1/6">
                <li>
                  <button className="buttonCard space-x-2 flex mr-3 border px-2 hover:transition  ">
                  <a href={projet.lien} className="mb-1">visiter</a>
                  <span><FontAwesomeIcon icon={faArrowRight} /> </span>
                  </button>
                </li>
                <li></li>
                <li>
                  <button className="buttonCard  space-x-2 flex mr-3 border px-2 ">
                  <a href={projet.lienCode}>code</a>
                   <span><FontAwesomeIcon icon={faCode} /></span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ))}
        
      
      </div>
    </>
  );
};

export default CardPortfolio;
