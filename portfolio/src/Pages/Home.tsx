import { useRef, useEffect } from "react";
import codeurOpti from "../codeur.webp";
import SectionAbout from "../components/SectionAbout";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import SoftSkills from "../components/SoftSkills";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Projects from "../components/Projects";
import ScrollToTop from "../components/ScrollToTop";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.normalizeScroll(true);

export default function Home() {
  const imgRef = useRef(null);
  const imgComputRef = useRef(null);
  const imgButtonRef = useRef(null);
  const txtTest = useRef(null);
  const txtTestTwo = useRef(null);
  const textProjects = useRef(null);


  useEffect(() => {
    const el = imgRef.current;
    gsap.fromTo(
      el,
      { autoAlpha: 0, yPercent: -25, stagger: 0.1 },
      {
        autoAlpha: 1,
        duration: 2,
        ease: "power4.inOut",
        translateY: "0",
        yPercent: 0,
        scrollTrigger: {
          trigger: el,
          once: true,
        },
      }
    );

    const elComputer = imgComputRef.current;
    gsap.fromTo(
      elComputer,
      { scale: 0.8, autoAlpha: 0 },
      {
        scale: 1,
        ease: "power4.inOut",
        autoAlpha: 1,
        duration: 2,
        scrollTrigger: {
          trigger: elComputer,
          once: true,
        },
      }
    );

    const elButton = imgButtonRef.current;
    gsap.fromTo(
      elButton,
      { autoAlpha: 0, translateY: "10px" },
      {
        ease: "power4.inOut",
        autoAlpha: 1,
        duration: 2,
        translateY: "0",
        scrollTrigger: {
          trigger: elButton,
          once: true,
        },
      }
    );

    const elText = txtTest.current;
    gsap.fromTo(
      elText,
      { x: -2000, autoAlpha: 1, ease: "slowMo" },
      {
        scrollTrigger: {
          trigger: elText,
          scrub: 0.6,
          start: "top 30%",
          end: "top 50%",
        },
        x: "0",
      }
    );

    const elText2 = txtTestTwo.current;
    gsap.fromTo(
      elText2,
      { x: -2000, autoAlpha: 1, ease: "slowMo", duration: 1, },
      {
        scrollTrigger: {
          trigger: elText2,
          scrub: 0.6,
          start: "top 90%",
          end: "bottom 40%",
        },
        x: "0",
      }
    );

    const elTextprojects = textProjects.current;
    gsap.fromTo(
      elTextprojects,
      { x: -2000, autoAlpha: 1, ease: "slowMo" },
      {
        scrollTrigger: {
          trigger: elTextprojects,
          scrub: 0.6,
          start: "center center",
          end: "top 50%",
        },
        x: "0",
      }
    );
  }, []);

  return (
    <>
    <head>
    <meta property="og:image" content="%PUBLIC_URL%/sreen.jpg" />
    </head>

      <div className="fixed bottom-10 right-10 z-50">
        <ScrollToTop />
      </div>

      <div className="min-h-screen grid lg:grid-cols-2 content-center text-white relative z-1">
        <div className="lg:col-span-1 col-span-2 mx-auto" ref={imgRef}>
          <p className="lg:text-2xl text-xl tracking-wide">Christevie Ikonga</p>
          <h1 className="font-extrabold lg:text-7xl xl:text-8xl text-5xl w-auto overflow-y-hidden">
            <span className="bg-gradient-to-r from-blue-ndr via-red-ndr to-yellow-ndr bg-clip-text text-transparent overflow-y-hidden">
              Back-End
            </span>{" "}
            <br /> Développeur and
            <br /> Pentester
          </h1>
          <h2 className="lg:text-3xl text-2xl xl:text-4xl lg:my-0 my-3 py-6 tracking-wide">
            <span className="underline underline-offset-8 decoration-blue-ndr">
              Passionné
            </span>{" "}
            &{" "}
            <span className="underline underline-offset-8 decoration-red-ndr">
              Curieux
            </span>
          </h2>
        </div>
        <div className="lg:col-span-1 col-span-2 lg:pb-12 h-full mb-6">
          <img
            src={codeurOpti}
            alt="codeur"
            className="object-cover h-full"
            id="computer"
            ref={imgComputRef}
          />
        </div>

        <div
          className="grid lg:grid-cols-3 col-span-2 lg:col-span-2 gap-6 container w-1/2 mx-auto text-center"
          ref={imgButtonRef}
        >
          <a
            href="https://twitter.com/frontcodelover"
            target="_blanck"
            rel="noreferrer"
          >
            <button className="text-xl bg-white text-black-ndr w-auto px-5 h-12 rounded-full hover:bg-red-ndr hover:text-white duration-500">
              <i className="devicon-twitter-original mr-2"></i>
              Twitter
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-de-raemy/"
            target="_blanck"
            rel="noreferrer"
          >
            <button className="text-xl bg-white text-black-ndr w-auto px-5 h-12 rounded-full hover:bg-red-ndr hover:text-white duration-500">
              <i className="devicon-linkedin-plain mr-2"></i>
              Linkedin
            </button>
          </a>
          <a
            href="https://github.com/frontcodelover"
            target="_blanck"
            rel="noreferrer"
          >
            <button className=" text-xl bg-white text-black-ndr w-auto px-5 h-12 rounded-full hover:bg-red-ndr hover:text-white duration-500">
              <i className="devicon-github-original mr-2"></i>
              Github
            </button>
          </a>
        </div>
      </div>
      <div id="pageWrap">
        <section id="heros">
          <h2
            id="textWrap"
            className="lg:text-[6rem] text-5xl text-white w-full font-extrabold uppercase pin text-center overflow-hidden pt-9"
            ref={txtTest}
          >
            Qui suis-je ?
          </h2>
        </section>
      </div>
      <SectionAbout />

      <div className="w-auto relative text-center">
        <h2
          className="lg:text-[6rem] text-5xl text-white w-full font-extrabold uppercase pin text-center overflow-hidden pt-20"
          ref={txtTestTwo}
          id="softskills"
        >
          SOFT/HARD SKILLS
        </h2>
      </div>
      <SoftSkills />
      <Skills />
      <h2
        className="lg:text-[6rem] text-5xl text-white w-full font-extrabold uppercase pin text-center overflow-hidden pt-9 my-9"
        ref={textProjects}
        id="projects"
      >
        PROJETS
      </h2>
      <Projects />
      <div id="contact"></div>
      <Contact />
    </>
  );
}
