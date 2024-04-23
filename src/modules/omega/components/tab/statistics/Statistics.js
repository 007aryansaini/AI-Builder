import React from "react";
import Token from "./tokens/Token";

export default function Statistics() {
  return (
    <div className="font-poppins">
      <div className="grid grid-cols-4 gap-6 items-center w-full mt-[3%]">
        <div className="w-full bg-[#17172A] h-[120px] flex justify-end items-center p-[5%] rounded-xl  relative ">
          <div className="flex flex-col text-right">
            <h5 className="text-sm">Top Token Volume</h5>
            <p className="text-2xl font-semibold">$84,929,689</p>
          </div>
          <div className="absolute -top-5 left-[5%] bg-[#4E90F5] w-[70px] h-[70px] rounded-xl"></div>
        </div>
        <div className="w-full bg-[#17172A] h-[120px] flex justify-end items-center p-[5%] rounded-xl  relative ">
          <div className="flex flex-col text-right">
            <h5 className="text-sm">Top Token Volume</h5>
            <p className="text-2xl font-semibold">$84,929,689</p>
          </div>
          <div className="absolute -top-5 left-[5%] bg-[#EA559E] w-[70px] h-[70px] rounded-xl"></div>
        </div>
        <div className="w-full bg-[#17172A] h-[120px] flex justify-end items-center p-[5%] rounded-xl  relative ">
          <div className="flex flex-col text-right">
            <h5 className="text-sm">Top Token Volume</h5>
            <p className="text-2xl font-semibold">$84,929,689</p>
          </div>
          <div className="absolute -top-5 left-[5%] bg-[#31C166] w-[70px] h-[70px] rounded-xl"></div>
        </div>
        <div className="w-full bg-[#17172A] h-[120px] flex justify-end items-center p-[5%] rounded-xl  relative ">
          <div className="flex flex-col text-right">
            <h5 className="text-sm">Top Token Volume</h5>
            <p className="text-2xl font-semibold">$84,929,689</p>
          </div>
          <div className="absolute -top-5 left-[5%] bg-[#F47B29] w-[70px] h-[70px] rounded-xl"></div>
        </div>
      </div>
      <div className="bg-[#16162A] w-full h-[300px] mt-14 rounded-xl flex justify-center items-center space-y-6 flex-col">
        <h4 className="text-xl">Omega for Mintinglab Tokens</h4>
        <div className="w-[400px] h-[40px] bg-black rounded-xl">
          <input type="text" className="w-full h-full rounded-xl bg-transparent px-3 outline-none" placeholder="Search coin"/>
        </div>
        <p className="text-sm">
          <span className="text-[8px] text-gray-600">(Ads)</span> Receive{" "}
          <span className="text-[#9747FF] font-medium">BTC/ETH/SOL</span> airdrop
          for free
        </p>
      </div>
      <div className="flex flex-col justify-center items-center my-8">
        <p>You can create your own token in just 1 minute!</p>

      </div>
      <Token/>
    </div>
  );
}
