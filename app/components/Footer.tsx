import Link from 'next/link';
import { FaGithubSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { ImInstagram } from 'react-icons/im';

const Footer = () => {
  return (
    <footer className='bg-very-light-brown text-white py-14 px-2 h-fit'>
      <div className='flex flex-col items-center px-2'>
        <div className='flex flex-row px-2 py-4 rounded-md'>
          <FaGithubSquare
            href='https://github.com/ideletemyself'
            className='h-8 w-8 mr-4 hover:underline text-cyan-blue hover:bg-light-cyan-blue hover:text-white'
          />
          <FaSquareXTwitter
            href='https://twitter.com/ideletemyself'
            className='h-8 w-8 mr-4 hover:underline text-cyan-blue hover:bg-light-cyan-blue hover:text-white'
          />
          <ImInstagram
            href='https://www.instagram.com/ideletemyself'
            className='h-8 w-8 hover:underline text-cyan-blue hover:bg-light-cyan-blue hover:text-white'
          />
        </div>
        <p className='flex flex-row text-cyan-blue mb-6'>
          Email:&nbsp;
          <a
            href='mailto:bmckimmons@me.com'
            className='hover:underline hover:text-white'
          >
            bmckimmons@me.com
          </a>
        </p>
        <ul className='flex flex-wrap justify-evenly text-base space-x-2 text-cyan-blue'>
          <li>
            <Link
              className='flex px-4 py-4 hover:underline hover:bg-light-cyan-blue hover:text-white rounded'
              href='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='flex px-4 py-4 hover:underline hover:bg-light-cyan-blue hover:text-white rounded'
              href='/nature'
            >
              Nature
            </Link>
          </li>
          <li>
            <Link
              className='flex px-4 py-4 hover:underline hover:bg-light-cyan-blue hover:text-white rounded'
              href='/animals'
            >
              Animals
            </Link>
          </li>
          <li>
            <Link
              className='flex px-4 py-4 hover:underline hover:bg-light-cyan-blue hover:text-white rounded'
              href='/sagan'
            >
              Sagan
            </Link>
          </li>
          <li>
            <Link
              className='flex px-4 py-4 hover:underline hover:bg-light-cyan-blue hover:text-white rounded'
              href='/astrophotography'
            >
              Astrophotography
            </Link>
          </li>
          <li>
            <Link
              className='flex px-4 py-4 hover:underline hover:bg-light-cyan-blue hover:text-white rounded'
              href='/blog'
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className='flex px-4 py-4 hover:underline hover:bg-light-cyan-blue hover:text-white rounded'
              href='/about'
            >
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
