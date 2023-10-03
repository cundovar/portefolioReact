import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Modal=({image,closeModal} )=>{

    return(
        <div className="modal absolute top-0 w-1/3 left-20">
            <div className="modal-content">
                <span className="close"
                onClick={closeModal}
                >
                 
                    <FontAwesomeIcon icon={faCartShopping} />

                </span>
                <img src={image} alt=""/>
            </div>
        </div>
    )
}

export default Modal