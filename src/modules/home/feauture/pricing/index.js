import React from "react";

export default function Pricings() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center text-white px-[5%]">
        <h2 className="text-[60px] text-center font-clash font-bold">
          Simple, transparent & flexible <br /> pricing for every nee
        </h2>
        <p className="text-xl font-circular w-[600px]">
          You can get started for free and change your plan as you grow.
        </p>
        <div className="grid grid-cols-3 gap-6 items-center w-full mt-[3%]">
          <div>
            <div className="w-full rounded-[8px] bg-[#1A191E] p-4">
              <h5 className="text-xl font-clash font-medium">Free Plan</h5>
              <h6 className="text-base text-white/70 font-clash ">
                For early-stage startups looking to combine data from few
                sources.
              </h6>
              <div className="my-4">
                <h4 className="font-clash text-3xl">
                  <span className="font-semibold">$0 </span>
                  <sub className="text-lg">per month</sub>
                </h4>
              </div>
              <button className="w-full bg-[#2B2A30] py-2.5 rounded-[12px] font-clash ">
                Get started
              </button>
            </div>
            <div clasName="w-full p-4">
              <div className="border-b-[1px] border-gray-600 py-3">
                <h5 className="font-clash font-semibold">
                  12,000 MAU (monthly active users)
                </h5>
              </div>
              <div className="border-b-[1px] border-gray-600 py-3">
                <h5 className="font-clash font-semibold">
                  12,000 MAU (monthly active users)
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
