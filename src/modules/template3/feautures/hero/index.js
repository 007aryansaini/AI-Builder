import React from "react";
import { LuCopy } from "react-icons/lu";
import { useTemplate } from "../../../../context/AiContext";

export default function Hero({ promptData, parts }) {
  const tagline = parts?.tagline;
  const description = parts?.description;

  return (
    <div className="relative">
      <div className=" w-full h-screen relative max-w-[1440px] mx-auto px-[5%]">
        <div className="flex items-center h-[86vh]">
          <div className="grid grid-cols-12 w-full">
            <div className="col-span-6">
              <div className="flex items-start flex-col">
                <h3 className="text-[60px]  font-bold font-lexend geo leading-[68px]">
                  Descover geoNFTs in The Real World
                </h3>
                <p className="text-[28px] w-[650px] font-lexend leading-[40px] my-[3%] text-white/70 ">
                  Lost Worlds is the first location based NFT platform, bridging
                  the gap between web2 and web3
                </p>
                <button
                  className=" mt-[2%] text-[2
                  
                  
                  
                  
                  
                  
                  






      
                  
                  px] font-lexend font-medium text-white  px-6 py-[6px] border-[4px] border-[#558F26] bg-[#020204]"
                >
                  Explore
                </button>
              </div>
            </div>
            <div className="col-span-6"></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[12%] w-full ">
        <div className="flex justify-center  w-full">
          <div className="w-[70%] h-[13vh] bg-[#16181D] rounded-[8px] flex justify-between items-center px-[8%]">
            <h5 className="text-white text-[24px] font-lexend">
              Contact address
            </h5>
            <h5 className="text-white/40 text-[28px] font-lexend">
              0HT89993FHSJJ58399JKXX759%%%839
            </h5>
            <LuCopy className="text-white text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
