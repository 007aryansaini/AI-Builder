import React, { useState } from "react";
import { Button } from "../../ui/buttons/Button";
import TokenSlider from "../../ui/token-slider/TokenSlider";
import { RiH4 } from "react-icons/ri";
import ConnectModal from "../../modals/ConnectModal";

export default function MyTokens() {
  const [showModal, setShowModal] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <div className="bg-[#1C1C33] sm:p-[2%] p-[4%] rounded-lg font-poppins flex flex-col space-y-6">
        <div className="bg-[#22223E] sm:p-[2%] p-[4%] rounded-lg flex sm:flex-row flex-col justify-between sm:items-center w-full">
          <div>
            <h5 className="font-semibold  text-xl">Token Manager</h5>
            <h6 className="text-[#9CA3AF] text-base">
              Create and manage your tokens.
            </h6>
            <h6 className="text-sm sm:my-0 my-[1%]">
              <a>Start Tutorial</a>
            </h6>
          </div>
          <div className="flex gap-3 sm:mt-0 mt-[3%]">
            <Button>Create Token</Button>
            <Button>OpenBook Manager</Button>
          </div>
        </div>

        <div className="bg-[#22223E]  sm:py-[3%] py-[4%] px-[7%] rounded-lg flex sm:flex-row flex-col justify-between items-center w-full">
          <div className="flex flex-col space-y-2 items-center">
            <h4 className=" text-4xl">110,171</h4>
            <h5 className=" leading-6 text-gray-500 text-lg">
              Mintinglab Minted Token
            </h5>
          </div>
          <div className="flex flex-col space-y-2 items-center">
            <h4 className=" text-4xl">110,171</h4>
            <h5 className=" leading-6 text-gray-500 text-lg">
              Mintinglab Minted Token
            </h5>
          </div>
          <div className="flex flex-col space-y-2 items-center">
            <h4 className=" text-4xl">110,171</h4>
            <h5 className=" leading-6 text-gray-500 text-lg">
              Mintinglab Minted Token
            </h5>
          </div>
        </div>
        <div className="bg-[#22223E] px-[2%] py-[4%] rounded-lg flex justify-between items-center w-full">
          <TokenSlider />
        </div>
        <div className="bg-[#22223E] p-[2%] rounded-lg  w-full">
          {connectWallet ? (
            <div>
              <h5 className="font-semibold  text-lg text-center mb-2">
                Token Manager
              </h5>
              <div className="flex justify-between items-center">
                <h5 className="font-semibold  text-base text-center">
                  Token Name
                </h5>
                <h5 className="font-semibold  text-base text-center">Mint</h5>
                <h5 className="font-semibold  text-base text-center">
                  Balance
                </h5>
                <h5 className="font-semibold  text-base text-center">
                  Owner(UA)
                </h5>
              </div>
              <div className="flex flex-col items-center mt-3">
                <h6 className="mb-4">No my tokens</h6>
                <Button >Create New Token </Button>
              </div>
              <div className="flex justify-end w-full mt-2">
                <Button>Reload</Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center space-y-5 sm:p-0 p-[4%] ">
              <div className=" ">
                <h5 className="font-semibold  text-lg text-center">
                  Token Manager
                </h5>
              </div>
              <Button
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Connect Wallet
              </Button>
              <ConnectModal onClose={handleClose} visible={showModal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
