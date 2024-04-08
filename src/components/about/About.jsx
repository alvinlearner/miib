// AboutUsSection.js
import React from 'react';
import './About.css'
import { t1 } from './index'


const AboutUsSection = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
<section className="py-5 bg-gray-100" id="about">

<h1 className="text-3xl font-bold mb-4 text-blue-600 text-center">We Are Millenium Insurance Brokers </h1>

<div className='bg-white mx-3 py-9'>



  <div className="container mx-auto px-4 md:px-0"> {/* Added padding for responsiveness */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">



            {/* Image */}
      <div className="md:order-first mx-3">
        <img
          src={t1} 
          alt="Millenium Insurance Brokers"
          className="w-full h-auto rounded-md shadow-md max-w-full"
        />
      </div>


      {/* Text Content */}
      <div className="text-center md:text-left mx-3">
        <h2 className="text-2xl font-bold mb-4 text-gray-600">About Millenium Insurance Brokers </h2>
        <p className="text-gray-600 mb-6 calligraph">
        <span className="text-blue-600"> Millenium Insurance Brokers (MIB) LTD</span>is an insurance intermediary providing insurance broking service to individuals, corporates, missions and organization clientele. MIB commenced operation in January 1990 having been incorporated a year earlier with the objective of protecting customer's assets, property ,lives and other insurable interest against loss, damage, death, illness and liabilities arising from insurable risks.
        </p>
        <p className="text-gray-600 mb-6 calligraph">
          <span className="text-blue-600">Millenium Insurance Brokers</span> is a fully Kenyan-owned company that has steadily grown over the years to its present respectable position, having established extensive working agreements with several renowned international insurance brokers and insurance companies. With these connections, Millenium Insurance Brokers can provide insurance broking services that transcend our borders and can access the latest products and technology in insurance for our clients. Our clients share our views; they want an honest and transparent relationship and believe in two-way dialogue.
        </p>
    
      </div>


    </div>
  </div>
  </div>
</section>
    </>
  );
};

export default AboutUsSection;



