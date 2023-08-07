import React from "react";
import Realisation from "./realisation";


const Present = () => {
  return (
    <div className="w-full flex flex-row-reverse">
      <div className="w-2/5 ">
        <div className="w-full border-b mb-8 ">
          <h3>Service et prestation</h3>
        </div>
        <div className="w-6/6 space-x-6  flex">
          <div className="trois-boutons">
            <ul className="flex  flex-col items-center justify-center">
              <li className="boutons">1</li>
              <li className="boutons">2</li>
              <li className="boutons">3</li>
            </ul>
          </div>
          <div className="w-1/2 text-justify space-y-3">
            <p>
              Les gabarits livrés sont conformes aux normes W3C. Le code mis en
              place est sémantique, indenté et commenté. Les pages sont
              accessibles, optimisées pour le référencement et leur performance
              est considérée avec attention.
            </p>
            <p>
              Les pages intégrées sont responsives. Leur compatibilité avec les
              navigateurs et les résolutions courantes est rigoureusement
              contrôlée sur les différents supports (mobile, tablette, desktop).
            </p>
          </div>
          <div className="w-1/2 space-y-1">
            <p>-Technologies : HTML5, CSS3</p>
            <p>-Approche modulaire, travail en composants CSS </p>
            <p>- Pre-Processors : SASS</p>
            <p></p>
          </div>
        </div>
      </div>
      <div className="w-3/5">
        <div className="w-full border-b mb-8">
          <h3>Quelques réalisations</h3>
        </div>
        <div className="w-full space-y-3">
          <Realisation />
        </div>
      </div>
    </div>
  );
};

export default Present;
