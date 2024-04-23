import React from "react";
import { IconContext } from "react-icons";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
export default function ConnectModal({ visible, onClose }) {
  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="container"
      className="fixed z-20 inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-start  pt-[7%] justify-center"
      onClick={handleClose}
    >
      <div className="bg-[#1F1E2B] px-[2%] pt-[2%] pb-[2%] w-[600px] rounded-xl">
        <div className="flex gap-3 items-center justify-between py-3 border-b-[1px] border-gray-600">
          <h4>Select Wallet</h4>
          <IconContext.Provider value={{ size: "30px" }}>
            <IoCloseCircleOutline />
          </IconContext.Provider>
        </div>
        <div className="flex items-center gap-3 p-3 border-b-[1px] border-gray-600">
          <div className="w-[40px] h-[40px] bg-black "></div>
          <h5>Ledger</h5>
        </div>
        <div className="flex items-center gap-3 p-3 border-b-[1px] border-gray-600">
          <div className="w-[40px] h-[40px] bg-black "></div>
          <h5>Solflar</h5>
        </div>
        <div className="flex items-center gap-3 p-3 border-b-[1px] border-gray-600">
          <div className="w-[40px] h-[40px] bg-black "></div>
          <h5>Sollet for Omegalab(Deprecated)</h5>
        </div>
        <div className="flex items-center gap-3 p-3 border-b-[1px] border-gray-600">
          <div className="w-[40px] h-[40px] bg-black "></div>
          <h5>Phantom</h5>
        </div>
        <div className="flex items-center gap-3 p-3 border-b-[1px] border-gray-600">
          <div className="w-[40px] h-[40px] bg-black "></div>
          <h5>Coin98</h5>
        </div>
        <div className="flex items-center gap-3 p-3">
          <div className="w-[40px] h-[40px] bg-black "></div>
          <h5>MathWallet</h5>
        </div>
      </div>
    </div>
  );
}
