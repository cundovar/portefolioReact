import React from "react";
import UseFetch from "../../../hooks/useFetch";
import { Button, Stack } from "react-bootstrap";



const Header =()=>{
   const {data:articleData, error:erreur}= UseFetch('https://fakestoreapi.com/products/category/electronics')
    


    return(
        <>
        <div className="flex flex-wrap">

        {articleData.map((items,index)=>(
            <div key={index}>
           <div className="m-5">

                <div>{items.title} </div>
                <div className="h-20 w-20">
                    <img src={items.image} alt={items.title}/>
                </div>
            </div>

           </div>

    ))}

<Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Button as link
  </Button>
  <Button as="a" variant="success">
    Button as link
  </Button>
</Stack>;
        </div>
        </>
    )
}

export default Header