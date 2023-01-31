import { useRef, useEffect } from "react";
import img from "../img.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const SectionAbout = (props: Props) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { opacity: 0, translateX: "50px" },
      {
        opacity: 1,
        duration: 3,
        ease: "power4.inOut",
        translateX: "0",
        scrollTrigger: {
          trigger: el,
          start: "top 10%",
          end: "bottom 10%",
          scrub: 1,
          pin: true,
        },
      }
    );
  }, []);

  return (
    <section
      className="grid lg:grid-cols-3 grid-col-2 pb-9 lg:gap-10 p-5 h-auto"
      ref={imgRef}
      id="about"
    >
      <div className="lg:col-span-1 h-auto mx-auto col-span-2">
        <img
          src={img}
          alt="ndr"
          className="w-full object-scale-down h-96 lg:h-3/4 object-top rounded-xl"
        />
      </div>
      <div className="lg:col-span-2 lg:content-center">
        <p className="font-[poppins] dark:text-gray-400 leading-snug lg:text-4xl text-2xl overflow-hidden">
          <span role="img" aria-label="vulcan">
            👋{" "}
          </span>
          <span className="bg-gradient-to-r from-yellow-ndr to-white bg-clip-text text-transparent">
            Salut ! Je m'appelle Christevie et je suis développeur Back-End Et 
            Pentester !
          </span>
        </p>
        <p className="text-white/70 font-[poppins] dark:text-gray-400 leading-snug pt-6 lg:text-xl text-md overflow-hidden">
        Grand passionné de l'informatique,{" "}
          <span className="text-white">je suis développeur </span> 
          web, mobile et pentester junior.
          <br />
          <br /> De nature curieuse, J'apprends et je m'adapte très vite et 
          je ne mets souvent pas{" "}
          <span className="text-white">
          longtemps à trouver des solutions.
          </span>{" "}

        </p>
      </div>
    </section>
  );
};

export default SectionAbout;
