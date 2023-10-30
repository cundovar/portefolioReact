import React from "react";
import CardPortfolio from "./card";
import { Helmet,HelmetProvider } from "react-helmet-async";
 import Design from "../design/design";

const PortefolioPage = () => {
  const Meta = () => {
    return (
      <div>
        <HelmetProvider>

        <Helmet>
          <title>
            {" "}
            Page de mes realisations - Mon portfolio dévéloppeur web
          </title>
          <meta
            name="description facundo varas"
            content="Bienvenue sur mon site Web. Découvrez mes services et réalisations.Voici mon portafolio, on peut y trouver  les technologie web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"
          />
        </Helmet>
        </HelmetProvider>
      </div>
    );
  };

  return (
    <>
      <Meta />
      <section className="w-full flex flex-col items-center justify-center">
        <div className=" 2xl:w-5/6 xl:w-full   max-sm:px-5 flipContaine ">
          <div className="w-5/6 m-auto border-b  mt-10 max-sm:mb-12">
            <h3 className=" ">Portfolio</h3>
          </div>
          <div className="w-full ">

          <CardPortfolio />
           <Design/> 
          </div>
        </div>
      </section>
    </>
  );
};

export default PortefolioPage;
