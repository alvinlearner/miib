import React, { useState } from 'react';
import 'animate.css';
import { Link } from "react-router-dom";
import { } from 'react-icons/io';
import './navbar.css'

const Navbar2 = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="navbar-container">
      <div className={`w-full h-[44px] bg-blue-700 shadow-sm ${toggle ? 'overflow-hidden' : ''}`}>
        {/* Dark overlay */}
        {toggle && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-red opacity-50 z-50'
            onClick={handleToggle}
          ></div>
        )}

        <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
          <h1 className='text-sm font-bold text-white hero-section animate__animated animate__bounceInRight animate__delay-1s'><Link to="/">TALK TO US : +254 722 722 388/ +254 702 910 583 </Link></h1>
          <div className='flex items-center'>
          </div>
          <div className='md:flex hidden'></div>

        </div>
      </div>
    </div>
  );
};

export default Navbar2;
