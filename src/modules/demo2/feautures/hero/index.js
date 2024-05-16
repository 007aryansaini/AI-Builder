import React from "react";
import bgg from "../../assets/hero.png";
import robot from "../../assets/robot.png";
import laptop from "../../assets/laptop.png"
export default function Hero() {
  return (
    <div className="" style={style.bg}>
      <div className="max-w-[1440px] mx-auto ">
        <div className=" relative px-[5%] ">
          <img src={robot} className="w-[1000px] h-[872px]" alt="robot" />
          <div className="absolute right-0 top-[20%] ">
            <div className="w-[468px]">
              <h2 className="text-[48px] int font-bold">
                Introducing the Next-Generation Memecoin Analysis Bot
              </h2>
              <hr className="w-full h-[10px] bg-white" />
              <p className="text-lg font-bold text-white mt-[2%]">
                Combustion is a revolutionary tool that allows you to analyze
                trending tokens and make informed decisions.
              </p>
            </div>
          </div>
          <div className="absolute left-0 top-[30%] ">
            <div className="w-[468px]">
              <img src={laptop}  alt="laptop" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const style = {
  bg: {
    backgroundImage: `linear-gradient(rgba(42, 62, 17, 0.19), rgba(42, 62, 17, 0.19)), url(${bgg})`,
    backgroundPosition: "50%",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "872px",
  },
};
