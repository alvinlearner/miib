// PricingSection.js
import React from 'react';
import './pricing.css'

import { useNavigate } from 'react-router-dom';
import { GiFlame } from "react-icons/gi";
import { AiOutlineCar } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GrGlobe } from "react-icons/gr";
import { IoHomeOutline } from "react-icons/io5";
import { LuMails } from "react-icons/lu";

const PricingSection = () => {

  const navigate = useNavigate()
  return (
<section className="py-16 bg-gray-100" id='pricing'>
  <div className="container mx-auto text-center">
    <h1 className="text-4xl font-bold mb-8 text-blue-900">Our Products</h1>

    <div className="pricing-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 

      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">MOTOR INSURANCE</h3>
        <AiOutlineCar className='text-3xl text-blue-900' />
        <p className="text-gray-600 mb-4">Get a cover that protects you from the potential costs involved in the event of an accident or loss with motor insurance that keeps you protected.</p>
      </div>

      {/* Pricing Card - Standard */}
      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">HEALTH INSURANCE</h3>
        <MdOutlineHealthAndSafety className='text-3xl text-blue-900' />
        <p className="text-gray-600 mb-4">Explore our worry-free, hassle-free medical care suppliment insurance that helps reduce out-of-pocket cost when you need medical care whether it's for your family or staff.</p>
      </div>

      {/* Conference Booking */}
      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">FIRE</h3>
        <GiFlame className='text-3xl text-blue-900'/>
        <p className="text-gray-600 mb-4">Choose the best fire insurance policy and protect your assets with our comprehensive fire insurance cover. Safeguard your property and peace of mind with our reliable insurance solutions.</p>
      </div>


              {/* Pricing Card - Basic */}
      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">TRAVEL INSURANCE</h3>
        <GrGlobe className='text-3xl text-blue-900' />
        <p className="text-gray-600 mb-4"> Make the most of your trip and take a cover before embarking on a trip outside your home country that offers you protection in case of any unforeseen circumstances while on your trip.</p>
      </div>

      {/* Pricing Card - Standard */}
      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">HOME INSURANCE</h3>
        <IoHomeOutline className='text-3xl text-blue-900'/>
        <p className="text-gray-600 mb-4"> Get Home insurance that ensures you aren't left out in the cold through loss or damage. We help you with every move to reevaluate the protection you need for what matters most to you.</p>
      </div>
      

            {/* Pricing Card - Standard */}
      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">GET YOUR QUOTE</h3>
        <LuMails  className='text-3xl text-blue-900'/>
        <p className="text-gray-600 mb-4"> Reach out to us today through our contact form and get your free quote .</p>
        <button className='bg-yellow-400 rounded-lg text-white px-2 py-3'  onClick={()=>navigate('/contactus')} >Get quote</button>
      </div>


            
    </div>



  
  </div>


</section>

  );
};

export default PricingSection;
