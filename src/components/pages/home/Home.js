import React from "react";

import { Helmet,HelmetProvider } from "react-helmet-async";



import { Competance } from "./components/competance";

const Home =()=>{

    

    const Meta=()=>{
        return(
            <div>
                <HelmetProvider>

                <Helmet>
                    <title> Paged'accueil - Mon portfolio dévéloppeur web</title>
                    <meta
                    name="accueil de mon portafolio, on peut y trouver mes compétences en dévéloppememts web, les technologie web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"
                    content="Bienvenue sur notre site Web. Découvrez mes services et réalisations.page d'accueil de mon portafolio, on peut y trouver mes compétences en dévéloppememts web, les technologie web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"
                    />
                </Helmet>
                </HelmetProvider>
            </div>

        )
    }


    return (
        <>
      <Meta/>
     
        <section className="home   relative  flex flex-col items-center justify-center space-y-5  max-lg:w-full max-lg:p-0 ">

          
            <div className="w-full 2xl:w-5/6  flex flex-col items-center justify-center space-y-30 "> <Competance/></div>
            {/* <div className="w-full 2xl:w-5/6 max-lg:6/6 flex flex-col items-center justify-center  "><Portefolio/></div> */}
          
           
          
        
            





        </section>
        </>


        
    )
}


export default Home;