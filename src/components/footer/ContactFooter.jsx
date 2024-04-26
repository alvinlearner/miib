// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
import { IoMdPhonePortrait, IoIosMail} from 'react-icons/io';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const ContactFooter = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };




  const phoneNumber = ' +254 722 722 388'
  const phoneNumber2 = '+254 702 910 583 '

  const email = 'info@milleniuminsurancebrokers.com'

  return (
    <footer className="bg-white">



      <div className="container mx-auto mt-4 flex flex-col lg:flex-row flex-wrap lg:flex-nowrap gap-2 ">


                  {/* Google Map */}
                  {/* <h1 className="text-black text-2xl font-bold text-blue-500">Find Us</h1>
                    <div className="google-map-container">
                     
                     <iframe
                       title="Google Map"
                       src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.240610773692!2d34.77393459301031!3d-0.11593370000000289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa31f33ff79d9%3A0xf19ac29733fdad7d!2swest%20nile%20resort!5e0!3m2!1sen!2ske!4v1710161873197!5m2!1sen!2ske'
                       className="google-map-iframe"
                       frameBorder="0"
                       style={{ border: 0 }}
                       allowFullScreen=""
                       loading="lazy"
                     />
                   </div> */}

        {/* Quick Navigation Buttons */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <h1 className="text-black text-2xl font-bold mb-4 text-blue-500">Quick Links</h1>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
           
              <a href="#hero" className="text-md text-black hover:text-blue-800 ">
              <Link to="/" onClick={scrollToTop}>
                Home
                </Link>
              </a>
             
            </li>
            <li className="mb-2">
              <a className="text-md text-black hover:text-blue-800">
              <Link to="/suites" onClick={scrollToTop}>
                Products
                </Link>
              </a>
              
            </li>
            <li className="mb-2">
              <a  className="text-md text-black hover:text-blue-800">
              <Link to="/about" onClick={scrollToTop}>
                FAQs
                </Link>
              </a>
              
            </li>
            <li className="mb-2">
              <a href="#contact" className="text-md text-black hover:text-blue-800">
                Contact
              </a>
            </li>
          </ul>
        </div>



         {/* Products Navigation Buttons */}
         <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <h1 className="text-black text-2xl font-bold mb-4 text-blue-500">Product & Services</h1>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
           
              <a href="#hero" className="text-md text-black hover:text-blue-800 ">
              <Link to="/" onClick={scrollToTop}>
              Individual
                </Link>
              </a>
             
            </li>
            <li className="mb-2">
              <a className="text-md text-black hover:text-blue-800">
              <Link to="/suites" onClick={scrollToTop}>
              Domestic Package
                </Link>
              </a>              
            </li>

            <li className="mb-2">
              <a  className="text-md text-black hover:text-blue-800">
              <Link to="/about" onClick={scrollToTop}>
              Motor Insurance
                </Link>
              </a>              
            </li>

            <li className="mb-2">
              <a  className="text-md text-black hover:text-blue-800">
              <Link to="/about" onClick={scrollToTop}>
              Personal Accident
                </Link>
              </a>              
            </li>

            <li className="mb-2">
              <a  className="text-md text-black hover:text-blue-800">
              <Link to="/about" onClick={scrollToTop}>
              Travel Insurance
                </Link>
              </a>              
            </li>

            <li className="mb-2">
              <a href="#contact" className="text-md text-black hover:text-blue-800">
              Other Products
              </a>
            </li>
          </ul>
        </div>




                   {/* CORE VALUES */}

{/* 
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <h1 className="text-black text-2xl font-bold mb-4 text-blue-500">Core Values</h1>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
           
              <p href="#hero" className="text-md text-black">
              T - Transparency
              </p>
             
            </li>
            <li className="mb-2">
            <p href="#hero" className="text-md text-black">
            R - Reliability
            </p>
              
            </li>
            <li className="mb-2">
            <p href="#hero" className="text-md text-black">
            I - Integrity
              </p>
              
            </li>
            <li className="mb-2">
            <p href="#hero" className="text-md text-black">
            U - Uniqueness
              </p>
            </li>

            <li className="mb-2">
            <p href="#hero" className="text-md text-black">
            M - Measured
              </p>
            </li>


            <li className="mb-2">
            <p href="#hero" className="text-md text-black">
            P - Professionalism
              </p>
            </li>


            <li className="mb-2">
            <p href="#hero" className="text-md text-black">
            H - Honesty
              </p>
            </li>
          </ul>
        </div> */}



{/* Red: HEX: #ff0000, RGB: (255, 0, 0) 1.
Orange: HEX: #ffa500, RGB: (255, 165, 0) 1.
Yellow: HEX: #ffff00, RGB: (255, 255, 0) 1.
Green: HEX: #008000, RGB: (0, 128, 0).
Blue: HEX: #0000ff, RGB: (0, 0, 255).
Indigo: HEX: #4b0082, RGB: (75, 0, 130).
Violet: HEX: #ee82ee, RGB: (238, 130, 238). */}




 {/* Contact Information */}
 <div className="text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4" id="contactus">
  <h1 className="text-black text-2xl font-bold mb-2 text-blue-500">Contact Us</h1>
  <p className='text-md'>For More Information.</p>  
  <div className='flex items-center text-md italic'>
    <IoMdPhonePortrait className="text-2xl mr-1 text-blue-500" />
    <a href={`tel:${phoneNumber2}`} className='text-blue-800 bold hover:text-red-500'>{phoneNumber2}</a>
  </div>
  <div className='flex items-center text-md italic'>
    <IoMdPhonePortrait className="text-2xl mr-1 text-blue-500" />
    <a href={`tel:${phoneNumber}`} className='text-blue-800 bold hover:text-red-500'>{phoneNumber}</a>
  </div>

  <div className='flex items-center italic'>
    < IoIosMail className=" mr-1 text-blue-500" />
    <a href={`tel:${email}`} className='text-blue-800 bold hover:text-yellow-500'>{email}</a>
  </div>

  <div className=' items-center text-md italic'>
  <p className='text-md'>0ffice: Caxton House, 1st  Floor</p>
  <p> Standard Street</p>
  <p> P.O Box 46637-00100 Nairobi Kenya </p>
  </div>
</div>







        {/* Social Media Links */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <h1 className="text-black text-2xl font-bold mb-4 text-blue-500">Follow Us</h1>
          <div className="flex">
            <a href="https://www.facebook.com/milleniuminsurancebrokers/" className="mr-4" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-black text-3xl hover:text-blue-800"  />
            </a>
            <a href="#" className="mr-4" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-black text-3xl hover:text-blue-800" />
            </a>
            <a href="https://www.instagram.com/mib.ltd/" className="mr-4" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="text-black text-3xl hover:text-red-500" />
            </a>

          </div>
        </div>
      </div>
      {/* Copy right */}
      <div className='bg-gray-100'>
          <hr />
          <p className='text-black flex justify-center mt-1 text-blue-800 '>Copyright © 2024 Millenium Insurance Brokers,. All Rights Reserved.</p>
        </div>

    </footer>
  );
};

export default ContactFooter;








// T - Transparency
// R - Reliability
// I - Integrity
// U - Uniqueness
// M - Measured
// P - Professionalism
// H - Honesty