/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faGlobe } from '@fortawesome/free-solid-svg-icons';
import NetflixLogo from '../assets/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png';
import PlanData from './PlanData';

export default function SignupPassword() {
  const [count, setCount] = React.useState(2);
  const [language, setLanguage] = React.useState('English');

  const handleCount = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleLanguageChange = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
  };

  return (
    <div id="signup" className="signup">
      <nav className="flex justify-between items-center md:py-2 border-b border-gray px-2 md:px-12">
        <Link to="/" className="block">
          <img src={NetflixLogo} alt="Netflix Logo" className="w-28 md:pt-0 lg:w-52 object-cover " />
        </Link>
        <Link to="/login" className="text-netflix-black md:text-xl font-medium hover:underline">Sign Out</Link>
      </nav>
      <div className="flex flex-col items-center h-auto mt-32 pb-56 px-10 md:px-0">
        <div className="flex flex-col justify-start items-start md:justify-center md:items-center md:w-2/7">
          <FontAwesomeIcon icon={faCircleCheck} className="text-netflix-red text-4xl mb-6" />
          <div className="flex flex-col items-start justify-start md:items-center md:justify-center w-full space-y-4">
            <span className="flex flex-col md:justify-center md:items-center">
              <p className="text-md font-light text-gray-600 uppercase">
                Step
                {' '}
                <span className="font-medium text-netflix-black">
                  {
                    count > 3 ? 3 : count
                  }
                </span>
                {' '}
                of
                {' '}
                <span className="font-medium text-netflix-black">3</span>
              </p>
              <h1 className="text-4xl font-medium text-gray-800">
                Choose your plan.
              </h1>
            </span>
            <PlanData
              props={{
                commitments: 'No commitments, cancel anytime.',
                price: 'Everything on Netflix for one low price.',
                device: 'Unlimited viewing on all your devices.',
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-netflix-red text-lg text-white font-medium py-4 px-3 mt-4 rounded-md hover:bg-netflix-red focus:outline-none focus:ring-0"
            onClick={
              (e) => {
                handleCount(e);
              }
            }
          >
            Next
          </button>
        </div>
      </div>
      <footer className="flex flex-col items-start justify-center border-t border-gray-200 bg-gray-100 pt-8 pb-2 px-4 md:px-16">
        <div data-style="heading" className="pb-4 text-lg">
          <Link to="/" className="text-gray-500 hover:underline">
            Questions? Contact us.
          </Link>
        </div>
        <div className="w-10/12">
          <ul className="whitespace-nowrap grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-gray-500">
            <li className=""><a role="link" data-uia="footer-link" title="FAQ" className="hover:underline" href="/">FAQ</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Help Center" className="hover:underline" href="/">Help Center</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Account" className="hover:underline" href="/">Netflix Shop</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Terms of Use" className="hover:underline" href="/">Terms of Use</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Privacy" className="hover:underline" href="/">Privacy</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Cookie Preferences" className="hover:underline" href="/">Cookie Preferences</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Corporate Information" className="hover:underline" href="/">Corporate Information</a></li>
          </ul>
        </div>
        <span className="flex justify-center items-center pl-4 my-8 bg-gray-50 border border-gray-500">
          <FontAwesomeIcon icon={faGlobe} className="text-gray-700" />
          <select
            className="w-full py-2 md:py-2 rounded border-none outline-none bg-transparent text-gray-500 border-transparent focus:border-transparent focus:ring-0"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value="English">English</option>
            <option value="Español">Español</option>
          </select>
        </span>
      </footer>
    </div>
  );
}
