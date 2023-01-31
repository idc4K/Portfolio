import ContactForm from "./ContactForm";

// eslint-disable-next-line no-empty-pattern
function Contact() {
  return (
    <div className="relative flex flex-col justify-center overflow-hidden p-5 sm:py-12">
      <div className="mx-auto rounded-3xl bg-[#081d31] py-9 text-center w-full">
        <h2 className="lg:text-5xl text-2xl font-bold leading-tight text-white overflow-hidden py-4 mb-4">
          Et si on se rencontrait ?
        </h2>
        <ContactForm />
        <div className=" flex container align-middle justify-center mx-auto text-center">
          <a
            href="https://twitter.com/frontcodelover"
            target="_blanck"
            rel="noreferrer"
          >
            <button className="w-20 h-20 text-3xl bg-white/10 text-white/50 px-5 rounded-full hover:bg-red-ndr hover:text-white duration-500">
              <i className="devicon-twitter-original"></i>
            </button>
          </a>
          <a
            href="https://www.linkedin.com/in/nicolas-de-raemy/"
            target="_blanck"
            rel="noreferrer"
          >
            <button className="w-20 h-20 text-3xl mx-2  bg-white/10 text-white/50  rounded-full hover:bg-red-ndr hover:text-white duration-500">
              <i className="devicon-linkedin-plain"></i>
            </button>
          </a>
          <a
            href="https://github.com/frontcodelover"
            target="_blanck"
            rel="noreferrer"
          >
            <button className="w-20 h-20 text-3xl  bg-white/10 text-white/50 rounded-full hover:bg-red-ndr hover:text-white duration-500">
              <i className="devicon-github-original"></i>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
