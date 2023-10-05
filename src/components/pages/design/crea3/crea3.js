import React from "react";
import UseFetch from "../../../hooks/useFetch";
import { useState } from "react";
import { useEffect } from "react";
import Slider from "react-slick";
import { useRef } from "react";

const Crea3 = () => {
  const jsonUrl = "/creatrois.json";
  const { data: crea3Data, error: creaError } = UseFetch(jsonUrl);

 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const sliderRef = useRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };



  return (
    <div className="relative">
      <nav className="flex absolute  ">
        <div className=" ">
          <h2>room</h2>
        </div>
        <div>
          <ul className="flex space-x-7">
            <li>home</li>
            <li>shop</li>
            <li>about</li>
            <li>contact</li>
          </ul>

          <p>gggg</p>
        </div>
      </nav>

      <section className="flex">
      <Slider {...settings} ref={sliderRef}>
          {crea3Data.map((item, index) => (
            <div key={index}>
              <div className="w-7/12">
                <img className="w-full" src={item.image} alt={item.titre} />
              </div>

              <div className="w-5/12 bg-pink-300 border border-orange-900">
                <div className="text_crea3 h-5/6 bg-stone-500 flex justify-center">
                  <div className="w-full p-10 space-y-10">
                    <h1 className="font-bold">{item.titre}</h1>
                    <p>{item.texte}</p>

                    <div className="hover:text-stone-400 cursor-pointer border">
                      <div className="flex border items-center space-x-5">
                        <h3>achetez maintenant</h3>

                        <img src="/images/crea3/icon-arrow.svg" alt="icon arrow" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="blacki h-full">
                  <div className="w-1/4 h-full bg-stone-900 h-1/6 flex">
                    <button className="h-full border w-1/2 flex intems-center justify-center p-10 hover:bg-stone-500 cursor-pointer">
                      <img
                        src="/images/crea3/icon-angle-left.svg"
                        alt=""
                        className=""
                        onClick={prevSlide}
                      />
                    </button>

                    <button className="h-full border w-1/2 flex intems-center justify-center p-10 hover:bg-stone-500 cursor-pointer">
                      <img
                        src="/images/crea3/icon-angle-right.svg"
                        alt=""
                        className=""
                        onClick={nextSlide}
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <div className=" bg-pink-300 flex">
        <div className="w-3/12 border boreder-strone-900">
          <img
            src="/images/crea3/dark.jpg"
            className="w-full"
            alt=""
          />
        </div>
        <div className="w-6/12  flex flex-col justify-center  items-center p-10 space-y-5 ">
          <div className="w-full">
            <h2 className="font-bold">About our furniture</h2>
          </div>
          <div>
            <p className="text-stone-500">
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
        <div className="w-3/12 border border-strone-900">
          <img
            src="/images/crea3/light.jpg"
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Crea3;
