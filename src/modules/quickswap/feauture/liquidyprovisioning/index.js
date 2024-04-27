import React from "react";

import { motion } from "framer-motion";
import { TypingText } from "../../utils/customtext";
import { staggerContainer, fadeIn } from "../../utils/motion";
import dollar from "../../assets/liquidity.png";
import eth from "../../assets/eth.png";
import { Button } from "../../components/ui/buttons/Button";
import { useTemplate } from "../../../../context/AiContext";

export default function LiquidityProvisioning() {
   const { responseState } = useTemplate();

   const parsedContent = JSON.parse(responseState.content);

   const benefit1 = parsedContent.data.benefits.benefit1;
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full mt-[1.5%] bg-[#090B18] relative z-10 sm:pt-[5%] py-0"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="  relative z-10 grid lg:grid-cols-2 grid-cols-1 space-y-32 md:space-y-0  items-center justify-center   lg:h-screen h-min md:px-[4%] px-[6%]">
          <div className="col-span-1">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex  flex-col items-start text-[#FAFAFACC] flex-1 gap-4"
            >
              <div className=" text-2xl ">
                <TypingText title={benefit1.subtitle} />
              </div>
              <h2 className="sm:text-[48px] w-[500px] text-2xl font-extrabold leading-[1.1]">
                {benefit1.title}
              </h2>

              <p className="sm:text-lg text-base w-[500px] mt-6 mb-3">
                {benefit1.paragraph}
              </p>
              <Button variant="secondary">Learn More </Button>
            </motion.div>
          </div>
          <div className=" col-span-1  sm:mt-0 ">
            <motion.div className="relative  ">
              <motion.img
                animate={{
                  y: "-20%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="w-[500px]"
                src={dollar}
                alt="dollar"
              />
              <motion.img
                animate={{
                  y: "-20%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                src={eth}
                alt="eth"
                className="w-[250px] absolute -top-[25%] right-[20%]"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
