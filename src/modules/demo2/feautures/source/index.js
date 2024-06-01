import React from 'react'
import refresh from "../../assets/refresh.png"
import fire from "../../assets/fire.png";
export default function Source({ promptData, parts }) {
  const benefits = parts?.benefits;


  return (
    <div className=" bg-[#131C20] w-full">
      <div className=" max-w-[1440px] mx-auto">
        <div className="w-full py-[4%] relative">
          <div className="absolute top-0 right-0 w-[480px] h-[230px] blur-[150px] bg-white" />
          <div className="mx-w-[1440px] mx-auto">
            <div className="px-[5%]">
              <div className="flex items-start gap-4">
                <img src={refresh} className="w-[40px] mt-[2%]" alt="refresh" />
                <h3 className="text-[40px] text-white font-bold w-[348px] uppercase">
                  The only Information Source you'll ever need.
                </h3>
              </div>
              <div className="grid grid-cols-4 gap-x-20 ml-[56px] mt-[4%]">
                {benefits &&
                  benefits.map((benefit, index) => (
                    <div key={index}>
                      <div className="col-span-1 w-full h-[310px]">
                        <img src={fire} className="" alt="fire" />
                        <h4 className="text-[24px] text-white uppercase font-bold mt-2">
                          {benefit.title}
                        </h4>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
