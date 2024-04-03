// src/components/AccordionItem.js
import React, { useState } from 'react';

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

export default AccordionItem;
