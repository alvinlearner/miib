import React, { useState } from 'react';
import data from './data';
import Footer from '../../components/footer/Footer';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="py-2">
      <button
        className="w-full flex justify-between items-center py-2 px-4 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{title}</span>
        <span className={isOpen ? 'transform rotate-180' : 'transform rotate-0'}>
          &#x2B;
        </span>
      </button>
      {isOpen && <p className="p-4 bg-gray-50">{content}</p>}
    </div>
  );
};

function Faqs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = data.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate the start and end index for pagination
  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;

  const paginatedData = filteredData.slice(startIndex, endIndex);

  return (
    <>
      <div className="max-w-3xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <input
          type="text"
          placeholder="Search FAQs"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="divide-y divide-gray-300">
          {paginatedData.map((faq, index) => (
            <AccordionItem key={index} title={faq.question} content={faq.answer} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4"
            disabled={endIndex >= filteredData.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faqs;
