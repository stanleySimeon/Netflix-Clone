/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NetflixLogo from '../assets/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png';

export default function SignupPassword() {
  const [count, setCount] = React.useState(1);
  const [getUserEmail, setUserEmail] = React.useState('');
  const [userPassword, setUserPassword] = React.useState([]);

  const handleCount = (e) => {
    e.preventDefault();
    setCount(count + 1);
  };

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem('email'));
    if (email) {
      setUserEmail(email);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('password', JSON.stringify(userPassword));
  }, [userPassword]);

  const handlePassword = (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    setUserPassword(password);
  };

  return (
    <div id="signup" className="signup">
      <nav className="flex justify-between items-center md:py-2 border-b border-gray px-2 md:px-12">
        <Link to="/" className="block">
          <img src={NetflixLogo} alt="Netflix Logo" className="w-28 md:pt-0 lg:w-52 object-cover " />
        </Link>
        <Link to="/login" className="text-netflix-black md:text-xl font-medium hover:underline">Sign In</Link>
      </nav>
      <div className="flex flex-col items-center h-screen mt-12 px-10 md:px-0">
        <div className="flex flex-col justify-start items-start md:w-2/6">
          <div className="flex flex-col items-start justify-start w-full space-y-4">
            <span>
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
                Welcome back!
                <br />
                Joining Netflix is easy.
              </h1>
            </span>
            <p className="text-gray-600 text-lg">
              Enter your password and you&#39;ll be watching in no time.
            </p>
          </div>
          <form className="w-full flex flex-col space-y-6 items-start justify-start pt-8">
            <div className="flex flex-col space-y-4 items-start justify-start w-full">
              <label htmlFor="email" className="text-netflix-black text-md font-light">
                Email
                <br />
                <span className="font-bold text-gray-800">
                  {getUserEmail}
                </span>
              </label>
              <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full border border-gray-500 py-4 px-3 mt-2 focus:outline-none rounded-sm focus:ring-0 focus:ring-opacity-0" />
            </div>
            <Link to="/signup" className="text-lg font-light text-blue-600 hover:underline">Forgot your password?</Link>
            <button
              type="submit"
              className="w-full bg-netflix-red text-lg text-white font-medium py-4 px-3 mt-4 rounded-md hover:bg-netflix-red focus:outline-none focus:ring-0"
              onClick={
                (e) => {
                  handlePassword(e);
                  handleCount(e);
                }
              }
            >
              Next
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
