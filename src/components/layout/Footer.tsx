import { Component } from "react";

type Props = {};

type State = {};

class Footer extends Component<Props, State> {
  state = {};

  render() {
    return (
      <footer className="shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 pl-4 pb-4">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://www.linkedin.com/in/christevie-ikonga-87b3bb19a/"
            className="hover:underline"
          >
            Christevie Ikonga
          </a>
          .

        </span>
       
      </footer>
    );
  }
}

export default Footer;
