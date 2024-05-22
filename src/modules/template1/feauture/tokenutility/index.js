import React from "react";
import { GoHubot } from "react-icons/go";
import chatbot from "../../assest/Chat bot.gif"
import { useTemplate } from "../../../../context/AiContext";
export default function TokenUtility({ promptData, parts }) {
  const testimonials = parts?.testimonial;
  return (
    <div className="bg-[#000000] w-full font-poppins text-white mt-[6%] px-[5%] ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex  items-center flex-col">
          <h2 className="text-[90px] font-clash font-semibold text-center">
            Testimonial Reviews
          </h2>
          <p className="text-center font-clash w-[800px] "></p>
        </div>
        <div className="grid grid-cols-3  mt-[10%]">
          <div
            className=" col-span-1 w-full 
          "
          ></div>
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
                    <h5 className="font-clash text-white text-sm">John Doe</h5>
                    <p className="font-clash w-[300px] text-sm mt-[3%]">
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
