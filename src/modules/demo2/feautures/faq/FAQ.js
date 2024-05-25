import React, { useState } from "react";
import refresh from "../../assets/refresh.png";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className=" w-full  font-semibold   px-[34px] rounded-tr-[30px] rounded-bl-[30px]  bg-[#242c30]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between items-center w-full h-[97px]"
      >
        <span className="text-[28px] text-white uppercase font-bold">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        {/* <svg
          className="fill-[#EF5242] shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg> */}
        <img src={refresh} className="w-[34px]" alt="refresh" />
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-white text-lg ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 pb-[2%]"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden  w-full font-medium ">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;
