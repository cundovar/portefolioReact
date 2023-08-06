import React from "react";




const Photo=()=>{


    return(

        <div className="text_competence w-1/3 ">
         <h5>truc</h5>
           <div className="flex">
            <div className="space-y-3 W-1/3 flex flex-col items-center justify-center">
                 <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-linkedin"></i>
                <p>CV</p>
            </div>
            <div className="w-2/3 flex items-center justify-center">
                <img src="/public/images/moi.jpg"/>
            </div>
           </div>
        </div>
    )
}


export default Photo