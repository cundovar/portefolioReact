import React from "react";

import Crea1 from "./crea1/crea1";
import Crea3 from "./crea3/crea3";
import Crea2 from "./crea2/crea2";
import { Helmet } from "react-helmet";
import CardCrea from "./cardCrea";
import { NavLink } from "react-router-dom";

const Design = () => {
  const Meta = () => {
    return (
      <div>
        <Helmet>
          <title> Page exercice - Mon portfolio dévéloppeur web</title>
          <meta
            name="accueil de mon portafolio, on peut y trouver mes compétences en dévéloppememts web, les technologie web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"
            content="Bienvenue sur sur ma page web de gabarit d'exemples. Découvrez mes services et réalisations.page d'accueil de mon portafolio, on peut y trouver mes compétences en dévéloppememts web, les technologie web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"
          />
        </Helmet>
      </div>
    );
  };

  return (
    <>
      <Meta />
      <section className="border w-full h-full border-black contact sectionDesign">
  
          <h1 className="title">Gabarits</h1>
        <div className=" ">
          
          <div className="flex items-center justify-center space-x-6">


          <NavLink to ="/creation2">
            <CardCrea
              dataImage="/images/design-crea/Crea3.PNG" >
              <h1 slot="header">page produit</h1>
           
              <p slot="content">
               produit individuel, choix des photos, modal-carousel.Reponsive,taiwlind.
              </p>
            </CardCrea>
            </NavLink>

            <NavLink to ="/creation3">
            <CardCrea dataImage="/images/design-crea/Crea2.PNG">
              <h1 slot="header">Page d'accueil</h1>
              <p slot="content">
                Page d'accueil avec carousel, reponsive, taiwlind.              </p>
            
            </CardCrea>

            </NavLink>

            <NavLink to ="/creation1">
            <CardCrea dataImage="/images/design-crea/Crea1.PNG">
              <h1 slot="header">Divers</h1>
              <p slot="content">
                Multiples exemples de gabaris, créés avec tailwind.
              </p>
            </CardCrea>

            </NavLink>
            {/* <NavLink to ="/creation3">

            <CardCrea dataImage="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop=">
              <h1 slot="header">Lakes</h1>
              <p slot="content">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </CardCrea>
            </NavLink> */}
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center">
          <Crea2 />
          <Crea3 />

          <Crea1 />
        </div> */}
      </section>
    </>
  );
};

export default Design;
