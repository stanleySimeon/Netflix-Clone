/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight, faGlobe, faPlus, faClose,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import faqs from './Data';
import popSignup from '../../assets/images/pop_signup.AVIF';
import NetflixLogo from '../../assets/01_Netflix_Logo/01_Netflix_Logo_RGB/Netflix_Logo_RGB.png';
import tv from '../../assets/images/tv.png';
import mobile from '../../assets/images/mobile-0819.jpg';
import device from '../../assets/images/device-pile.png';
import kids from '../../assets/images/kids.png';

function Home() {
  const [language, setLanguage] = useState('en');
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const [email, setEmail] = useState('');
  const [valid, setValid] = useState(false);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (email) {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (regex.test(email)) {
        setValid(true);
      } else {
        setValid(false);
      }
    } else {
      setValid(false);
    }

    return () => {
      setValid(false);
    };
  }, [email]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDropDown = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="w-full h-screen d:h-2/3 relative font-helvetica">
      <img className="w-full h-full md:h-5/6 object-cover" src={popSignup} alt="Netflix Background" />
      <div className="absolute top-0 left-0 w-full h-screen md:h-5/6 bg-gradient-to-b from-[rgba(6,6,6,0.71)] via-[rgba(0,0,0,0.61)] to-[rgba(0,0,0,0.93)] pb-7 px-3 sm:px-8 lg:px-24 xl:px-36 2xl:px-48">
        <div className="flex justify-between items-center py-4">
          <div className="w-48">
            <Link to="/">
              <img src={NetflixLogo} alt="Netflix Logo" className="w-44 object-cover" />
            </Link>
          </div>
          <div className="flex justify-between items-center px-2">
            <span className="flex justify-center items-center pl-4 bg-netflix-black bg-opacity-40 border rounded">
              <FontAwesomeIcon icon={faGlobe} className="text-netflix-white" />
              <select
                className="w-0 sm:w-full py-1 md:py-2 rounded border-none outline-none bg-transparent text-netflix-white border-transparent focus:border-transparent focus:ring-0"
                value={language}
                onChange={handleLanguageChange}
              >
                <option value="English">English</option>
                <option value="Español">Español</option>
              </select>
            </span>
            <Link to="/login" className="whitespace-nowrap ml-3 px-3 md:px-4 py-1 md:py-2 text-netflix-white font-medium bg-netflix-red hover:bg-netflix-redDark rounded">Sign In</Link>
          </div>
        </div>
        <div className="w-full flex justify-center items-center flex-col h-full pt-16 space-y-4 lg:space-y-8 md:pb-52">
          <h1 className="text-3xl lg:text-5xl text-white text-center font-bold lg:font-extrabold">Unlimited movies, TV shows, and more.</h1>
          <p className="text-lg lg:text-2xl text-white text-center font-normal">Watch anywhere. Cancel anytime.</p>
          <form className="w-10/12 sm:w-11/12 flex flex-col lg:w-8/12 justify-center items-center space-y-3 pb-8" action="" method="" autoComplete="off" noValidate>
            <p className="text-lg lg:text-xl text-white text-center font-normal">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="w-full lg:w-9/12">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <input type="email" name="email" id="email" placeholder="Email address" required="required" className="w-full px-3 py-3 rounded bg-netflix-white border-transparent outline-none focus:border-transparent transition-all duration-300" value={email} onChange={handleEmailChange} />
                <span className="md:hidden text-netflix-red text-sm font-medium">
                  {email && !valid ? <FontAwesomeIcon icon={faCircleXmark} className="mr-1" /> : ''}
                  {email && !valid ? 'Please enter a valid email address' : ''}
                </span>
                <button type="submit" className="w-auto px-3 md:px-6 py-3 rounded bg-netflix-red border border-netflix-red hover:border-netflix-redDark text-netflix-white whitespace-nowrap font-medium md:font-bold hover:bg-netflix-redDark cursor-pointer" disabled={!valid}>
                  Get Started
                  <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
                </button>
              </div>
              <span className="w-full hidden md:block text-netflix-red text-sm font-medium">
                {email && !valid ? <FontAwesomeIcon icon={faCircleXmark} className="mr-1" /> : ''}
                {email && !valid ? 'Please enter a valid email address' : ''}
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="bar w-full h-2 border-none bg-[#1c1c1c]" />
      <div className="w-full bg-black pt-14 px-3 sm:px-8 lg:px-24 xl:px-36 2xl:px-48">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 pb-16 lg:pb-32">
          <div className="w-11/12 flex flex-col justify-center items-center lg:items-start space-y-4 md:space-y-6">
            <h2 className="text-3xl lg:text-5xl text-white text-center lg:text-start font-bold lg:font-extrabold">Enjoy on your TV.</h2>
            <p className="text-md lg:text-2xl text-white text-center lg:text-start font-normal">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
          </div>
          <div className="w-full flex justify-center relative">
            <img src={tv} alt="TV" className="w-11/12 object-cover relative z-20" />
            <video autoPlay playsInline muted loop className="absolute w-8/12 h-full z-10 -top-2 object-fit left-0 right-0 mx-auto">
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="bar w-full h-2 border-none bg-[#1c1c1c]" />
      <div className="w-full bg-black pt-14 px-3 sm:px-8 lg:px-24 xl:px-36 2xl:px-48">
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 pb-16 lg:pb-32">
          <div className="w-11/12 flex flex-col justify-center items-center lg:items-start space-y-4 md:space-y-6">
            <h2 className="text-3xl lg:text-5xl text-white text-center lg:text-start font-bold lg:font-extrabold">Download your shows to watch offline.</h2>
            <p className="text-md lg:text-2xl text-white text-center lg:text-start font-normal">Save your favorites easily and always have something to watch.</p>
          </div>
          <div className="w-full flex justify-center relative">
            <img src={mobile} alt="TV" className="w-11/12 object-cover relative z-20" />
            <div className="absolute w-10/12 sm:w-7/12 h-auto p-2 z-30 bottom-2 sm:bottom-10 object-fit left-0 right-0 mx-auto bg-netflix-black border border-gray-500 rounded-lg">
              <div className="flex justify-between items-center">
                <div className="flex justify-between items-center space-x-4">
                  <div className="">
                    <img alt="stranger things" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" className="w-8 h-full object-cover" />
                  </div>
                  <div className="">
                    <div className="text-netflix-white font-bold">Stranger Things</div>
                    <div className="text-blue-600">Downloading...</div>
                  </div>
                </div>
                <div className="">
                  <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt="download icon" className="w-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bar w-full h-2 border-none bg-[#1c1c1c]" />
      <div className="w-full bg-black pt-14 px-3 sm:px-8 lg:px-24 xl:px-36 2xl:px-48">
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 pb-16 lg:pb-32">
          <div className="w-11/12 flex flex-col justify-center items-center lg:items-start space-y-4 md:space-y-6">
            <h2 className="text-3xl lg:text-5xl text-white text-center lg:text-start font-bold lg:font-extrabold">Watch everywhere.</h2>
            <p className="text-md lg:text-2xl text-white text-center lg:text-start font-normal">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</p>
          </div>
          <div className="w-full flex justify-center relative">
            <img src={device} alt="TV" className="w-11/12 object-cover relative z-20" />
            <video autoPlay playsInline muted loop className="absolute w-7/12 h-auto  z-10 top-12 object-cover left-0 right-0 mx-auto">
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="bar w-full h-2 border-none bg-[#1c1c1c]" />
      <div className="w-full bg-black pt-14 px-3 sm:px-8 lg:px-24 xl:px-36 2xl:px-48">
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 pb-16 lg:pb-32">
          <div className="w-11/12 flex flex-col justify-center items-center lg:items-start space-y-4 md:space-y-6">
            <h2 className="text-3xl lg:text-5xl text-white text-center lg:text-start font-bold lg:font-extrabold">Create profiles for kids.</h2>
            <p className="text-md lg:text-2xl text-white text-center lg:text-start font-normal">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
          </div>
          <div className="w-full flex justify-center relative">
            <img src={kids} alt="TV" className="w-11/12 object-cover relative z-20" />
          </div>
        </div>
      </div>
      <div className="bar w-full h-2 border-none bg-[#1c1c1c]" />
      <div className="w-full bg-black pt-14 px-3 sm:px-8 lg:px-24 xl:px-36 2xl:px-48">
        <h2 className="text-3xl lg:text-5xl text-white text-center font-bold lg:font-extrabold pb-16">Frequently Asked Questions</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-4 lg:space-y-0 lg:space-x-8 pb-12">
          <ul className="w-full flex flex-col justify-center items-center lg:items-start space-y-4 md:space-y-6">
            {
              faqs.map((faq) => (
                <li key={faq.id} className="w-full">
                  <button type="button" className="w-full text-white bg-[#2f2f2f] hover:bg-[#444444] focus:ring-none px-8 py-8 text-center inline-flex justify-between items-center" onClick={handleDropDown}>
                    <div className="flex flex-col justify-center items-center lg:items-start space-y-4 md:space-y-6">
                      <h2 className="text-xl md:text-2xl text-white">{faq.question}</h2>
                    </div>
                    <FontAwesomeIcon icon={faPlus} className="text-xl sm:text-3xl " />
                  </button>
                  <div
                    id="dropdown"
                    className={`z-10 w-full divide-y bg-[#2f2f2f] ${isOpen ? 'block' : 'hidden'
                    }`}
                  >
                    <ul className=" z-10 bg-[#2f2f2f] shadow border-t border-netflix-black">
                      <li>
                        <div className="flex flex-col py-6 px-8">
                          <p className="text-xl md:text-2xl text-netflix-white">{faq.answer}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="w-full flex justify-center items-center flex-col h-full space-y-4 lg:space-y-8 pb-12">
          <form className="w-10/12 sm:w-11/12 flex flex-col lg:w-8/12 justify-center items-center space-y-3 pb-8" action="" method="" autoComplete="off" noValidate>
            <p className="text-lg lg:text-xl text-white text-center font-normal">Ready to watch? Enter your email to create or restart your membership.</p>
            <div className="w-full lg:w-9/12">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <input type="email" name="email" id="email" placeholder="Email address" required="required" className="w-full px-3 py-3 rounded bg-netflix-white border-transparent outline-none focus:border-transparent transition-all duration-300" value={email} onChange={handleEmailChange} />
                <span className="md:hidden text-netflix-red text-sm font-medium">
                  {email && !valid ? <FontAwesomeIcon icon={faCircleXmark} className="mr-1" /> : ''}
                  {email && !valid ? 'Please enter a valid email address' : ''}
                </span>
                <button type="submit" className="w-auto px-3 md:px-6 py-3 rounded bg-netflix-red border border-netflix-red hover:border-netflix-redDark text-netflix-white whitespace-nowrap font-medium md:font-bold hover:bg-netflix-redDark cursor-pointer" disabled={!valid}>
                  Get Started
                  <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
                </button>
              </div>
              <span className="w-full hidden md:block text-netflix-red text-sm font-medium">
                {email && !valid ? <FontAwesomeIcon icon={faCircleXmark} className="mr-1" /> : ''}
                {email && !valid ? 'Please enter a valid email address' : ''}
              </span>
            </div>
          </form>
        </div>
      </div>
      <div className="bar w-full h-2 border-none bg-[#1c1c1c]" />
      <footer className="w-full bg-black pt-8 sm:pt-12 px-3 sm:px-8 lg:px-24 xl:px-36 2xl:px-48">
        <div data-style="heading" className="text-netflix-white pb-4">
          Questions? Call
          {' '}
          <a href="tel: 1 (408) 329-9526  (USA)"> 1 (408) 329-9526  (USA)</a>
        </div>
        <div className="w-full">
          <ul className="text-netflix-white whitespace-nowrap grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 underline text-sm sm:text-md md:text-lg">
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="FAQ" className="" href="https://help.netflix.com/support/412">FAQ</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Gift Card Terms" className="" href="https://www.netflix.com/giftterms">Gift Card Terms</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Help Center" className="default-ltr-cache-17c2btp" href="https://help.netflix.com">Help Center</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Account" className="default-ltr-cache-17c2btp" href="/youraccount">Account</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Media Center" className="default-ltr-cache-17c2btp" href="https://media.netflix.com/">Media Center</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Investor Relations" className="default-ltr-cache-17c2btp" href="http://ir.netflix.com/">Investor Relations</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Jobs" className="default-ltr-cache-17c2btp" href="https://jobs.netflix.com/jobs">Jobs</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Ways to Watch" className="default-ltr-cache-17c2btp" href="/watch">Ways to Watch</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Terms of Use" className="default-ltr-cache-17c2btp" href="https://help.netflix.com/legal/termsofuse">Terms of Use</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Privacy" className="default-ltr-cache-17c2btp" href="https://help.netflix.com/legal/privacy">Privacy</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Cookie Preferences" className="default-ltr-cache-17c2btp" href="#">Cookie Preferences</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Corporate Information" className="default-ltr-cache-17c2btp" href="https://help.netflix.com/legal/corpinfo">Corporate Information</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Contact Us" className="default-ltr-cache-17c2btp" href="https://help.netflix.com/contactus">Contact Us</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Speed Test" className="default-ltr-cache-17c2btp" href="https://fast.com">Speed Test</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Legal Notices" className="default-ltr-cache-17c2btp" href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link" title="Only on Netflix" className="default-ltr-cache-17c2btp" href="https://www.netflix.com/ht/browse/genre/839338">Only on Netflix</a></li>
            <li className="default-ltr-cache-6hvsu1 egqqkjj0"><a role="link" data-uia="footer-link-do-not-sell-info" title="Do Not Sell or Share My Personal Information" className="default-ltr-cache-17c2btp" href="https://www.netflix.com/dnsspi">Do Not Sell or Share My Personal Information</a></li>
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

export default Home;
