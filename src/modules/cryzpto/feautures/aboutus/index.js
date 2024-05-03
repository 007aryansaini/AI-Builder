import React from "react";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { PiHashStraightBold } from "react-icons/pi";
import { IconContext } from "react-icons/lib";
import { BsArrowUp } from "react-icons/bs";
import { useTemplate } from "../../../../context/AiContext";
function AboutUs() {
    const { responseState } = useTemplate();
    const parsedContent = JSON.parse(responseState.content);
    const tagline = parsedContent.data.tagline;
    const description = parsedContent.description;
  return (
    <div className="bg-[#111111] ">
      <div className="flex justify-center items-center w-[100%]">
        <div className="px-20 mt-12 mb-20 flex gap-2">
          <div className="w-[180px] h-[80px] rounded-[8px] border border-[#969696] flex justify-center items-center">
            <div className="w-[40px] h-[40px] rounded-full bg-[#F7512E] flex justify-center items-center">
              <h5>1</h5>
            </div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
          </div>
          <div className="w-[500px] h-[80px] bg-[#F7512E] rounded-[8px]  flex gap-6 justify-center items-center">
            <div className="flex">
              <div className="w-[40px] h-[40px] rounded-full border border-[#000000] flex justify-center items-center">
                <h5>1</h5>
              </div>
              <div className="w-[40px] h-[40px] rounded-full border border-[#000000] flex justify-center items-center bg-black text-white">
                <h5>2</h5>
              </div>
              <div className="w-[40px] h-[40px] rounded-full bg-[#F7512E] border border-[#000000] flex justify-center items-center">
                <h5>3</h5>
              </div>
            </div>
            <div>
              <h5 className="text-[14px]">
                The logo of the largest bubble company has <br /> become our
                flag in the fight against lies!
              </h5>
            </div>
            <IconContext.Provider value={{}}>
              <BsArrowUp className="rotate-45" />
            </IconContext.Provider>
          </div>

          <div className="w-[180px] h-[80px] rounded-[8px] border border-[#969696] flex justify-center items-center">
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full bg-[#F7512E] flex justify-center items-center">
              <h5>3</h5>
            </div>
          </div>
          <div className="flex h-[80px] items-center">
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
            <div className="w-[40px] h-[40px] rounded-full border border-[#969696] flex justify-center items-center"></div>
          </div>
        </div>
      </div>
      <div className="px-20 flex justify-center ">
        <div className="max-w-[1440px] mx-auto px-28 flex flex-col">
          <div className="flex gap-3 mb-5">
            <h5 className="text-[20px] text-[#C3C3C3]">01</h5>
            <div className="w-[280px] h-[35px] flex justify-center items-center bg-[#C3C3C3]  rounded-[8px]">
              <div className="flex gap-1 items-center">
                <h5 className=" text-[18px]">About</h5>
                <div>
                  <div className="relative">
                    <IconContext.Provider value={{ color: "#000000" }}>
                      <BsArrowDownShort className="-rotate-45" />
                      <BsArrowUpShort className="-rotate-45 absolute top-1 left-1" />
                    </IconContext.Provider>
                  </div>
                </div>

                <h5 className=" text-[18px]">Network</h5>
              </div>
            </div>
          </div>
          <div className="max-w-[1440px] mx-auto px-28">
            <h2 className="text-[40px] text-[#C3C3C3]">{description}</h2>
          </div>
        </div>
      </div>
      <div className="px-20 mt-7 flex justify-center items-center">
        <div className="flex gap-4">
          <div>
            <div className="w-[322px] h-[320px] rounded-[32px] bg-[#C3C3C3] relative">
              <div className="absolute -top-[0px] left-[40%]">
                <div className="relative">
                  <IconContext.Provider
                    value={{ color: "#000000", size: "150px" }}
                  >
                    <BsArrowDownShort className="-rotate-45" />
                    <BsArrowUpShort className="-rotate-45 absolute top-12 left-11" />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
            <h4>Constant Monitoring</h4>
            <h6>
              Monitor domains,websites,app stores
              <br /> and others
            </h6>
          </div>
          <div className="flex justify-center flex-col gap-4">
            <div className="w-[322px] h-[100px] rounded-[18px] bg-[#F7512E]"></div>
            <div>
              <div className="w-[322px] h-[320px] rounded-[32px] bg-[#C3C3C3]"></div>
              <h4>Al-based Detection</h4>
              <h6>
                Monitor domains,websites,app stores
                <br /> and others
              </h6>
            </div>
          </div>
          <div>
            <div className="w-[322px] h-[320px] rounded-[32px] bg-[#C3C3C3]"></div>
            <h4>Automatic triage</h4>
            <h6>
              Monitor domains,websites,app stores
              <br /> and others
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
