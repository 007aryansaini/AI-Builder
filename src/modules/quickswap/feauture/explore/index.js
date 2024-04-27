import React from "react";
import { Button } from "../../components/ui/buttons/Button";
import { motion } from "framer-motion";
import explore from "../../assets/explore.png";
import { useTemplate } from "../../../../context/AiContext";

export default function Explore() {
  const { responseState } = useTemplate();

  const parsedContent = JSON.parse(responseState.content);

  const explore = parsedContent.data.explore;
  return (
    <div className="bg-[#090B18]  pt-[2%] pb-[3%]  z-10 relative">
      <div className="max-w-[1440px] mx-auto">
        <div className="sm:px-[4%] px-[6%]">
          <div className=" relative flex sm:flex-row flex-col justify-between gap-8 items-center  bg rounded-[20px] sm:h-[50vh] pt-[18%] sm:pt-0  px-[4%] ">
            <div className="flex sm:justify-start justify-center sm:items-start items-center gap-4 flex-col">
              <h4 className="sm:text-[48px]  text-2xl text-[#D66A1E] font-extrabold">
                {explore.title}
              </h4>
              <p className="text-[#FAFAFA] w-[400px] text-center sm:text-2xl text-base">
                {explore.paragraph}
              </p>
              <Button variant="secondary">Explore App</Button>
            </div>
            <motion.div className="relative">
              <img src={explore} alt="explore" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
