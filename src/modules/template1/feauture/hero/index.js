import React from "react";
import bgg from "../../assest/mask.png"
import Slider from "../slider";
import { useTemplate } from "../../../../context/AiContext";


export default function Hero() {
   const { responseState } = useTemplate();
   const parsedContent = JSON.parse(responseState.content);
   const tagline = parsedContent.data.tagline;
   const description = parsedContent.data.descriptions;
  return (
    <div>
      <div className="bg-[#000000] w-full font-poppins px-[5%] ">
        <div className="max-w-[1440px] mx-auto">
          <div style={style.bg} className="text-white">
            <div className="w-full h-[55vh] flex flex-col gap-3 justify-center items-center">
              <h2 className="text-center font-clash font-bold text-[40px] w-[550px] leading-[45px]">
                {tagline}
              </h2>
              <p className="font-clash text-center w-[500px]">{description}</p>
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </div>
  );
}
const style = {
  bg: {
    backgroundImage: ` url(${bgg})`,

    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "70vh",
    
    padding: "0px 5%",
    position: "relative",
  },
};