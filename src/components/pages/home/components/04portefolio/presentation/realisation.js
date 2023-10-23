import React, { useEffect, useState } from "react";
import UseFetch from "../../../../../hooks/useFetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useRef } from "react";
import ScrollMagic from "scrollmagic";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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


  gsap.registerPlugin(ScrollTrigger);

  useEffect(()=>{
   
    gsap.to(".ff", {
      x: "200%",
      scrollTrigger: {
        duration: 0.8,
        trigger: ".ff", // L'élément qui déclenchera l'animation
  
       start:"center bottom",
       end:"center center",
        // markers: true,
        scrub: false,
        triggerOnce: true,
      },
  })
 
  });
 

  return (
    <div className="scroll">
      <Slider {...settings} ref={sliderRef}>
        {data.map((item, index) => (
          <div key={index}>
            <div className="carousel-container relative h-96   " >
              <div className="carousel-item flex  lg:space-x-2  w-full max-lg:flex-col max-lg:space-y-2 ">
                <div className="imgPortfolio absolute xl:w-2/3 xl:h-full max-sm:relative   max-lg:w-full  flex  rounded-2xl ">
                  <button
                    id="preview"
                    className="absolute backdrop-blur-xl cursor-pointer"
                    onClick={handlePrev}
               
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

                <div className="bg-pink-200 triggerss ff h-96 responsiTitreDescrip xl:w-1/3 p-2 lg:w-3/6  max-lg:w-full 2xl:flex  " >
                  <div className=" 2xl:w-2/3 2xl:border-r">
                    <div >
                      <h4>{item.titre01}</h4>
                      <h5></h5>
                    </div>
                    <div>
                      <p className="text-justify mt-1 px-1">
                        {" "}
                        {data.description01}
                      </p>
                      <p className="text-justify mt-1 px-1">
                        {data.description02}
                      </p>
                    </div>
                  </div>
                  <div className="logoHome  2xl:w-1/3 border">
                    <h3>technologies</h3>
                    <div className="w-20">
                      <img
                        src="/images/logo/React.png"
                        alt="/images/logo/React.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-buttons"></div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Realisation;
