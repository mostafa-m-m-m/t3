"use client"
import React, { useState } from 'react'
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
const Accordion = ({title,answer}) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
      <div className="py-2 border-b-[1px] border-b-gray-300 mb-4  max-sm:mx-7">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full mb-5"
        >
          <span className='text-3xl max-lg:text-2xl max-sm:text-base '>{title}</span>
          <div className='text-3xl max-lg:text-2xl max-sm:text-xl text-[#F8B517]'>{accordionOpen === false ? <FaAngleDown/>:<FaAngleUp/>}</div>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-xl ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden max-lg:text-base max-sm:text-xs">{answer}</div>
        </div>
      </div>
    );
  };

export default Accordion