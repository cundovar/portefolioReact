import React from "react";
import CardPortfolio from "../home/components/04portefolio/card/card";
import { Helmet } from "react-helmet";

const PortefolioPage=()=>{

    const Meta=()=>{
        return(
            <div>
            <Helmet>
                <title> Page de mes realisations - Mon portfolio dévéloppeur web</title>
                <meta
                name=" Voici mon portafolio, on peut y trouver  les technologies web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"
                content="Bienvenue sur mon site Web. Découvrez mes services et réalisations.Voici mon portafolio, on peut y trouver  les technologie web que j'utilise et quelques exemples de projets en tant que dévéloppeur ou intégrateur web"/>
            </Helmet>
        </div>
        )
    }

    return(
        <>
        <Meta/>
        <div className="w-full bg-stone-300 px-10">
            <div className="w-full border-b ">
                <h3>Portfolio</h3>
            </div>
            <CardPortfolio/>

        </div>
        
        </>
    
    )
}

export default PortefolioPage