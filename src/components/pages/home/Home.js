import React from "react";
import Presentation from "./components/02presentation/presentation";
import Competance from "./components/03competance/competance";
import Portefolio from "./components/04portefolio/portefolio";

const Home =()=>{


    return (
        
        

        <div className="home flex flex-col items-center justify-center space-y-5 hover:bg-red-300">

            <Presentation/>
            <Competance/>
            <Portefolio/>





        </div>


        
    )
}


export default Home;