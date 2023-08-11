import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@radix-ui/themes";




const CustomBoutonn=({link,icon,text,id,className,type} )=>{


    return(
        <>
                     

                   <Button color="crimson" variant="soft" type={type} className= {`${className}`} id={id}>
                   <a href={link}>{text}</a>
                   <span><FontAwesomeIcon icon={icon} /></span>
                   </Button>
        </>
    )
}

export default CustomBoutonn