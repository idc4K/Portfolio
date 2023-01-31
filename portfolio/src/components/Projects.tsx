import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { FiLink } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

type Props = {};

const Projects = (props: Props) => {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".card",
          start: "top center",
          end: "top 50%",
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="grid lg:grid-cols-4 gap-6  overflow-hidden mt-14 p-5">
        <div className="card bg-[#01111e] p-9 rounded-xl text-white/50 relative">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Livres préférés
          </h3>
          <p>Ajouter vos livres préférés dans vos listes de lecture.</p>
          <div className="flex flex-wrap justify-start my-9 font-semibold">
            <p className="bg-blue-ndr px-2 py-1 rounded text-white mr-1 mb-1">
              Next.JS
            </p>
            <p className="bg-red-ndr px-2 py-1 rounded text-white mr-1 mb-1">
              Firebase
            </p>
            <p className="bg-white/50 px-2 py-1 rounded text-white mr-1 mb-1">
              Google Books API
            </p>
            <p className="bg-purple-500 px-2 py-1 rounded text-white mr-1 mb-1">
              TailwindCSS
            </p>
          </div>
          <div className="absolute bottom-5 text-white">
            <a
              href="https://mybooklist-blush.vercel.app/"
              target="_blank"
              className="cursor-pointer font-semibold hover:text-white"
              rel="noreferrer"
            >
              <p className="flex mr-2">
                <FiLink className="mr-2 mt-1" />
                MyBookList-blush.vercel.app
							</p>
						</a>
						<a
              href="https://github.com/frontcodelover/mybooklist"
              target="_blank"
              className="cursor-pointer font-semibold hover:text-white"
              rel="noreferrer"
            >
							<p className="flex mr-2">
                <FiLink className="mr-2 mt-1" />
                Github repo
              </p>
            </a>
          </div>
        </div>
        <div className="card bg-[#01111e] p-9 rounded-xl text-white/50 relative">
          <h3 className="text-white text-2xl font-semibold mb-4">
            CodeTracker
          </h3>
          <p>Tracker son temps passé à coder et ses projets</p>
          <div className="flex justify-start flex-wrap my-9 font-semibold">
            <p className="bg-blue-ndr px-2 py-1 rounded text-white mr-1 mb-1">
              Next.JS
            </p>
            <p className="bg-red-ndr px-2 py-1 rounded text-white mr-1 mb-1">
              Firebase
            </p>
            <p className="bg-blue-800 px-2 py-1 rounded text-white mr-1 mb-1">
              Typescript
            </p>
            <p className="bg-white/50 px-2 py-1 rounded text-white mr-1 mb-1">
              Chart.JS
            </p>
            <p className="bg-purple-500 px-2 py-1 rounded text-white mr-1 mb-1">
              TailwindCSS
            </p>
          </div>
          <div className="absolute bottom-5 text-white">
            <a
              href="https://github.com/frontcodelover/codetrackerts"
              target="_blank"
              className="cursor-pointer font-semibold hover:text-white"
              rel="noreferrer"
            >
              <p className="flex mr-2">
                <FiLink className="mr-2 mt-1" />
                Github repo
              </p>
            </a>
          </div>
        </div>
        <div className="card bg-[#01111e] p-9 rounded-xl text-white/50 relative">
          <h3 className="text-white text-2xl font-semibold mb-4">Portfolio</h3>
          <p>Portfolio (celui que vous visitez actuellement)</p>
          <div className="flex justify-start flex-wrap my-9 font-semibold">
            <p className="bg-blue-500 px-2 py-1 rounded text-white mr-1 mb-1">
              React.JS
            </p>
            <p className="bg-blue-800 px-2 py-1 rounded text-white mr-1 mb-1">
              Typescript
            </p>
            <p className="bg-white/50 px-2 py-1 rounded text-white mr-1 mb-1">
              GSAP
            </p>
            <p className="bg-purple-500 px-2 py-1 rounded text-white mr-1 mb-1">
              TailwindCSS
            </p>
          </div>
          <div className="absolute bottom-5 text-white">
            <a
              href="https://github.com/frontcodelover/portfolio"
              target="_blank"
              className="cursor-pointer font-semibold hover:text-white"
              rel="noreferrer"
            >
              <p className="flex mr-2">
                <FiLink className="mr-2 mt-1" />
                Github repo
              </p>
            </a>
          </div>
        </div>
        <div className="card bg-[#01111e] p-9 rounded-xl text-white/50 relative">
          <h3 className="text-white text-2xl font-semibold mb-4">
            Avant j'étais riche
          </h3>
          <p>Cadeaux originaux et décalés en ligne depuis janvier 2013</p>
          <div className="flex justify-start flex-wrap my-9 font-semibold">
            <p className="bg-black px-2 py-1 rounded text-white mr-1 mb-1">
              Wordpress
            </p>
          </div>
          <div className="absolute bottom-5 text-white">
            <a
              href="https://www.avantjetaisriche.com/"
              target="_blank"
              className="cursor-pointer font-semibold hover:text-white"
              rel="noreferrer"
            >
              <p className="flex mr-2">
                <FiLink className="mr-2 mt-1" />
                Avantjetaisriche.com
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
