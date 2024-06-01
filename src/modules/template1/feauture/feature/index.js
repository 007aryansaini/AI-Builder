import React from "react";
import { useTemplate } from "../../../../context/AiContext";
import { GoHubot } from "react-icons/go";

export default function Feauture({ promptData, parts }) {
  const benefits = parts?.benefits.slice(0, 4);
  const about = parts?.aboutus;
 
  return (
    <div className="bg-[#000000] w-full font-poppins text-white mt-[10%] px-[5%] ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-between ">
          <h1 className="text-[80px] leading-[80px] font-clash font-semibold">
            Enjoy Web3 <br />
            Feauture
          </h1>
          <p className="font-clash w-[350px]">{about}</p>
        </div>
        <div className="grid grid-cols-4  gap-8 mt-[13%]">
          {benefits &&
            benefits.map((benefit, index) => (
              <div key={index}>
                <div className=" col-span-1 w-full h-[350px]  -rotate-[3deg] border border-[#343534] bg-[#1E1E1E] rounded-[10px] px-[6%] py-[8%]">
                  <div className="flex items-center gap-2">
                    <div className="bg-[#FA0D14] rounded-full p-3 w-[40px] h-[40px] text-[20px] flex justify-center items-center">
                      <GoHubot />
                    </div>
                    <div>
                      <h5 className="font-clash text-[18px] font-semibold">
                        {benefit.subtitle}
                      </h5>
                    </div>
                  </div>
                  <p className=" font-clash text-white/70 font-medium mt-[7%]">
                    {benefit.paragraph}
                  </p>
                </div>
              </div>
            ))}
        </div>
       
      </div>
    </div>
  );
}
