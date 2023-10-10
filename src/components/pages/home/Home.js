import React from "react";
import Presentation from "./components/02presentation/presentation";
import Competance from "./components/03competance/competance";
import Portefolio from "./components/04portefolio/portefolio";
import { Helmet } from "react-helmet";

const Home =()=>{

    const Meta=()=>{
        return(
            <div>
                <Helmet>
                    <title> Paged'accueil - Mon portfolio dévéloppeur web</title>
                    <meta
                    name="accueil de mon portafolio, on peut y trouver mes compétences en dévéloppememts web, les technologie web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"
                    content="Bienvenue sur notre site Web. Découvrez mes services et réalisations.page d'accueil de mon portafolio, on peut y trouver mes compétences en dévéloppememts web, les technologie web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"
                    />
                </Helmet>
            </div>

        )
    }


    return (
        <>
      <Meta/>
     
        <div className="home bg-stone-300 mt-52 relative  flex flex-col items-center justify-center space-y-5  max-lg:w-full max-lg:p-0 ">

          
            <div className="w-5/6  flex flex-col items-center justify-center space-y-30 pt-48"> <Competance/></div>
            <div className="w-5/6 max-lg:6/6 flex flex-col items-center justify-center "><Portefolio/></div>
          
           
            





        </div>
        </>


        
    )
}


export default Home;