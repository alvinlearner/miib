import React, { useState } from 'react';
import 'animate.css';
import { Link } from "react-router-dom";
import { } from 'react-icons/io';
// import './navbar.css'

const Navbar2 = () => {
 





  return (
    <div className="navbar-container">
      <div className={`w-full h-[22px] bg-blue-700 shadow-sm `}>
        {/* Dark overlay */}
        <h1 className='text-sm font-bold text-white hero-section animate__animated animate__bounceInRight text-center'><Link to="/">Millenium Insurance Brokers</Link></h1>
      </div>
    </div>
  );
};

export default Navbar2;
