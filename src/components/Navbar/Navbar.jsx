import React, { useState } from 'react';
import Hamburger from '../../assets/hamburgerMenu.svg';
import Close from '../../assets/close.svg'
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import Logo from './logo2.png'
import { IoIosHome,  IoMdMail, IoMdBusiness, IoIosInformationCircleOutline, IoIosPerson } from 'react-icons/io';
import './navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleCloseMenu = () => {
    setToggle(false); // 
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const navigate = useNavigate()

  return (
    <div className="navbar-container">
      <div className={`w-full h-[44px] bg-transparent shadow-sm ${toggle ? 'overflow-hidden' : ''}`}>
        {/* Dark overlay */}
        {toggle && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-red opacity-50 z-50'
            onClick={handleToggle}
          ></div>
        )}

        <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
        
        
          <img src={Logo} alt="Millenuim Insurance Brokers" style={{width:"3%"}} onClick={() => navigate('/contactus')} />

          <div className='flex items-center'>
            <ul className='hidden md:flex gap-9 '>
              <li>
                <Link to="/" onClick={scrollToTop} className="flex items-center hover:text-blue-800">
                  <IoIosHome className="text-2xl mr-1" />
                  <span>Home</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/about" onClick={scrollToTop} className="flex items-center hover:text-blue-800">
                  <IoIosInformationCircleOutline className="text-2xl mr-1" />
                  <span>About</span>
                </Link>
              </li> */}



              <li>
                <Link to="/personal" onClick={scrollToTop} className="flex items-center hover:text-blue-800">
                  <IoIosPerson className="text-2xl mr-1" />
                  <span>Personal</span>
                </Link>
              </li>



              <li>
                <Link to="/corporate" onClick={scrollToTop} className="flex items-center hover:text-blue-800">
                  <IoMdBusiness className="text-2xl mr-1" />
                  <span>Corporate</span>
                </Link>
              </li>



              <li>
                <Link to="contactus" className="flex items-center hover:text-blue-800">
                  < IoMdMail className="text-2xl mr-1" />
                  <span>Contact Us</span>
                </Link>
              </li>
              <li>
                <Link to='faqs' className="flex items-center hover:text-blue-800">
                  <IoIosInformationCircleOutline className="text-2xl mr-1" />
                  <span>FAQs</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className='md:flex hidden'></div>
          <motion.div
            whileTap={{ scale: 0.6 }}
            className='md:hidden cursor-pointer'
            onClick={handleToggle}
          >
            <img src={toggle ? Close : Hamburger} alt='hamburger' />
          </motion.div>
        </div>

        <div>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className={toggle ? 'absolute z-50 p-4 bg-white w-full px-8 md:hidden' : 'hidden'}
          >
            <li>
              <Link to="/" className="flex items-center mb-4 hover:text-blue-800 " onClick={handleCloseMenu}>
                <IoIosHome className="text-2xl mr-1" />
                <span>Home</span>
              </Link>
            </li>

            {/* <li>
              <Link to="/about" className="flex items-center mb-4 hover:text-blue-800" onClick={handleCloseMenu}>
                <IoIosInformationCircleOutline className="text-2xl mr-1" />
                <span>About</span>
              </Link>
            </li> */}


            <li>
              <Link to="/personal" className="flex items-center mb-4 hover:text-blue-800" onClick={handleCloseMenu}>
                <IoIosPerson className="text-2xl mr-1" />
                <span>Personal</span>
              </Link>
            </li>


            <li>
              <Link to="/corporate" className="flex items-center mb-4 hover:text-blue-800" onClick={handleCloseMenu}>
                <IoMdBusiness className="text-2xl mr-1" />
                <span>Corporate</span>
              </Link>
            </li>

            <li>
            <Link to="/contactus" className="flex items-center mb-4 hover:text-blue-800" onClick={handleCloseMenu}>
                < IoMdMail className="text-2xl mr-1" />
                <span>Contact Us</span>
              </Link>
            </li>
            <li>
              <Link to='faqs' className="flex items-center mb-4 hover:text-blue-800" onClick={handleCloseMenu}>
                <IoIosInformationCircleOutline className="text-2xl mr-1" />
                <span>FAQs</span>
              </Link>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
