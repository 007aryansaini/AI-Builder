import React from "react";
import Accordion from "./FAQ";
import refresh from "../../assets/refresh.png";
export default function FAQ({ promptData, parts }) {
  const faqs = parts?.faq;
  const short_desc = parts?.short_desc;
  return (
    <div className="bg-[#131C20] w-full font-poppins text-white  px-[5%] pt-[5%] ">
      <div className="max-w-[1440px] mx-auto relative">
        <div className="absolute top-0 left-0 w-[44px] h-[1004px] blur-[150px] bg-white" />
        <div className="flex items-start gap-4">
          <img src={refresh} className="w-[40px] mt-[2%]" alt="refresh" />
          <h3 className="text-[40px] text-white font-bold w-[375px] uppercase">
            Frequently ASKED qUESTIONS
          </h3>
        </div>
        <div className="px-[20%] mt-[6%] flex gap-6 flex-col">
          {faqs &&
            faqs.map((faq, index) => (
              <div key={index}>
                <Accordion
                  key={faq.question}
                  title={faq.question}
                  answer={faq.answer}
                />
              </div>
            ))}
          {/* <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          />
          <Accordion
            title="Where are your numbers from?"
            answer="Our numbers come from major US phone companies. We guarantee you can verify any service, even those that don't accept virtual numbers such as Google."
          /> */}
        </div>
      </div>
    </div>
  );
}
