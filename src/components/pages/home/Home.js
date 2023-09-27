import React from "react";
import Presentation from "./components/02presentation/presentation";
import Competance from "./components/03competance/competance";
import Portefolio from "./components/04portefolio/portefolio";

const Home =()=>{


    return (
        
        

        <div className="home relative flex flex-col items-center justify-center space-y-5 mb-20 ">
          
            <div className="w-5/6 flex flex-col items-center justify-center"> <Competance/></div>
            <div className="w-5/6 flex flex-col items-center justify-center "><Portefolio/></div>
          
           
            





        </div>


        
    )
}


export default Home;