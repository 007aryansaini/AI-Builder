import React from "react";
import logo from "../../assets/lost world.png";
export default function Navbar() {
  return (
    <div className="max-w-[1440px] mx-auto px-[5%] pt-[0.5%]">
      <div className="w-full  flex items-center ">
        <div className="flex items-center gap-6">
          <img src={logo} className="mix-blend-luminosity" alt="logo" />
        </div>
      </div>
    </div>
  );
}
