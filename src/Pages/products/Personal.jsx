import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import 'animate.css';

import Medical from './Medical-Insurance.jpg'
import domestic from './assets/domestic.jpg'
import travel from './assets/travel-insurance.jpg'
import accident from './assets/accident.jpg'

function Personal() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleItemClick = (option) => {
    setSelectedOption(option);
  };


  const [isOpen, setIsOpen] = useState(false);






  // Component for Ford content
  const Domestic = () => (

    <>
    <section className="py-5 bg-gray-100" id="about">

<div className='bg-white mx-3 py-9'>



  <div className="container mx-auto px-4 md:px-0"> {/* Added padding for responsiveness */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">



      {/* Text Content */}
      <div className="text-center md:text-left mx-3 animate__animated animate__zoomIn animate__delay-0.5s">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 text-decoration-color-yellow underline underline-offset-2 text-center">Domestic Package </h2>
        <p className="text-gray-600 mb-6 calligraph">
        <span className="text-blue-600"></span>Domestic Package in insurance, also sometimes referred to as home insurance, is a bundled insurance product designed specifically for your residence. It acts as a safety net against various risks that can affect your home and belongings.
        </p>
        
        <p className="text-gray-600 mb-6 calligraph">Typically, a Domestic Package will include coverage for the following:</p>
        
        
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Building:</span> This covers the structure of your house itself in case of accidental damage or loss from events like fire, lightning, explosions, storms, or even acts of vandalism.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Contents:</span> This protects the things inside your home, like furniture, appliances, electronics, and clothing, in case they are damaged or stolen.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Liability:</span> This covers you in case someone gets injured or their property is damaged at your residence, and you are found legally liable.</li>
       

      </div>

            {/* Image */}
            <div className="md:order-first mx-1">
        <img
          src={domestic}
          alt="Millenium Insurance Brokers"
          className="w-full h-auto rounded-md shadow-md max-w-full"
        />
      </div>


    </div>
  </div>
  </div>
  
</section>

   </>

  );

  // Component for Motor
  const Motor = () => (
    <div>
      <h2 className='text-2xl font-bold '>BMW</h2>
      <p>This is information about BMW.</p>
    </div>
  );


  // Component for Motor
  const PersonalAccident = () => (
    <>
    <section className="py-5 bg-gray-100" id="about">

<div className='bg-white mx-3 py-9'>



  <div className="container mx-auto px-4 md:px-0"> {/* Added padding for responsiveness */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">



      {/* Text Content */}
      <div className="text-center md:text-left mx-3 animate__animated animate__zoomIn animate__delay-0.5s">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 text-decoration-color-yellow underline underline-offset-2 text-center">Personal Accident </h2>
        <p className="text-gray-600 mb-6 calligraph">
        <span className="text-blue-600"></span>Personal accident (PA) insurance is a specific type of insurance that provides financial protection in case of accidental injuries, disability, or even death caused by an accident. It's distinct from health insurance or life insurance.
        </p>
        
        <p className="text-gray-600 mb-6 calligraph">Here's a breakdown of what personal accident insurance typically covers:</p>
        
        
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Accidental Death Benefit:</span>  If you pass away due to an accident, the policy pays a pre-determined amount to your beneficiaries.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Permanent Total Disability Benefit:</span> If an accident leaves you permanently disabled and unable to work, you receive a payout according to the policy terms.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Temporary Total Disability Benefit:</span> You might be compensated for loss of income if an accident temporarily prevents you from working for a certain period.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Medical Expenses:</span> Some PA policies may cover medical costs associated with the accident, but this is not always included, so be sure to check the details.</li>


      </div>

            {/* Image */}
            <div className="md:order-first mx-1">
        <img
          src={accident}
          alt="Millenium Insurance Brokers"
          className="w-full h-auto rounded-md shadow-md max-w-full"
        />
      </div>


    </div>
  </div>
  </div>
  
</section>

   </>
  );


  // Component for Travel Insurance
  const TravelInsurance = () => (
    <>
    <section className="py-5 bg-gray-100" id="about">

<div className='bg-white mx-3 py-9'>



  <div className="container mx-auto px-4 md:px-0"> {/* Added padding for responsiveness */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">



      {/* Text Content */}
      <div className="text-center md:text-left mx-3 animate__animated animate__zoomIn animate__delay-0.5s">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 text-decoration-color-yellow underline underline-offset-2 text-center">Travel Insurance </h2>
        <p className="text-gray-600 mb-6 calligraph">
        <span className="text-blue-600"></span>Travel insurance is basically a safety net for unexpected events that might disrupt your trip. It financially protects you in case of situations like trip cancellations, medical emergencies, or lost luggage..
        </p>
        
        <p className="text-gray-600 mb-6 calligraph">Here are some of the things travel insurance can cover:</p>
        
        
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Medical expenses:</span> If you get sick or injured while traveling, travel insurance can help cover the costs of medical treatment, including hospitalization and repatriation (getting you back home). This is especially important because most regular health insurance plans don't provide full coverage abroad.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Trip cancellation:</span> If you have to cancel your trip for a covered reason, such as illness, injury, or a natural disaster, travel insurance can reimburse you for your non-refundable travel costs, like flights and accommodation.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Travel delays:</span> If your flight or other transportation is delayed, travel insurance may cover your additional expenses, like meals or accommodation.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Lost luggage:</span> If your luggage is lost or stolen, travel insurance can help you recoup the value of your belongings.</li>
       

      </div>

            {/* Image */}
            <div className="md:order-first mx-1">
        <img
          src={travel}
          alt="Millenium Insurance Brokers"
          className="w-full h-auto rounded-md shadow-md max-w-full"
        />
      </div>


    </div>
  </div>
  </div>
  
</section>

   </>
  );

  // Render content based on selected option
  const renderContent = () => {
    switch (selectedOption) {
      case 'domestic':
        return <Domestic />;
      case 'motor':
        return <Motor />;
      case 'personal-accident':
        return <PersonalAccident />;
      case 'travel':
        return <TravelInsurance/>;
      default:
        return <Domestic />; // Render nothing by default
    }
}

  return (
    <>


<nav className="bg-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">

            <div className="hidden md:block">
              <div>
                <ul className='decoration-none ml-10 flex items-baseline space-x-4'>
                    <li href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => handleItemClick('domestic')}>Domestic Package</li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => handleItemClick('motor')}>Motor Insurance</li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => handleItemClick('personal-accident')}>Personal Accident</li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => handleItemClick('travel')}>Travel Insurance</li>
              </ul>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <li className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"onClick={() => handleItemClick('domestic')}>Domestic Package </li>
            <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => handleItemClick('motor')}>Motor Insurance</li>
            <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => handleItemClick('personal-accident')}>Personal Accident</li>
            <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => handleItemClick('travel')}>Travel Insurance</li>
          </div>
        </div>
      )}
    </nav>



      {renderContent()}

      <Footer/>


        </>
  );
}

export default Personal;


