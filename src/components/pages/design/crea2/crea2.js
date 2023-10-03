import React, { useState } from "react";
import Modal from "./modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Crea2 = () => {

   const [imagePrincipal, setImagePrincipal]=useState("/images/crea2/image-product-1.jpg")
   const [modalOpen,setModalOpen]=useState(false)
   const changeImage=(imageNew)=>{
    setImagePrincipal(imageNew)
   }

   const openModal=()=>{
    setModalOpen(true)
   }
   const closeModal=()=>{
    setModalOpen(false)
   }
  return (
    <>
      <div>
        <section className="bg-stone-500 w-full p-10  flex items-center space-x-5 px-40 justify-center mb-96">
          <div className="left w-1/2   bg-pink-200 flex flex-col   justify-center items-center">
            <div className="image bg-pink-400 h-2/3 w-2/3 space-y-5 flex flex-col items-center justify-center">
              <div className="w-full">
                <img
                  src={imagePrincipal}
                  className=" w-full rounded-xl"
                  alt="product-principal"
                  onClick={openModal}
                />
              </div>

              <div className="allSmallImage h-1/3 w-full bg-pink-300 space-x-5 flex  ">
                <div className="Smallimage w-44 h-44 bg-stone-400">
                  <img
                    src="/images/crea2/image-product-1.jpg"
                    className= {`w-full h-auto rounded-xl ${imagePrincipal==="/images/crea2/image-product-1.jpg" ? 'border-2 border-orange-700  opacity-50':''}` }
                    alt="product-1"
                    onClick={()=>
                      changeImage("/images/crea2/image-product-1.jpg")
                    }
                    
                  />
                </div>
                <div className="Smallimage w-44 bg-stone-400">
                  <img
                    src="/images/crea2/image-product-2.jpg"
                    className= {`w-full h-auto rounded-xl ${imagePrincipal==="/images/crea2/image-product-2.jpg" ? 'border-2 border-orange-700  opacity-50':''}` }
                    alt="product-2"
                    onClick={()=>
                        changeImage("/images/crea2/image-product-2.jpg")
                    }

                  />
                </div>
                <div className="Smallimage w-44  bg-stone-400 ">
                  <img
                    src="/images/crea2/image-product-3.jpg"
                    alt="product-3"
                    onClick={()=>
                        changeImage("/images/crea2/image-product-3.jpg")
                    }
                    className= {`w-full h-auto rounded-xl ${imagePrincipal==="/images/crea2/image-product-3.jpg" ? 'border-2 border-orange-700  opacity-50':''}` }
                  />
                </div>
                <div className="Smallimage w-44  bg-stone-400">
                  <img
                    src="/images/crea2/image-product-4.jpg"
                    className= {`w-full h-auto rounded-xl ${imagePrincipal==="/images/crea2/image-product-4.jpg" ? 'border-2 border-orange-700  opacity-50':''}` }
                    alt="product-4"
                    onClick={()=>
                        changeImage("/images/crea2/image-product-4.jpg")
                      }
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="right w-1/2  bg-pink-200 flex flex-col space-y-10 p-10  justify-center">
            <div className="flex flex-col space-y-10 w-5/6">

            <div className="title">
              <div>
                <h2 className="text-orange-500">SNEAKER COMPAGNY</h2>
              </div>
              <div>
                <h1 className="text-7xl">Fall Limited Edition</h1>
                <h1 className="text-7xl">Sneakers</h1>
              </div>
            </div>
            <div className="text w-4/6 text-justify">
              loremqfs uierp ierhpguipzhp irzghiu pzhguiphzpiu irzghiupehgiz hp
              gzh'ig gdfgdgddggd gdgdgdgdg dgdfgdgd gdgdgdgdg dgdgdgdgdg gdgd
              dgdgdg gdgd hdh dhhh dhgdh hh rh hr rhrhrhr h r rhrhr
              irzhgpzihgihziuh gizeiuhh ih gizh
            </div>
            <div className="flex items-center space-x-5">
            <div className="price text-4xl"> 354£</div>
            <div className="bg-orange-500 text-orange-900 p-1 rounded font-bold">50%</div>

            </div>
          
            <div className="panier flex h-3.5 space-x-5 ">
              <div className="cursor w-1/3 flex">
                <div className="w-1/3 border border-stone-900 flex items-center justify-center p-4  ">+</div>
                <div className="w-1/3 border border-stone-900 flex items-center justify-center p-4  ">0</div>
                <div className="w-1/3 border border-stone-900 flex items-center justify-center p-4  ">-</div>
              </div>
              <button className="flex items-center w-2/3 bg-pink-500 p-5">
                <div>   <FontAwesomeIcon icon={faCartShopping} /></div>
                <div>ajout au panier</div>
              </button>
            </div>
            </div>
          </div>
        </section>
        {modalOpen && (
            <Modal image={imagePrincipal} closeModal={closeModal}/>
        )}
      </div>
    </>
  );
};

export default Crea2;
