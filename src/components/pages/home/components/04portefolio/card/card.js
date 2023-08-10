import React, { useEffect, useState } from "react";
import UseFetch from "../../../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCode } from "@fortawesome/free-solid-svg-icons";
import CustomBoutonn from "../../../../../common/button";
import {
  Avatar,
  Box,
  Flex,
  HoverCard,
  HoverCardTrigger,
  Strong,
  Text,
} from "@radix-ui/themes";
import { Link } from "react-router-dom";

const CardPortfolio = () => {
  const { data: portfolioData, error: portfolioError } =
    UseFetch("/portfolio.json");
  const { data: choiceInputData, error: choiceInputError } = UseFetch(
    "/input-choice-tekno.json"
  );
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (portfolioData) {
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

  const filteredProjects = portfolioData.filter(
    (projet) =>
      selectedTypes.length === 0 ||
      projet.type.some((type) => selectedTypes.includes(type))
  );

  return (
    <>
  
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

      <div className="w-full flex flex-wrap items-center justify-center ">
        {filteredProjects.map((projet, index) => (
          <div className="cardPortfolio shadow-md  shadow-neutral-500/50 space-y-5" key={index}>
            <div className="relative contain-img-text">
              <div className="containImg absolute shadow-xl  shadow-neutral-500/50">
                {isLoading ? (
                  <div className="icon">
                    <i className="fas fa-spinner fa-pulse"></i>
                  </div>
                ) : (
                  <img src={projet.imageSrc} alt={projet.titre}  />
                )}
              </div>
              <div className="hovver text-center absolute transition flex justify-center items-center hover:bg-pink-400">
                <p>{projet.description}</p>
              </div>
            </div>

            <div className="flex flex-col justify-between cursor-pointer items-center ">
              <div className=" w-5/6 mt-2 text-center p-1">
                <Flex gap="4">
                  <HoverCard.Root>
                    <HoverCard.Trigger >
                      <Link href="#" > {projet.titre} </Link>
                    </HoverCard.Trigger>
                    <HoverCard.Content size="1">
                      <Flex gap="3" size="1" style={{ maxWidth: 325 }}>
                        <Avatar size="2"
                                radius="full"
                                fallback="R"
                                src={projet.imageSrc}/>
                        <Box>
                          <Text> 
                        <Strong>{projet.titreHover} </Strong> 
                          </Text>
                          <Text as="div" color="gray">
                          {projet.text1}         
                          </Text>
                          <Text as="div" mt="3" >
                          {projet.text2}
                          </Text>
                          <Text as="div"  >
                          {projet.text3}
                          </Text>
                          <Text as="div"  >
                          {projet.text4}
                          </Text>
                        </Box>
                      </Flex>
                    </HoverCard.Content>
                  </HoverCard.Root>
                </Flex>
              </div>

              <ul className="flex flex-row-reverse items-center w-full  justify-between ulVoir ">
                <li>
                  <CustomBoutonn
                    icon={faArrowRight}
                    link={projet.lien}
                    text="visiter"
                  />
                </li>

                <li>
                  <CustomBoutonn
                    icon={faCode}
                    link={projet.lienCode}
                    text="code"
                  />
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
