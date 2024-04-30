import React from "react";
import { IconContext } from "react-icons";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { SiWeb3Dotjs } from "react-icons/si";
export default function Navbar() {
  return (
    <div className="bg-[#000000] w-full font-poppins flex justify-center pt-[1%] font-clash">
      <div className="fixed  ">
        <div className="max-w-[1440px] mx-auto">
          <IconContext.Provider value={{ color: "white", size: "18px" }}>
            <div className="flex gap-3 items-center">
              <div className="bg-[#181718] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                <SiWeb3Dotjs />
              </div>
              <div className="bg-[#181718] w-[50vw] h-[40px] px-[3%] flex  items-center text-gray-400 rounded-[50px]">
                <nav className="w-full">
                  <ul className="flex  justify-between items-center text-xs font-medium w-full">
                    <li>Token</li>
                    <li>Solana</li>
                    <li>NFT</li>
                    <li>Token</li>
                    <li>Collections</li>
                    <li>Wallet</li>
                    <li>About</li>
                    <li>FAQ's</li>
                    <li>Support</li>
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
