import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
export default function Navbar({ promptData, parts }) {
  const navs = parts?.navLinks;
  const logoo = promptData?.title
  return (
    <div>
      <div className="  w-full h-[12vh] bg-[#131C20]  flex items-center">
        <div className=" max-w-[1440px] mx-auto w-full">
          <div className="w-full flex justify-between items-center sm:px-[5%] px-[4%]">
            <Link to="/">
              <div className="flex items-center gap-2 ">
                <img src={logo} alt="logo" />
                <h4 className="font-bold text-white uppercase text-[20px]">
                  {logoo}
                </h4>
              </div>
            </Link>
            <nav className="  flex gap-12 text-[20px] items-center font-bold text-white uppercase list-none">
              {navs &&
                navs.map((nav, index) => (
                  <div key={index}>
                    <li>{nav.title}</li>
                  </div>
                ))}
            </nav>
            <button className="px-8 py-2 bg-white rounded text-[24px]">
              Launch App
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
