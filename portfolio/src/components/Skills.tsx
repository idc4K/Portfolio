type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      className="container max-w-screen-xl mx-auto text-center"
      id="skills"
    >
      <p className="lg:text-2xl text-center text-white/70 py-9 mb-9 text-xl p-5">
        Parce que le développement est aussi une histoire d'outils et de
        technologies, voici ceux que j'utilise.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-6 lg:gap-10 gap-6 py-9 text-center lg:p-0 p-7">
        <div className="col-span-1 flex flex-col">
          <i className="devicon-python-plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">PYTHON</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-javascript-plain  text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">JAVASCRIPT</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-html5-plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">HTML</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-css3-plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">CSS</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-java-plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">JAVA</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-github-plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">GITHUB</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-npm-original-wordmark text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">NPM</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-docker-plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">DOCKER</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-django-plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">DJANGO</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-nodejs-plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">NODEJS</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon--plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">PHOTOSHOP</span>
        </div>
        <div className="col-span-1 flex flex-col">
          <i className="devicon-nextjs-plain text-white/50  duration-500 text-8xl"></i>
          <span className="text-white/50 font-bold">NEXT.JS</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
