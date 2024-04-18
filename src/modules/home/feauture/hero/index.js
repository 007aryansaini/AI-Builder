import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, fadeIn } from "../../utils/motion";
export default function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="w-full h-screen"
    >
      <motion.div className=" relative  rotate-180 -top-[4%]">
        <motion.div
          variants={fadeIn("down", "tween", 0.8, 1)}
          className=" why w-[100%] sm:h-[200px] h-[200px] "
        ></motion.div>
      </motion.div>
      <div className=" flex flex-col justify-center items-center w-full mt-[4%]">
        <h5 className="text-white btn px-5 py-2 rounded-[50px] font-clash mb-[2%]">Updated: AI Integrated</h5>
        <h1 className="text-white font-clash text-[50px] text-center font-bold leading-[50px]">
          Automate Development <br /> AI for memorable Development
        </h1>
        <p className="text-white text-center font-circular text-xl py-[1.5%]">
          Create unique brand identity,generate and pushlish <br/> consistence while
          we make devlopment easy as it always <br/>feels good to to things perfectedly
        </p>
        <button  className=" bg-[#8d00ce] px-8 rounded-[50px] mt-2 font-clash text-white font-semibold py-2">Try Buildorz</button>
        <div className="relative"></div>
        <div className="gradient-01 absolute w-[30%] inset-0 z-[-10]" />
      </div>
    </motion.div>
  );
}
