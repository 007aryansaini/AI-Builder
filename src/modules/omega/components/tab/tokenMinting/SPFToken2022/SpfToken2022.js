import React from 'react'
import { Button } from "../../../ui/buttons/Button";
import { FaTwitter } from "react-icons/fa";
import { IconContext } from "react-icons";
export default function SpfToken2022() {
  return (
    <div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-8">
        <div className="col-span-1 ">
          <h5 className="text-lg">Token information.</h5>
          <h6 className="text-sm mb-2">
            This information is stored on IPFS by + Metaplex Metadata standard.
          </h6>
          <form>
            <div className="flex flex-col space-y-5">
              <div>
                <label className="text-xs text-[#DFE7E0]">
                  Token Name (ex. Dexlab)
                </label>
                <div className="h-[35px] rounded-lg bg-[#17172A]">
                  <input
                    className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                    type="text"
                    placeholder="Enter token name"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#DFE7E0]">
                  Symbol (Max 10, ex. DXL)
                </label>
                <div className="h-[35px] rounded-lg bg-[#17172A]">
                  <input
                    className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                    type="text"
                    placeholder="Enter token symbol"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-[#DFE7E0]">
                  (Optional) Description
                </label>
                <div className="h-[100px] rounded-lg bg-[#17172A]">
                  <textarea
                    className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                    type="text"
                    placeholder="Enter project description"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-2">
                  <label className="text-xs text-[#DFE7E0]">
                    (Optional) Extensions
                  </label>
                  <div className="h-[35px] rounded-lg bg-[#17172A]">
                    <input
                      className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                      type="text"
                      placeholder="Website URL"
                    />
                  </div>
                  <div className="h-[35px] rounded-lg bg-[#17172A]">
                    <input
                      className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                      type="text"
                      placeholder="Twitter URL"
                    />
                  </div>
                  <div className="h-[35px] rounded-lg bg-[#17172A]">
                    <input
                      className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                      type="text"
                      placeholder="Telegram URL"
                    />
                  </div>
                  <div className="h-[35px] rounded-lg bg-[#17172A]">
                    <input
                      className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                      type="text"
                      placeholder="Discord URL"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="text-xs text-[#DFE7E0]">
                  (Optional) Extensions
                </label>
                <div className="h-[35px] rounded-sm border bprder-white">
                  <input
                    className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                    type="text"
                  />
                </div>
                <div className="flex space-x-2 items-center mt-1">
                  <h6 className="text-xs">Suggestion:</h6>
                  <div className="flex space-x-1 items-center">
                    <h6 className="text-[11px] p-1 bg-[#475569] rounded-full">
                      Meme
                    </h6>
                    <h6 className="text-[11px] p-1 bg-[#475569] rounded-full">
                      Airdrop
                    </h6>
                    <h6 className="text-[11px] p-1 bg-[#475569] rounded-full">
                      Fantoken
                    </h6>
                    <h6 className="text-[11px] p-1 bg-[#475569] rounded-full">
                      Tokenization
                    </h6>
                    <h6 className="text-[11px] p-1 bg-[#475569] rounded-full">
                      RWA
                    </h6>
                    <h6 className="text-[11px] p-1 bg-[#475569] rounded-full">
                      NFT
                    </h6>
                  </div>
                </div>
                <div className="py-7"></div>
                <div>
                  <label className="text-xs text-[#DFE7E0]">
                    Symbol Image (ex. Square size 128x128 or larger is
                    recommended.)
                  </label>
                  <div className="h-[35px] rounded-lg bg-[#17172A]">
                    <input
                      className="w-full h-full bg-transparent rounded-lg px-3 outline-none"
                      type="text"
                      placeholder="Enter or Upload symbol icon URL"
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <div className="h-[100px] border border-dashed border-white rounded-lg ">
                    <input
                      className="w-full h-full bg-transparent rounded-lg x-3 outline-none"
                      type="text"
                    />
                  </div>
                </div>
              </div>
              <Button>Connect Wallet</Button>
              <h6 className="text-[#6B7280] text-xs ">
                <span className="uppercase"> CREATE TOKEN</span>
                <br />
                Generate a token. In this process, you can get a token mint
                address.
              </h6>
            </div>
          </form>
        </div>
        <div className="col-span-1 -mt-[20%]">
          <h5 className="text-lg font-semibold my-2">PREVIEW</h5>
          <div className="flex items-center justify-between w-full border-[8px] border-[#17172A] rounded-lg py-[3%] px-[4%]">
            <div className="flex  items-center gap-5">
              <div className="w-[70px] h-[70px] rounded-full bg-[#3A6024] flex justify-center items-center">
                <h6>S</h6>
              </div>
              <div className="flex flex-col ">
                <h6 className="text-sm text-[#52A5FA]  ">Token name</h6>
                <h6 className="text-sm text-gray-300">Symbol</h6>
              </div>
              <h6 className="#FDE047 text-xs bg-yellow-300 px-2 py-[2px] rounded-[5px] text-gray-600">
                Token2022
              </h6>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <div className="w-[20px] h-[20px] bg-gray-300 text-white flex justify-center items-center rounded-full">
                  <IconContext.Provider
                    value={{ color: "black", size: "10px" }}
                  >
                    <FaTwitter />
                  </IconContext.Provider>
                </div>
                <div className="w-[20px] h-[20px] bg-gray-300 text-white flex justify-center items-center rounded-full">
                  <IconContext.Provider
                    value={{ color: "black", size: "10px" }}
                  >
                    <FaTwitter />
                  </IconContext.Provider>
                </div>
                <div className="w-[20px] h-[20px] bg-gray-300 text-white flex justify-center items-center rounded-full">
                  <IconContext.Provider
                    value={{ color: "black", size: "10px" }}
                  >
                    <FaTwitter />
                  </IconContext.Provider>
                </div>
                <div className="w-[20px] h-[20px] bg-gray-300 text-white flex justify-center items-center rounded-full">
                  <IconContext.Provider
                    value={{ color: "black", size: "10px" }}
                  >
                    <FaTwitter />
                  </IconContext.Provider>
                </div>
                <div className="w-[20px] h-[20px] bg-gray-300 text-white flex justify-center items-center rounded-full">
                  <IconContext.Provider
                    value={{ color: "black", size: "10px" }}
                  >
                    <FaTwitter />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#17172A] p-[4%] rounded-lg mt-3">
            <h5 className="mb-8">Token information.</h5>
            <div className="flex flex-col space-y-8 font-light text-gray-300 text-[15px]">
              <h5 className="">Name</h5>
              <h5 className="">Symbol</h5>
              <h5 className="">Program</h5>
              <h5 className="">Mint Authority</h5>
              <h5 className="">Update Authority</h5>
              <h5 className="">Freeze Authority</h5>
            </div>
            <div className="flex justify-between items-center text-[15px] font-light mt-8">
              <h5 className="">
                Recommend <br /> Intergration
              </h5>
              <div className="flex gap-16 p-[2%] rounded-lg border border-[#1C1C33] font-light text-[15px] ">
                <h6>OpenBook Market</h6>
                <h6>Go to Tools</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
