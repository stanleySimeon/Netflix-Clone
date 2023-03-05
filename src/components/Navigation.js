import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch, faUserAlt } from '@fortawesome/free-solid-svg-icons';
import NetflixLogo from '../assets/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png';

const links = [
  {
    id: 1,
    to: '/tvShows',
    text: 'TV Shows',
  },
  {
    id: 2,
    to: '/movies',
    text: 'Movies',
  },
  {
    id: 3,
    to: '/RecentlyAdded',
    text: 'Recently Added',
  },
  {
    id: 4,
    to: 'MyList',
    text: 'My List',
  },
];

export default function Navigation() {
  return (
    <nav className="navbar bg-netflix-black flex justify-between items-center px-3 md:px-8 md:py-3">
      <div className="flex justify-center items-center space-x-12">
        <Link
          to="/stream"
          className="w-32"
        >
          <img src={NetflixLogo} alt="logo" />
        </Link>
        <ul className="flex justify-start items-center space-x-12">
          {
            links.slice().map((link) => (
              <li className="text-netflix-white decoration-none hover:text-gray-300" key={link.id}>
                <Link to={link.to}>{link.text}</Link>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="flex justify-center items-center space-x-8">
        <label htmlFor="text" name="search">
          <FontAwesomeIcon icon={faSearch} className="text-white text-xl" />
          <input type="text" placeholder="Search" className="hidden" />
        </label>
        <FontAwesomeIcon icon={faBell} className="text-white text-xl" />
        <FontAwesomeIcon icon={faUserAlt} className="text-white text-xl" />
      </div>
    </nav>
  );
}
