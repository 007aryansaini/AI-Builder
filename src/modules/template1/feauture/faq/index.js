import React from "react";
import Accordion from "./FAQ";
import { useTemplate } from "../../../../context/AiContext";

export default function FAQ() {
  const { responseState } = useTemplate();
  const parsedContent = responseState
    ? JSON.parse(responseState.content)
    : null;
  const faqs = parsedContent?.data?.faq;

  const short_desc = parsedContent.data.short_desc;
  return (
    <div className="bg-[#000000] w-full font-poppins text-white mt-[6%] px-[5%] ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex  items-center flex-col">
          <h2 className="text-[90px] font-clash font-semibold text-center">
            FAQs
          </h2>
          <p className="text-center font-clash w-[800px] ">{short_desc}</p>
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
        </div>
      </div>
    </div>
  );
}
