import React from "react";
import { GoHubot } from "react-icons/go";
import { useTemplate } from "../../../../../context/AiContext";

export default function Benefit4() {
  const { responseState } = useTemplate();
  const parsedContent = JSON.parse(responseState.content);
  const benefit4 = parsedContent.data.benefits.benefit1;
  return (
    <div>
      <div>
        <div className="flex items-center gap-2">
          <div className="bg-[#FA0D14] rounded-full p-3 w-[40px] h-[40px] text-[20px] flex justify-center items-center">
            <GoHubot />
          </div>
          <div>
            <h5 className="font-clash text-[18px] font-semibold">
              {benefit4.subtitle}
            </h5>
          </div>
        </div>
        <p className=" font-clash text-white/70 font-medium mt-[7%]">
          {benefit4.paragraph}
        </p>
      </div>
    </div>
  );
}
