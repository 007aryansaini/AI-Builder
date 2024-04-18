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
      <motion.div className=" relative  rotate-180 -top-0">
        <motion.div
          variants={fadeIn("up", "tween", 0.8, 1)}
          className=" why w-[100%] sm:h-[200px] h-[200px] "
        ></motion.div>
      </motion.div>
    </motion.div>
  );
}
