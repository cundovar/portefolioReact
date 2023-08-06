import React from "react";
import Realisation from "./components/realisation";


const Present=()=>{


    return(
        <div className="w-full flex">
            <div className="w-1/2">
                <div className="w-full">
                    <h3>Service et prestation</h3>
                </div>
                <div className="w-full">
                    <p>Les gabarits livrés sont conformes aux normes W3C. Le code mis en place est sémantique, indenté et commenté. Les pages sont accessibles, optimisées pour le référencement et leur performance est considérée avec attention.</p>
                    <p>Les pages intégrées sont responsives. Leur compatibilité avec les navigateurs et les résolutions courantes est rigoureusement contrôlée sur les différents supports (mobile, tablette, desktop).</p>
                    <p>-Technologies : HTML5, CSS3</p>
                    <p>-Approche modulaire, travail en composants CSS </p>
                    <p>- Pre-Processors : SASS</p>
                    <p></p>
                </div>
            </div>
            <div className="w-1/2">
                <div className="w-full">
                    <h4>Quelques réalisations</h4>
                </div>
                <div className="w-full">
                    <Realisation/>
                </div>
            </div>
        </div>
    )
}

export default Present