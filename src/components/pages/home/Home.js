import React from "react";
import Presentation from "./components/02presentation/presentation";
import Competance from "./components/03competance/competance";
import Portefolio from "./components/04portefolio/portefolio";

const Home =()=>{


    return (
        <>
      

        <div className="home relative flex flex-col items-center justify-center space-y-5  max-lg:w-full max-lg:p-0 ">

          
            <div className="w-5/6  flex flex-col items-center justify-center space-y-30"> <Competance/></div>
            <div className="w-5/6 max-lg:6/6 flex flex-col items-center justify-center "><Portefolio/></div>
          
           
            





        </div>
        </>


        
    )
}


export default Home;