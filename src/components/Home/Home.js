import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import popSignup from '../../assets/images/pop_signup.AVIF';

function Home() {
  const heroRef = useRef(null);

  return (
    <div className="h-screen sm:h-auto" ref={heroRef}>
      <img className="h-full object-cover relative" src={popSignup} alt="Netflix Background" />
      <div className="absolute top-0 left-0 w-full h-full bg-netflix-black opacity-50">
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
