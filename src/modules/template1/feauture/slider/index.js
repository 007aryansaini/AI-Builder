import React from "react";
import Marquee from "react-fast-marquee";


import img2 from "../../assest/PhantaBears-NFT-1.png";

export default function Slider() {
  return (
    <div>
      <Marquee direction="right" speed={50}>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="mx-3">
          <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
        </div>
      </Marquee>
      <div className="mt-[2%]">
        <Marquee direction="left" speed={50}>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="mx-3">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
