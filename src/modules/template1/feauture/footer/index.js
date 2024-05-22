import React from "react";
import { SiMakerbot } from "react-icons/si";
import { FaDiscord, FaInstagramSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import { useTemplate } from "../../../../context/AiContext";
import { useForm } from "../../../../context/store";
export default function Footer({ promptData, parts }) {
  const short_desc = parts?.short_desc;
  return (
    <div className="bg-[#000000] w-full font-poppins text-white mt-[6%] px-[5%] ">
      <div className="max-w-[1440px] mx-auto">
        <div className="flex justify-center flex-col items-center w-full">
          <div className="flex items-center gap-3 text-[#FA0D14] ">
            <SiMakerbot className="text-[50px]" />
            <h4 className="font-clash text-[40px] font-semibold">
              {promptData?.title}
            </h4>
          </div>
          <p className="font-clash text-center w-[500px] mt-[1%] ">
            {short_desc}
          </p>
          <div className="w-[500px] h-[50px] rounded-full bg-[#212226] flex justify-between mt-[3%]">
            <input
              type="text"
              className="w-f[70%] h-full outline-none bg-transparent px-5"
              placeholder="Enter your email"
            />
            <button className="bg-[#FA0D14] h-[50px] px-6 rounded-full font-clash">
              Join waitlist
            </button>
          </div>
          <div className="flex items-center my-[3%] text-[25px] gap-5">
            <FaTwitter />
            <FaDiscord />
            <FaYoutube />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
    </div>
  );
}
