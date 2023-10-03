import "./App.css";
import Pages from "./components/pages/pages";
import { Theme } from "@radix-ui/themes";
import { gsap } from "gsap";

function App() {
  window.addEventListener("load", loader);
  function loader() {
    const timeLoad = gsap.timeline();

    timeLoad
      .to(".rectangle2", {
        height: 250,
        duration: 1.3,
        delay: 0.4,
        ease: "power2.out",
      })
      .to(".carre", {
        height: 200,
        duration: 1.6,
        delay: 0.4,
        ease: "power2.out",
      })
      .to(
        ".rectangle",
        { height: "auto", duration: 0.6, ease: "power2.out" },
        "-=0.8"
      )
      .to(".rectangle h1", { y: 0, ease: "power2.out" }, "-=0.6")
    .to('.pageLoader',{opacity:0,duration:0.8,delay:0.7})
    .add(()=>{
      document.querySelector('.pageLoader').style.display="none"
    })
  }
  return (
    <Theme>
      <div className="pageLoader flex items-center  justify-center absolute  ">
        <div className="rond relative">


        <div className="carre absolute  flex flex-wrap">
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          <div className="  fenetre2"></div>
          
        </div>
        <div className="rectangle2 absolute flex flex-wrap">
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
          <div className="fenetre"></div>
        </div>

        <div className="rectangle absolute">
          <h1>CONSTRuCT</h1>
        </div>



        </div>
     
      </div>
      <div className="bg-neutral-200 font">
        <Pages />
      </div>
    </Theme>
  );
}

export default App;
