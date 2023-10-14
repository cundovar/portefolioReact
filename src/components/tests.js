import React from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

const Test =()=>{

    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{

        gsap.to(".b",{
            scrollTrigger:{
                trigger:".b",
                toggleActions:"restart none none none",
                // play pause resume reverse restart reset complete none
                // start:"top bottom",
                start:"20px 80%",

                //  top de la div bottom de la fenêtre
                // top center bottom pixels pouventages relative to top
             
            },
            x:400,
            rotation:360,
            duration:3

    })
        gsap.to(".a",{
            scrollTrigger:{
                trigger:".a",
                toggleActions:"restart pause resume pause"
                // play pause resume reverse restart reset complete none
            },
            x:400,
            rotation:360,
            duration:3

    })

    gsap.to(".gosth",{
        scrollTrigger:{
            trigger:".gosth",

            start:"top bottom",
            end:"top 100px",
             scrub:1,
            markers:true
        },
        x:400,
        rotation:360,
        duration:5,
        ease:"none",
       

    })
   
    gsap.to(".c",{
        scrollTrigger:{
            trigger:".gosth",
      
            start:"top bottom",
            end:"top 100px",
             scrub:true,
            markers:true
        },
        x:400,
        rotation:360,
        duration:5,
        ease:"none",
       

    })
   

    } )

    return(
        <>
            <div className="space-y-96 pb-96 mb-96 ">



                <div className="w-20 h-20 bg-amber-500 a flex items-center justify-center ">a</div>
                <div className="w-20 h-20 bg-amber-500 b flex items-center justify-center ">b</div>
                <div className="w-20 h-20 z-10 bg-amber-900 gosth absolute flex items-center justify-center ">gosth</div>
                <div className="w-20 h-20 z-20 bg-amber-500 c flex items-center justify-center ">c</div>

            </div>
            <div className="h-96"></div>

        </>
    )
}

export default Test