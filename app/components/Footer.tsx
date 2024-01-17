import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <footer className="bg-very-light-brown text-white py-14 px-2 h-fit md:h-56">
      <div className="flex flex-col sm:flex-row justify-around px-2">
        <div className="text-lg sm:w-auto mb-8 sm:mb-0 text-center">
          <h2 className="font-bold text-center mb-3 text-cyan-blue">
            Pages
          </h2>
          <ul id='foot-nav' className="flex flex-wrap text-lg sm:max-lg:text-base md:max-lg:pr-4 space-x-3 justify-center sm:pb-4 text-cyan-blue">
            <li>
              <Link
                className="hover:underline hover:bg-light-cyan-blue hover:text-white"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:bg-light-cyan-blue hover:text-white"
                href="/nature"
              >
                Nature
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:bg-light-cyan-blue hover:text-white"
                href="/animals"
              >
                Animals
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:bg-light-cyan-blue hover:text-white"
                href="/astrophotography"
              >
                Astrophotography
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:bg-light-cyan-blue hover:text-white"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:bg-light-cyan-blue hover:text-white"
                href="/about"
              >
                About Me
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center sm:w-auto text-center sm:text-left sm:max-lg:mr-4">
          <h2 className="text-lg font-bold mb-3 text-cyan-blue">Contact</h2>
          <p className="text-cyan-blue mb-6">
            Email:&nbsp;
            <a
              href="mailto:bmckimmons@me.com"
              className="hover:underline hover:text-white"
            >
              bmckimmons@me.com
            </a>
          </p>
        </div>
        <div className="flex flex-col items-center w-full sm:w-auto text-center">
          <h2 className="text-lg font-bold mb-2 text-cyan-blue">Follow Me</h2>
          <div className="flex flex-row px-2 py-2 justify-center rounded-md">
            <FaGithubSquare
              href="https://github.com/ideletemyself"
              className="h-8 w-8 mr-4 hover:underline text-cyan-blue hover:bg-light-cyan-blue hover:text-white"
            />
            <FaSquareXTwitter
              href="https://twitter.com/ideletemyself"
              className="h-8 w-8 mr-4 hover:underline text-cyan-blue hover:bg-light-cyan-blue hover:text-white"
            />
            <ImInstagram
              href="https://www.instagram.com/ideletemyself"
              className="h-8 w-8 hover:underline text-cyan-blue hover:bg-light-cyan-blue hover:text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
