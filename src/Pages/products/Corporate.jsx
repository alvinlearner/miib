import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import 'animate.css';

import { ChevronDownIcon } from '@heroicons/react/20/solid'

import { Menu,Transition } from '@headlessui/react';


import motor from './assets/motor.jpg'
import medical from './assets/Medical.jpg'
import domestic from './assets/domestic.jpg'
import travel from './assets/travel-insurance.jpg'
import accident from './assets/accident.jpg'

import { domesticSpeech, personalSpeech } from './data';

function Personal() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleItemClick = (option) => {
    setSelectedOption(option);
  };

  // Function to speak content

  const speechClick = () => {
    const text = domesticSpeech;
    const value = new SpeechSynthesisUtterance(text);
  
    // Stop speaking when the speech content has finished
    value.onend = () => {
      console.log('Speech has finished.');
    };
  
    window.speechSynthesis.speak(value);
  };
  
  // Function to stop speaking when clicked
  const stopSpeech = () => {
    window.speechSynthesis.cancel();
  };


  

  const [isOpen, setIsOpen] = useState(false);






  // Component for Ford content
  const Medical = () => (

    <>
      <section className="py-5 bg-gray-100" id="about">


<div className='bg-white mx-3 py-9'>



  <div className="container mx-auto px-4 md:px-0"> {/* Added padding for responsiveness */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">



      {/* Text Content */}
      <div className="text-center md:text-left mx-3 animate__animated animate__zoomIn animate__delay-0.5s">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 text-decoration-color-yellow underline underline-offset-2 text-center">Medical Insurance </h2>
        <p className="text-gray-600 mb-6 calligraph">
        Health insurance is not a luxury; it's a necessity. There are many other things you should go without before you choose to go without health insurance.
        </p>
        <p className="text-gray-600 mb-6 calligraph">
        If you want insurance but feel unsure about what coverage works for you, there are some questions we can help you answer.
        </p>

<ul className="flex flex-col gap-2 calligraph mb-6">
  <li className="flex items-center ">
    <span className="bullet mr-2">•</span>
    How's your health? How often do you go to the doctor?
  </li>
  <li className="flex items-center">
    <span className="bullet mr-2">•</span>
    What current options do you have?
  </li>
  <li className="flex items-center">
    <span className="bullet mr-2">•</span>
    What are your priorities?
  </li>
  <li className="flex items-center">
    <span className="bullet mr-2">•</span>
    What are your coverage needs?
  </li>
  <li className="flex items-center">
    <span className="bullet mr-2">•</span>
    Have you gotten an expert opinion?
  </li>
</ul>

    
    <p className="text-gray-600 calligraph">Talk to us and get a free quote.</p>

      </div>

            {/* Image */}
            <div className="md:order-first mx-1">
        <img
          src= {medical} 
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
  const Benefits = () => (
    <>
    <section className="py-5 bg-gray-100" id="about">

<div className='bg-white mx-3 py-9'>



  <div className="container mx-auto px-4 md:px-0"> {/* Added padding for responsiveness */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">



      {/* Text Content */}
      <div className="text-center md:text-left mx-3 animate__animated animate__zoomIn animate__delay-0.5s">
        <h2 className="text-3xl font-bold mb-4 text-blue-600 text-decoration-color-yellow underline underline-offset-2 text-center">Motor Insurance </h2>
        <p className="text-gray-600 mb-6 calligraph">
        <span className="text-blue-600"></span>Motor insurance in Kenya is a legal requirement for all vehicle owners. It financially protects you in case of accidents, theft, fire, or other unforeseen events that can damage your car.
        </p>
        
        <p className="text-gray-600 mb-6 calligraph">Here's a breakdown of what personal accident insurance typically covers:</p>
        
        
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Third Party Only (TPO):</span> This is the most basic and mandatory type of motor insurance in Kenya. It covers your legal liability for injuries and property damage caused to a third party in an accident. However, it does not provide any coverage for your own vehicle.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Third Party, Fire and Theft (TPF&T):</span> This type of insurance builds on TPO by also covering your car in case of fire and theft.</li>
          <li className="text-gray-600 mb-6 calligraph"> <span className='text-blue-600 text-xl'>Comprehensive Cover:</span> This is the most extensive type of motor insurance, offering coverage for your vehicle in case of accidental damage, fire, theft, vandalism, and even natural disasters. It also includes TPO benefits.</li>


      </div>

            {/* Image */}
            <div className="md:order-first mx-1 bg-red-500">
        <img
          src={motor}
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
  const GroupLife = () => (
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
  const WorkInjury = () => (
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
      case 'medical':
        return <Medical />;
      case 'benefits':
        return <Benefits />;
      case 'group-life':
        return <GroupLife />;
      case 'work-injury':
        return <WorkInjury/>;
      // case 'group-personal-accident':
      //   return <GroupPersonalAccident/>;
      default:
        return <Medical />; // Render nothing by default
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
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => handleItemClick('medical')}>Medical Insurance</li>
                    <li className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" onClick={() => handleItemClick('benefits')}>Employee Benefits</li>
                    
                    <div className="relative">

                    <button className=' inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50' onClick={() => setIsOpen(!isOpen)}>View more</button>

                    <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    {(ref) => (
                      <div
                        ref={ref}
                        className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <div className="py-1" role="none">
                          {/* Dropdown items */}
                          <li className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleItemClick('group-life')} >Group Personal Accident for Staff & Board Members</li>
                          <li  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleItemClick('group-life')}>Work Injury Benefits (WIBA)</li>
                        </div>
                      </div>
                    )}
                  </Transition>
                  </div>

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
            <li  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(!isOpen)}>View more</li>
            
            <div className="relative">

{/* <button className=' px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-400' onClick={() => setIsOpen(!isOpen)}>View more</button> */}

<Transition
show={isOpen}
enter="transition ease-out duration-100"
enterFrom="transform opacity-0 scale-95"
enterTo="transform opacity-100 scale-100"
leave="transition ease-in duration-75"
leaveFrom="transform opacity-100 scale-100"
leaveTo="transform opacity-0 scale-95"
>
{(ref) => (
  <div
    ref={ref}
    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
    role="menu"
    aria-orientation="vertical"
    aria-labelledby="options-menu"
  >
    <div className="py-1" role="none">
      {/* Dropdown items */}
      <li  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleItemClick('domestic')}>Domestic Package</li>
      <li  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={() => handleItemClick('motor')}>Motor Insurance</li>
    </div>
  </div>
)}
</Transition>
</div>

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


