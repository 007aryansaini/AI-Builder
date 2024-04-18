import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, fadeIn } from "../../utils/motion";
import web3 from "../../assets/web3.png"
export default function Hero() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false }}
      className="w-full  relative"
    >
      <div className="w-full h-full relative -top-[5%]   ">
        <motion.div className=" rotate-180 ">
          <motion.div
            variants={fadeIn("down", "tween", 0.8, 1)}
            className=" topp w-[100%] sm:h-[200px] h-[200px] "
          ></motion.div>
        </motion.div>
      </div>
      <div className="relative"></div>
      <div className="gradient-01 absolute w-[30%] inset-0 z-[-10]" />

      <div className=" mt-[6%] flex flex-col justify-center items-center w-full ">
        <h5 className="text-white btn px-5 py-2 rounded-[50px] font-clash mb-[2%]">
          Updated: AI Integrated
        </h5>
        <h1 className="text-white font-clash text-[50px] text-center font-bold leading-[50px]">
          Automate Development <br /> AI for Development
        </h1>
        <p className="text-white text-center font-circular text-lg py-[1.5%]">
          Create unique brand identity,generate and pushlish <br /> consistence
          while we make devlopment easy as it always <br />
          feels good to to things perfectedly
        </p>
        <button className=" bg-[#8d00ce] px-8 rounded-[50px] mt-2 font-clash text-white font-semibold py-2">
          Generate your website
        </button>
        <div className="mt-[5%]">
          <img className="" src={web3} alt="web3" />
        </div>
      </div>
    </motion.div>
  );
}
