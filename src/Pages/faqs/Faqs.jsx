// src/App.js
import React from 'react';
import AccordionItem from './AccordionItem';
import data from './data';
import Footer from '../../components/footer/Footer';

function Faqs() {
  return (
    <>
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
      <input
        type="text"
        placeholder="Search FAQs"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
      />
      <div className="divide-y divide-gray-300">
        {data.map((faq, index) => (
          <AccordionItem key={index} title={faq.question} content={faq.answer} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
          Previous
        </button>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">
          Next
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Faqs;
