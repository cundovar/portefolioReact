import React, { useState } from "react";
import UseFetch from "../../../../../hooks/useFetch";

const CardPortfolio = () => {
 
    const { data: portfolioData, error: portfolioError } =
      UseFetch("/portfolio.json");
    const { data: choiceInputData, error: choiceInputError } = UseFetch(
      "/input-choice-tekno.json"
    );
  
    const [selectedTypes, setSelectedTypes] = useState([]);
  
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
      <div className="flex w-2/3 choice-tekno">
        {choiceInputData.map((items, index) => (
          <div
            key={index}
            style={{ color: items.color, backgroundColor: items.background }}
            className=" flex flex-col items-center justify-center input-choice-tekno"
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
                <img src={projet.imageSrc} alt={projet.titre} />
              </div>
              <div className="hovver text-center absolute transition flex justify-center items-center hover:bg-neutral-400">
                <p>{projet.description}</p>
              </div>
            </div>

            <div>
              <div className="text-center  border-y border-slate-600 border-solid mt-2">
                <h4>{projet.titre}</h4>
                <p>{projet.tekno} </p>
              </div>
              <ul className="flex items-center justify-center ulVoir">
                <li>
                  <a href={projet.lien}>voir</a>{" "}
                </li>
                <li></li>
                <li>
                  <a href={projet.lienCode}>voir code</a>{" "}
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
