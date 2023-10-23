import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@radix-ui/themes";




const CustomBoutonn=({link,icon,text,id,className,type,onclick,target} )=>{


    return(
        <>
                     

                   <Button color="crimson" variant="soft" type={type} onClick={onclick} className= {`${className}`} id={id}>
                   <a href={link} target={target}>{text}</a>
                   <span><FontAwesomeIcon icon={icon} /></span>
                   </Button>
        </>
    )
}

export default CustomBoutonn