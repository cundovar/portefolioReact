import React, { useState } from "react";
import UseFetch from "../../../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useRef } from "react";

const Realisation = () => {
  const { data, error } = UseFetch("/realisation.json");
  const [currentItem, setCurrentItem] = useState(0);

  if (error) {
    console.log("Error fetch data");
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  };
  const sliderRef = useRef();

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, index) => (
          <div key={index}>
            <div className="carousel-container   ">
              <div className="carousel-item flex lg:space-x-2 justify-center w-full max-lg:flex-col max-lg:space-y-2 ">
                <div className="imgPortfolio xl:w-2/3 2xl:h-full   max-lg:w-full  flex relative rounded-2xl ">
                  <button
                    id="preview"
                    className="absolute backdrop-blur-xl"
                    onClick={handlePrev}
                    disabled={currentItem === 0}
                  >
                    <FontAwesomeIcon
                      className="nextPre"
                      icon={faAngleRight}
                      rotation={180}
                      style={{ color: "#ec69c3" }}
                    />
                  </button>

                  <img
                    src={item.imageSrc}
                    alt={item.titre01}
                    className="carouselImg w-full "
                  />

                  <button
                    id="next"
                    className="absolute backdrop-blur-xl"
                    onClick={handleNext}
                  >
                    <FontAwesomeIcon
                      icon={faAngleRight}
                      className="nextPre"
                      style={{ color: "#ec69c3" }}
                    />
                  </button>
                </div>

                <div className="bg-neutral-300 responsiTitreDescrip xl:w-1/3 p-2 lg:w-3/6  max-lg:w-full ">
                  <div className="">
                    <h4>{item.titre01}</h4>
                    <h5></h5>
                  </div>
                  <div className="">
                    <p className="text-justify mt-1 px-1">
                      {" "}
                      {data.description01}
                    </p>
                    <p className="text-justify mt-1 px-1">
                      {data.description02}
                    </p>
                  </div>
                </div>
              </div>
              <div className="carousel-buttons"></div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Realisation;
