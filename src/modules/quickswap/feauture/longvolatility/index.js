import React from "react";

import { motion } from "framer-motion";
import { TypingText } from "../../utils/customtext";
import { staggerContainer, fadeIn, planetVariants } from "../../utils/motion";
import rocket from "../../assets/3dicons.png";
import dollar from "../../assets/dollar.png";
import coins from "../../assets/coins.png";
import { Button } from "../../components/ui/buttons/Button";
import { useTemplate } from "../../../../context/AiContext";
export default function LongVolatilty() {
   const { responseState } = useTemplate();

   const parsedContent = JSON.parse(responseState.content);

   const benefit2 = parsedContent.data.benefits.benefit2;
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="w-full  bg-[#090B18] relative z-10 sm:py-[2%] py-0"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="  relative z-10 grid md:grid-cols-2 grid-cols-1 space-y-32  items-center justify-center sm:h-screen h-min sm:px-[4%] px-[6%]">
          <div className=" sm:block hidden bg-[#FF630B] z-10 absolute w-[400px] h-[400px] rounded-[400px] blur-[150px]  bottom-0 left-0" />
          <div className=" flex sm:hidden bg-[#FF630B] z-10 absolute w-[273px] h-[273px] rounded-[400px] blur-[102px]  bottom-0 left-0" />
          <div className=" col-span-1 sm:mt-0 ">
            <motion.div></motion.div>
            <motion.div variants={planetVariants("left")} className="relative ">
              <motion.img
                animate={{
                  y: "-20%",
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                src={rocket}
                alt="dollar"
                className="absolute -top-[30%] right-[10%]"
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
                src={coins}
                alt="dollar"
                className="absolute bottom-0 right-[15%]"
              />
            </motion.div>
          </div>
          <div className="col-span-1 md:order-last order-first">
            <motion.div
              variants={fadeIn("left", "tween", 0.2, 1)}
              className="flex  flex-col items-start text-[#FAFAFACC] flex-1 gap-4"
            >
              <div className=" text-2xl ">
                <TypingText title={benefit2.subtitle} />
              </div>
              <h2 className="sm:text-[48px] w-[500px] text-2xl font-extrabold leading-[1.1]">
                {benefit2.title}
              </h2>

              <p className="sm:text-lg text-base w-[500px] mt-6 mb-3">
                {benefit2.paragraph}
              </p>
              <Button variant="secondary">Learn More </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
