import React from "react";
import { Button } from "../../ui/buttons/Button";

export default function SolanaTools() {
  return (
    <div className="bg-[#1C1C33] p-[2%] rounded-lg font-poppins flex flex-col space-y-6">
      <div className="bg-[#22223E] p-[2%] rounded-lg flex justify-between items-center w-full font-poppins">
        <div>
          <h5 className="font-semibold  text-xl">Token Manager</h5>
          <h6 className="text-[#9CA3AF] text-base">
            Distribute tokens to multiple wallets at once
          </h6>
        </div>
      </div>
      <div className="bg-[#22223E] p-[2%] rounded-lg flex justify-center items-center w-full font-poppins">
        <div className="w-full px-[20%]">
          <div>
            <label className="text-sm  text-[#DFE7E0]">1. Select Token</label>
            <div className="h-[35px]  mt-2 rounded-lg bg-[#17172A]">
              <input
                className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                type="text"
                placeholder="Entertoken symbol"
              />
            </div>
          </div>
          <div className="mt-14">
            <label className="text-sm text-[#DFE7E0]">
              2. Input Distribution Address
            </label>
            <div className="h-[55px]  mx-[28%] flex justify-center items-center mt-10 rounded-[50px] border border-white ">
              <input
                className=" bg-transparent rounded-lg px-3 outline-none"
                type="file"
              />
            </div>
          </div>

          <div className="px-[20%] text-center mt-5">
            <p className="">
              Separate the address and the amount with a comma (,).
              "address,amount" If there is a duplicate, the transaction may
              fail. Only available up to 10 wallets at once.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[35px] w-[80%]  rounded-lg bg-[#17172A] mt-12 mb-14">
              <input
                className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                type="text"
                placeholder="Wallet address"
              />
            </div>
            <div className="h-[35px] w-[20%]  rounded-lg bg-[#17172A] mt-12 mb-14">
              <input
                className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                type="text"
                placeholder="Amount"
              />
            </div>
          </div>
          <div className="w-full">
            <Button paddingLess="true" className="w-full py-3">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
