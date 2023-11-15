import React from "react";
import UseFetch from "../../../hooks/useFetch";
import styled from "styled-components";
import { Button, Stack } from "react-bootstrap";


const Header =()=>{
   const {data:articleData, error:erreur}= UseFetch('https://fakestoreapi.com/products/category/electronics')
    
   const StyledHeaderContainer = styled.div`
   padding: 20px;
   background-color: #f8f9fa;
   border-bottom: 1px solid #dee2e6;
`;

const StyledHeaderTitle = styled.h1`
   color: #007bff;
`;

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


        <StyledHeaderContainer>
            <StyledHeaderTitle>Ma Page avec Bootstrap</StyledHeaderTitle>
            <button className="btn btn-danger">Bouton Bootstrap</button>
            <div className="row">

                <div>hgjkgkg</div>
                <div>hgjkgkg</div>
                <div>hgjkgkg</div>
                <div>hgjkgkg</div>
            </div>
            {/* Autres éléments spécifiques à Bootstrap */}
        </StyledHeaderContainer>
    
        </>
    )
}

export default Header