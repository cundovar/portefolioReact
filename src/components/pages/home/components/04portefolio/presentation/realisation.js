import React, { useState } from "react";
import UseFetch from "../../../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";


const Realisation = () => {
  const { data, error } = UseFetch("/realisation.json");
  const [currentItem, setCurrentItem] = useState(0);

  if (error) {
    console.log("Error fetching data");
  }

  const handleNext = () => {
    setCurrentItem((prevItem) => (prevItem + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentItem((prevItem) => (prevItem - 1 + data.length) % data.length);

  };

  return (
    <>
      {data.length > 0 && (
        <div className="carousel-container w-full  ">
          <div className="carousel-item flex lg:space-x-2 justify-center w-full max-lg:flex-col max-lg:space-y-2">

            <div className="imgPortfolio w-4/6 max-lg:w-full  flex relative">
            <button id="preview"
                    className="absolute backdrop-blur-xl" 
                    onClick={handlePrev}
                    disabled={currentItem === 0}>

              <FontAwesomeIcon className="nextPre" icon={faAngleRight} rotation={180} style={{color: "#ec69c3",}} />
            </button>

              <img src={data[currentItem].imageSrc} alt={data[currentItem].titre01} className="carouselImg" />

            <button id="next"
                    className="absolute backdrop-blur-xl"
                    onClick={handleNext}
                    disabled={currentItem === data.length - 1}>
                      
               <FontAwesomeIcon icon={faAngleRight} className="nextPre" style={{color: "#ec69c3",}} />
            </button>
            </div>


            <div className="bg-neutral-300 responsiTitreDescrip p-2 lg:w-3/6 2xl:w-2/6 max-lg:w-full ">
              <div className="">
                <h4>{data[currentItem].titre01}</h4>
                <h5></h5>
              </div>
              <div className="">
                <p className="text-justify mt-1 px-1"> {data[currentItem].description01}</p>
                <p className="text-justify mt-1 px-1">{data[currentItem].description02}</p>
              </div>
            </div>
          </div>
          <div className="carousel-buttons">
           
           
          </div>
        </div>
      )}
    </>
  );
};

export default Realisation;