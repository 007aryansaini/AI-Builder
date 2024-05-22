import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";
export default function Navbar({ promptData, parts }) {
  const navs = parts?.navLinks;

  return (
    <div className="bg-black w-full font-poppins flex justify-center pt-[1%] font-clash">
      <div className="fixed z-[1000000] ">
        <div className="max-w-[1440px] mx-auto">
          <IconContext.Provider value={{ color: "white", size: "18px" }}>
            <div className="flex gap-3 items-center relative z-[10000]">
              <div className="bg-[#181718] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <SiWeb3Dotjs />
              </div>
              <div className="bg-[#181718] w-[50vw] h-[40px] px-[3%] flex  items-center text-gray-400 rounded-[50px]">
                <nav className="w-full">
                  <ul className="flex  justify-between items-center text-xs font-medium w-full">
                    {navs &&
                      navs.map((nav, index) => (
                        <div key={index}>
                          <li>{nav.title}</li>
                        </div>
                      ))}
                  </ul>
                </nav>
              </div>
              <div className="bg-[#181718] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <AiOutlineTwitter />
              </div>
              <div className="bg-[#181718] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <FaDiscord />
              </div>
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
