import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <div className="  w-full h-[12vh] bg-[#131C20]  flex items-center">
        <div className=" max-w-[1440px] mx-auto w-full">
          <div className="w-full flex justify-between items-center sm:px-[5%] px-[4%]">
            <Link to="/">
              <div className="flex items-center gap-2 ">
                <img src={logo} alt="logo" />
                <h4 className="font-bold text-white uppercase text-[20px]">
                  MEMeSCANNER
                </h4>
              </div>
            </Link>
            <nav className="  flex gap-12 text-[20px] items-center font-bold text-white uppercase">
              <h5>About</h5>
              <h5>Utilty</h5>
              <h5>Token</h5>
              <h5>FAQS</h5>
            </nav>
            <button className="px-7 py-2 bg-white rounded">Launch App</button>
          </div>
        </div>
      </div>
    </div>
  );
}
