import React from "react";
import Accordion from ".";

const FAQ = () => {
  return (
    <div className=" py-[10%] flex justify-center font-clash items-center text-white w-full">
      <div className=" sm:px-[5%] px-[4%]">
        <h4 className="font-bold sm:text-[40px] text-[24px] mb-2">
          FREQUENTLY ASKED QUESTIONS
        </h4>
        <Accordion
          title="What is Web3?"
          answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
        />
        <Accordion
          title="What is Web3?"
          answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
        />
        <Accordion
          title="What is Web3?"
          answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
        />
        <Accordion
          title="What is Web3?"
          answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
        />
        <Accordion
          title="What is Web3?"
          answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
        />
      </div>
    </div>
  );
};

export default FAQ;
