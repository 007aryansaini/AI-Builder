import React, { useEffect, useState } from "react";
import bgg from "../../assest/mask.png";
import Slider from "../slider";
import Navbar from "../../components/navbar";
import { useParams } from "react-router-dom";

export default function Hero({promptData,parts}) {

  return (
    <div className="bg-[#000000] w-full font-poppins  ">
      {promptData && (
        <div className="px-[5%] h-[100vh] w-full bg-black   bg-grid-white/[0.2]  relative ">
          <div className="absolute pointer-events-none inset-0  bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        
          <div className="max-w-[1440px] mx-auto">
            <div>
              <div className=" text-white w-full h-[55vh] flex flex-col gap-3 justify-center items-center">
                <h2 className="text-center font-clash font-bold text-[40px] w-[550px] leading-[45px]">
                  {parts.tagline}
                </h2>
                <p className="font-clash text-center w-[500px]">
                  {parts.descriptions}
                </p>
              </div>
            </div>
            <Slider />
          </div>
        </div>
      )}
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
