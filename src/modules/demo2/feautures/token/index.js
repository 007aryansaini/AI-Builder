import React from "react";
import refresh from "../../assets/refresh.png";
import tok from "../../assets/tok.png";
export default function Token({ promptData, parts }) {
  const title = promptData?.title;
  const stats = parts?.stats;
  return (
    <div className="bg-[#131C20]">
      <div className="max-w-[1440px] mx-auto">
        <div className="p-[5%] relative">
          <div className="absolute top-0 left-0 w-[44px] h-[1004px] blur-[150px] bg-white" />
          <div className="flex justify-center items-center gap-4 ">
            <h3 className="text-[40px] text-white font-bold  uppercase">
              Increased Stats
            </h3>
            <img src={refresh} className="" alt="refresh" />
          </div>
          <div className="grid grid-cols-2 items-center mt-[6%]">
            <div className="col-span-1">
              <img src={tok} alt="tok" />
            </div>
            <div className="col-span-1">
              <div className="w-[525px] h-[305px] bg-[#5054552b] border border-[#8F8686] rounded-[12px] px-[4%] py-[4%]">
                <h4 className="text-[32px] text-white font-semibold">
                  {title}
                </h4>
                <hr className="w-[419px] h-[1px] border border-white mt-[2%]" />
                <div className="mt-[8%] flex flex-col gap-7">
                  {stats &&
                    stats.map((stat, index) => (
                      <div className="flex gap-4 items-start" key={index}>
                        <div className="w-[7px] h-[7px] rounded-full bg-white mt-3"></div>
                        <h5 className="text-[24px] font-semibold text-white">
                          {stat.title}
                        </h5>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-[3%]">
            <button className="px-[100px] py-[14px] bg-[#394144eb] text-white  text-[24px]">
              Launch More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
