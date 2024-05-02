import React from 'react'
import hero from "../../assets/hero1.png"
import logo from "../../assets/logo.svg";
import heroo from "../../assets/Hataro.svg"
export default function Hero() {
  return (
    <div className="w-full h-screen px-[7%]">
      <div className="h-full  grid grid-cols-12  w-full ">
        <div className="col-span-6 w-full h-full">
          <div className="w-full py-[2%] flex items-center ">
            <div className="flex items-center gap-6">
              <img src={logo} alt="logo" />
            </div>
          </div>
          <div className="mt-[15%] relative">
            <h4 className="font-sansita text-[84px] text-white absolute -top-[15%]">
              Token
            </h4>
            <img src={heroo} alt="hero" />
            <h5 className="ttt">
              HATARO'S BIZARRE ADVENTURE: ANIME SEASON! EXPERIENCE HOW HATARO
              KICKS OFF 2023'S ANIME SEASON.
            </h5>
          </div>
        </div>
        <div className="col-span-6   w-full  relative">
          <div className="flex items-end justify-end w-full h-full ">
            <img
              src={hero}
              className="w-full h-full object-contain  "
              alt="hero"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
