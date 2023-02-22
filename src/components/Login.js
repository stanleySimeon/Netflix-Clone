/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NetflixLogo from '../assets/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png';
import popSignup from '../assets/images/pop_signup.AVIF';

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [navigate, setNavigate] = React.useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);

    const password = document.querySelector('.password');
    if (password.type === 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    }
  };

  useEffect(() => {
    if (navigate) {
      window.location.href = '/stream';
    }
  }, [navigate]);

  const handleNavigate = (e) => {
    e.preventDefault();
    setNavigate(true);
  };

  return (
    <div className="login w-full h-full relative font-helvetica">
      <img className="hidden md:flex w-full h-full object-cover" src={popSignup} alt="Netflix Background" />
      <div className="md:absolute top-0 left-0 right-0 z-20 w-full h-full md:bg-gradient-to-b from-[rgba(26,26,26,0.71)] via-[rgba(0,0,0,0.61)] to-[rgba(20,20,20,0.84)] md:pb-16 lg:px-12">
        <Link to="/" className="block bg-black md:bg-transparent">
          <img src={NetflixLogo} alt="Netflix Logo" className="w-28 pt-4 md:pt-0 lg:w-52 object-cover " />
        </Link>
        <div className="w-full md:max-w-lg md:mx-auto md:mt-10 bg-[#000000] md:bg-opacity-70 md:rounded-md py-8 px-4 md:px-16">
          <h1 className="text-4xl lg:text-4xl font-medium text-white">Sign In</h1>
          <form className="flex flex-col py-8 space-y-4">
            <input type="email" name="email" id="email" placeholder="Email or phone number" className="bg-[#333333] text-white py-4 px-4 rounded-md focus:outline-none outline-none" />
            <span className="flex justify-between items-center">
              <input type="password" name="password" id="password" placeholder="Password" className="password w-full bg-[#333333] text-white py-4 px-4 rounded-l-md focus:outline-none border-none outline-none" />
              <button type="button" className="show-password w-24 text-center text-gray-400 bg-[#333333] py-4 rounded-r-md" onClick={handleShowPassword}>
                {
                  showPassword ? 'Hide' : 'Show'
                }
              </button>
            </span>
            <span className="pt-6">
              <button type="submit" className="w-full bg-netflix-red text-white py-4 px-4 rounded-md focus:outline-none" onClick={handleNavigate}>Sign In</button>
            </span>
            <div className="flex justify-between items-center text-gray-400 text-sm">
              <span className="flex justify-between items-center">
                <input type="checkbox" name="remember" id="remember" className="mr-2 rounded-sm outline-none border-none bg-gray-400 focus:outline-none focus:border-none" />
                <label htmlFor="remember" aria-controls="remember">Remember me</label>
              </span>
              <Link href="https://www.netflix.com/LoginHelp/" to="/LoginHelp" className="hover:underline">Need help?</Link>
            </div>
          </form>
          <div className="flex flex-col justify-center space-y-4 text-gray-400 text-sm md:pt-12 pb-28 md:pb-32">
            <span className="text-lg">
              New to Netflix?
              <Link to="/signup" className="ml-2 hover:underline text-lg text-white cursor-pointer">Sign up now.</Link>
            </span>
            <p className="text-md text-gray-400">
              This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.
              {' '}
              <span className="hover:underline text-blue-600 cursor-pointer">Learn more.</span>
            </p>
          </div>
        </div>
      </div>
      <div className="bar w-full border-b border border-[#262626] md:hidden" />
      <footer className="w-full absolute z-20 bg-black sm:pt-12 px-3 sm:px-8 lg:px-24 xl:px-36 2xl:px-48 text-gray-400">
        <div data-style="heading" className="pb-4 text-lg">
          Questions? Call
          {' '}
          <a href="tel: 1 (408) 329-9526  (USA)"> 1 (408) 329-9526  (USA)</a>
        </div>
        <div className="w-full">
          <ul className="whitespace-nowrap grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            <li className=""><a role="link" data-uia="footer-link" title="FAQ" className="hover:underline" href="https://help.netflix.com/support/412">FAQ</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Help Center" className="hover:underline" href="https://help.netflix.com">Help Center</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Terms of Use" className="hover:underline" href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Privacy" className="hover:underline" href="https://help.netflix.com/legal/privacy">Privacy</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Cookie Preferences" className="hover:underline" href="#">Cookie Preferences</a></li>
            <li className=""><a role="link" data-uia="footer-link" title="Corporate Information" className="hover:underline" href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
          </ul>
        </div>
        <div className="py-12">
          <select id="" name="LanguageSelect" className="bg-netflix-black bg-opacity-50 text-netflix-white rounded">
            <option lang="en" label="English" value="en">English</option>
            <option lang="es" label="Español" value="es">Español</option>
          </select>
        </div>
      </footer>
    </div>
  );
}
