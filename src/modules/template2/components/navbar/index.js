import React from "react";
import logo from "../../assets/logo.svg";
export default function Navbar() {
  return (
    <div className="">
      <div className="w-full py-[1.3%] px-[7%] flex items-center ">
        <div className="flex items-center gap-6">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}
