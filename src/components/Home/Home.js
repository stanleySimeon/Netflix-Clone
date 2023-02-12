import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import popSignup from '../../assets/images/pop_signup.AVIF';
import NetflixLogo from '../../assets/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png';

function Home() {
  const heroRef = useRef(null);

  return (
    <div className="h-screen sm:h-auto font-montserrat" ref={heroRef}>
      <img className="h-full object-cover relative" src={popSignup} alt="Netflix Background" />
      <div className="absolute top-0 left-0 w-full h-full object- bg-netflix-black bg-opacity-70">
        <div className="navbar flex justify-between items-center px-3 py-3">
          <div className="navbar__logo">
            <Link to="/">
              <img src={NetflixLogo} alt="Netflix Logo" className="h-12" />
            </Link>
          </div>
          <div className="navbar__links">
            <ul className="flex space-x-3">
              <li>
                <select className="bg-netflix-black bg-opacity-50 text-netflix-white border-none">
                  <i className="fas fa-globe-americas" />
                  <option value="English hidden sm:block">English</option>
                  <option value="Spanish hidden sm:block">Español</option>
                </select>
              </li>
              <li className="text-netflix-white">
                <Link to="/login" className="whitespace-nowrap bg-netflix-red">Sign In</Link>
              </li>
            </ul>
            <ul className="flex pr-2">
              {}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl sm:text-6xl text-white font-bold">Welcome to Pop!</h1>
          <p className="text-xl sm:text-2xl text-white font-semibold">Sign up to get started.</p>
        </div>
      </div>
      <Link className="hero__link" to="/users">
        View Users
      </Link>
    </div>
  );
}

export default Home;
