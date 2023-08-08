import React from "react";
import UseFetch from "../../../hooks/useFetch";


const ChoiceTekno=()=>{


    const {data,error} = UseFetch("/input-choice-tekno.json");
    if(error){
        return <div>erreur chargement données</div>
    }


    return(
        <>

<div className="flex w-2/3 choice-tekno">


	



{data.map((items,index)=>(

        <div key={index} 
             style={{color:items.color,backgroundColor:items.background}} 
             className=" flex flex-col items-center justify-center input-choice-tekno  "
             >
<label className="checkbox-wrapper ">
			<input type="checkbox" className="checkbox-input  "
            style={{color:items.color,backgroundColor:items.background}} 
             />
			<span className="checkbox-tile">
				
				<span className="checkbox-label">{items.name} </span>
			</span>
		</label>
             
       
        </div>
        
        
        ))}

    </div>
        </>
    )
}

export default ChoiceTekno


