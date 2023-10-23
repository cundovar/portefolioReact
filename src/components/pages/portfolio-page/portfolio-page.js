import React from "react";
import CardPortfolio from "../home/components/04portefolio/card/card";
import { Helmet } from "react-helmet";
import Design from "../design/design";

const PortefolioPage = () => {
  const Meta = () => {
    return (
      <div>
        <Helmet>
          <title>
            {" "}
            Page de mes realisations - Mon portfolio dévéloppeur web
          </title>
          <meta
            name="description"
            content="Bienvenue sur mon site Web. Découvrez mes services et réalisations.Voici mon portafolio, on peut y trouver  les technologie web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"
          />
        </Helmet>
      </div>
    );
  };

  return (
    <>
      <Meta />
      <div className="w-full flex flex-col items-center justify-center">
        <div className=" 2xl:w-5/6 xl:w-full  bg-stone-300  max-sm:px-5 flipContaine ">
          <div className="w-full border-b  mt-10 ">
            <h3>Portfolio</h3>
          </div>
          <div className="w-full ">

          <CardPortfolio />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortefolioPage;
