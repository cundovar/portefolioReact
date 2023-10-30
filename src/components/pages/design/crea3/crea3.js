import React from "react";
import UseFetch from "../../../hooks/useFetch";

import Slider from "react-slick";
import { useRef } from "react";

const Crea3 = () => {
  const jsonUrl = "/creatrois.json";
  const { data: crea3Data, error: creaError } = UseFetch(jsonUrl);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    fade: true,
  };
  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="w-full pl-3 pr-3 mr-10 relative 2xl:p-5 xl:p-16 max-md:mt-10">
      <div className=" relative   ">
        <Slider {...settings} ref={sliderRef}>
          {crea3Data.map((item, index) => (
            <div key={index}>
              <div className="flex max-sm:flex-col  z-20">
                <div className="w-7/12 max-sm:w-full h-full relative">
                  {/* <nav className="flex absolute  ">
                    <div className=" ">
                      <h2>room</h2>
                    </div>
                    <div>
                      <ul className="flex space-x-7 z-50">
                        <li>home</li>
                        <li>shop</li>
                        <li>about</li>
                        <li>contact</li>
                      </ul>
                    </div>
                  </nav> */}

                  <img className="w-full" src={item.img} alt={item.titre} />
                </div>
                <div className="w-5/12 max-sm:w-full relative h-12/12 flex flex-col  ">
                  <div className="xl:m-3 xl:mt-10 h-8/12 2xl:space-y-10 ">
                    <h1 className="text-bold 2xl:text-6xl xl:text-2xl xl:h-10  2xl:h-32 xl:ml-10   max-sm:p-2">{item.titre} </h1>

                    <p className= "  max-sm:p-3 2xl:w-8/12 sm:w-full xl:h-36 text-lg text-justify xl:ml-10  2xl:h-56">
                      {item.texte}{" "}
                    </p>
                    <div className=" w-full xl:mt-20 max-sm:mb-3    xl:ml-10  ">
                      <div className="flex    items-center max-sm:justify-center mb-3 space-x-5 2xl:w-3/4 ">
                        <p className="cursor-pointer xl:text-4xl max-sm:text-xl">{item.shop} </p>
                        <div className="cursor-pointer flex items-center justify-center z-20  ">
                          <img
                            className="cursor-pointer xl:h-5  z-20"
                            src={item.arrow}
                            alt="icon arrow"
                          />
                        </div>
                      </div>
                    </div>

                    <div className=" absolute max-sm:left:20 max-sm:-top-14 max-sm:w-1/3 max-sm:h-2/12  left-0 bottom-0 ml-0  xl:w-1/3">
                      <div className="  bg-stone-900 2xl:h-6/12 flex xl:w-full max-sm:h-3/12 ">
                        <button
                          className="h-full  w-1/2 flex intems-center justify-center xl:p-3 max-sm:p-4  2xl:p-10 hover:bg-stone-400 cursor-pointer"
                          onClick={prevSlide}
                        >
                          <img
                            src="/images/crea3/icon-angle-left.svg"
                            alt=""
                            className=""
                          />
                        </button>

                        <button
                          className="h-full  hover:bg-stone-400 w-1/2 flex intems-center max-sm:p-4   justify-center xl:p-3 2xl:p-10  cursor-pointer"
                          onClick={nextSlide}
                        >
                          <img
                            src="/images/crea3/icon-angle-right.svg"
                            alt=""
                            className=""
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="mb-10 flex max-sm:flex-col w-12/12">
        <div className="w-3/12 max-sm:w-full ">
          <img src="/images/crea3/dark.jpg" className="w-full" alt="" />
        </div>
        <div className="w-6/12  max-sm:w-full flex flex-col justify-center text-justify  items-center 2xl:p-10 xl:pr-4 xl:pl-4 space-y-5 ">
          <div className="w-full flex flex-col jusfy-center items-center">
            <h2 className="font-bold">About our furniture</h2>
          </div>
          <div className="pr-5 pl-5">
            <p className="text-stone-500  ">
              {" "}
              Our multifunctional collection blends design and function to suit
              your individual taste. Make each room unique, or pick a cohesive
              theme that best express your interests and what inspires you. Find
              the furniture pieces you need, from traditional to contemporary
              styles or anything in between. Product specialists are available
              to help you create your dream space.
            </p>
          </div>
        </div>
        <div className="w-3/12  max-sm:w-full overflow-hidden ">
          <img src="/images/crea3/light.jpg" className="w-full h-full"  alt="" />
        </div>
      </div>
    </section>
  );
};

export default Crea3;
