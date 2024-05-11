import React from "react";
import Marquee from "react-fast-marquee";
import img from "../../assest/nft.png";

import img2 from "../../assest/PhantaBears-NFT-1.png";
import img3 from "../../assest/nft3.png";
import img4 from "../../assest/nft3.png";
import img5 from "../../assest/nft5.png";
import img6 from "../../assest/nft6.png";
export default function Slider() {
  return (
    <div>
      <Marquee direction="right" speed={50}>
        <div className="px-2">
          <img src={img} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="px-2">
          <img src={img5} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="px-2">
          <img src={img3} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="px-2">
          <img src={img4} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div>
          <img src={img5} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="px-2">
          <img src={img} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="px-2">
          <img src={img6} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="px-2">
          <img src={img3} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="px-2">
          <img src={img} className="w-[180px] rounded-[16px]" alt="" />
        </div>
        <div className="px-2">
          <img src={img4} className="w-[180px] rounded-[16px]" alt="" />
        </div>
      </Marquee>
      <div className="mt-[2%]">
        <Marquee direction="left" speed={50}>
          <div className="px-2">
            <img src={img} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="px-2">
            <img src={img5} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="px-2">
            <img src={img3} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="px-2">
            <img src={img4} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div>
            <img src={img5} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="px-2">
            <img src={img2} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="px-2">
            <img src={img6} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="px-2">
            <img src={img3} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="px-2">
            <img src={img} className="w-[180px] rounded-[16px]" alt="" />
          </div>
          <div className="px-2">
            <img src={img4} className="w-[180px] rounded-[16px]" alt="" />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
