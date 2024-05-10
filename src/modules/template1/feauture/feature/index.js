import React from "react";
import { useTemplate } from "../../../../context/AiContext";
import Benefit1 from "./benefits/Benefit1";
import Benefit2 from "./benefits/Benefit2";
import Benefit4 from "./benefits/Benefit4";
import Benefit3 from "./benefits/Benefit3";

export default function Feauture() {
     const { responseState } = useTemplate();
     const parsedContent = JSON.parse(responseState.content);
     const about = parsedContent.data.aboutus;
     
     

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
          <div className=" col-span-1 w-full h-[350px]  -rotate-[3deg] border border-[#343534] bg-[#1E1E1E] rounded-[10px] px-[6%] py-[8%]">
            <Benefit1/>
          </div>
          <div className=" col-span-1 w-full h-[350px] -mt-[50%] -rotate-[3deg] border border-[#343534] bg-[#1E1E1E] rounded-[10px] px-[6%] py-[8%]">
          <Benefit2/>
          </div>
          <div className=" col-span-1 w-full h-[350px]  -rotate-[3deg] border border-[#343534] bg-[#1E1E1E] rounded-[10px] px-[6%] py-[8%]">
            <Benefit3/>
          </div>
          <div className=" col-span-1 w-full h-[350px] -mt-[50%] -rotate-[3deg] border border-[#343534] bg-[#1E1E1E] rounded-[10px] px-[6%] py-[8%]">
            <Benefit4/>
          </div>
        </div>
      </div>
    </div>
  );
}
