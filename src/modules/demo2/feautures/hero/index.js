import React from 'react'
import bgg from "../../assets/hero.png"
import robot from "../../assets/robot.png"
export default function Hero() {
  return (
    <div className="" style={style.bg}>
      <div className="max-w-[1440px] mx-auto ">
        <div className=" relative px-[5%] ">
          <img src={robot} className="w-[1000px] h-[872px]" alt="robot" />
          <div className="absolute right-0 top-0 ">
            <div className=''>
              <h2 className="text-[48px] text-white font-bold">
                Introducing the Next-Generation Memecoin Analysis Bot
              </h2>
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