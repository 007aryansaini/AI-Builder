import React from "react";
import { GoHubot } from "react-icons/go";
import chatbot from "../../assest/Chat bot.gif"
import { useTemplate } from "../../../../context/AiContext";
export default function TokenUtility() {
    const { responseState } = useTemplate();
      const parsedContent = responseState
        ? JSON.parse(responseState.content)
        : null;
        const testimonials = parsedContent?.data?.testimonial;
  return (
    <div className="bg-[#000000] w-full font-poppins text-white mt-[6%] px-[5%] ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex  items-center flex-col">
          <h2 className="text-[90px] font-clash font-semibold text-center">
            Testimonial Reviews
          </h2>
          <p className="text-center font-clash w-[800px] ">fffffff</p>
        </div>
        <div className="grid grid-cols-3  mt-[10%]">
          <div className=" col-span-1 w-full h-[120px] py-[4%] px-[6%] rounded-[12px] border border-[#343534] bg-[#1E1E1E]">
            <div className="flex items-start gap-4">
              <div className="bg-[#FA0D14] rounded-[12px] p-3 w-[40px] h-[40px] text-[20px] flex justify-center items-center">
                <GoHubot />
              </div>
              <div>
                <h4 className="font-clash text-lg font-semibold">
                  Lending Market Listing
                </h4>
                <p className="font-clash w-[300px] text-sm mt-[4%]">
                  {/* {testimonial.review1.title} */}
                </p>
              </div>
            </div>
          </div>
          <div className=" col-span-2 w-full ">
            <img src={chatbot} alt="chatbot" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-[30%]">
          {testimonials &&
            testimonials.map((testimonial, index) => (
              <div
                key={index}
                className=" col-span-1 w-full h-[120px] py-[4%] px-[6%] rounded-[12px] border border-[#343534] bg-[#1E1E1E]"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-[#FA0D14] rounded-[12px] p-3 w-[40px] h-[40px] text-[20px] flex justify-center items-center">
                    <GoHubot />
                  </div>
                  <div>
                    <h4 className="font-clash text-lg font-semibold">
                      Lending Market Listing
                    </h4>
                    <p className="font-clash w-[300px] text-sm mt-[4%]">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
