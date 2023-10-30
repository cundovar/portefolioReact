import React from "react";

import Crea1 from "./crea1/crea1";
import Crea3 from "./crea3/crea3";
import Crea2 from "./crea2/crea2";
import { Helmet } from "react-helmet";
import CardCrea from "./cardCrea";
import { NavLink } from "react-router-dom";

const Design = () => {


  return (
    <>
    
      <section className=" w-full h-full   flex flex-col items-center  contact ">

        <div className=" w-5/6 max-sm:mt-7 ">


          <h3 className=" w-full border-b mt-10 max-sm:m-0 mb-9 max-sm:mb-12 ">Travaux</h3>
        <div className=" flex flex-wrap items-center justify-center cardH xl:h-96 max-sm:h-full ">
          
          <div className="flex max-sm:flex-wrap items-center justify-center lg:space-x-6">


          <NavLink to ="/portfolio/crea2">
            <CardCrea
              dataImage="/images/design-crea/Crea3.PNG" >
              <h1 slot="header">page produit</h1>
           
              <p slot="content">
               produit individuel, choix des photos, modal-carousel.Reponsive,taiwlind.
              </p>
            </CardCrea>
            </NavLink>

            <NavLink to ="/portfolio/crea3">
            <CardCrea dataImage="/images/design-crea/Crea2.PNG">
              <h1 slot="header">Page d'accueil</h1>
              <p slot="content">Page d'accueil avec carousel,</p>
              <p slot="content"> reponsive, </p>
              <p slot="content">  taiwlind.</p>
            
            </CardCrea>

            </NavLink>

            <NavLink to ="/portfolio/crea1">
            <CardCrea dataImage="/images/design-crea/Crea1.PNG">
              <h1 slot="header">Divers</h1>
              <p slot="content">
                Multiples exemples traveaux, créés avec tailwind.
              </p>
            </CardCrea>

            </NavLink>
           <a href="https://portfolio.varascundo.com/main2/violet"  target="_blank" rel="noopener noreferrer">

            <CardCrea dataImage="/images/taxi.PNG">
              <h1 slot="header">Page e-commerce</h1>
              <p slot="content">
             HTML5,
              </p>
              <p slot="content">
             BOOTSTRAP,
              </p>
              <p slot="content">
             JAVASCRIPT
              </p>
            </CardCrea>

           </a>
       

        
        


       
          </div>
        </div>

  
 
        </div>
  
      </section>
    </>
  );
};

export default Design;
