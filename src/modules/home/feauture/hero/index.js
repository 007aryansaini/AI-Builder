import React,{useState} from "react";
import { motion } from "framer-motion";
import { staggerContainer, slideIn, fadeIn } from "../../utils/motion";
import web3 from "../../assets/web3.png"
import GenerateAIModal from "../../components/ui/modals/generatemodal/GenerateAI";
export default function Hero() {
    const [showModal, setShowModal] = useState(false);
    const handleClose = () => setShowModal(false);
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
            className=" topp w-[100%] sm:h-[200px] h-[110px] "
          ></motion.div>
        </motion.div>
      </div>
      <div className="relative"></div>
      <div className="gradient-01 absolute w-[30%] inset-0 z-[-10]" />

      <div className="sm:px-0 px-[4%] mt-[6%] flex flex-col justify-center items-center w-full ">
        <h5 className="text-white btn px-5 py-2 rounded-[50px] font-clash sm:mb-[2%] mb-[4%]">
          Updated: AI Integrated
        </h5>
        <h1 className="text-white font-clash sm:text-[50px] text-[32px] text-center font-bold sm:leading-[50px] leading-[36px]">
          Automate Development <br className="sm:flex hidden" /> AI for
          Development
        </h1>
        <p className="text-white text-center font-circular sm:text-lg py-4 sm:py-[1.5%]">
          Create unique brand identity,generate and pushlish{" "}
          <br className="sm:flex hidden" /> consistence while we make devlopment
          easy as it always <br className="sm:flex hidden" />
          feels good to to things perfectedly
        </p>
        <button
          onClick={() => {
            setShowModal(true);
          }}
          className=" bg-[#8d00ce] px-8 rounded-[50px] mt-4 sm:mt-2 font-clash text-white font-semibold py-2"
        >
          Generate your website
        </button>
        <GenerateAIModal onClose={handleClose} visible={showModal} />
        <div className="sm:mt-[5%] mt-[10%]">
          <img className="" src={web3} alt="web3" />
        </div>
      </div>
    </motion.div>
  );
}
