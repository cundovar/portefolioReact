import React, { useState } from "react";
import UseFetch from "../../../../../hooks/useFetch";

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
        <div className="carousel-container">
          <div className="carousel-item">
            <div className="imgPortfolio">
              <img src={data[currentItem].imageSrc} alt={data[currentItem].titre01} />
            </div>
            <div className="">
              <div className="">
                <h4>{data[currentItem].titre01}</h4>
                <h5></h5>
              </div>
              <div className="">
                <p>{data[currentItem].description01}</p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="carousel-buttons">
            <button onClick={handlePrev} disabled={currentItem === 0}>
              Previous
            </button>
            <button onClick={handleNext} disabled={currentItem === data.length - 1}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Realisation;