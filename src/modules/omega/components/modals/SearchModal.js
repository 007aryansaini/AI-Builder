import React from "react";
import { IconContext } from "react-icons";
import { IoCloseCircleOutline } from "react-icons/io5";
import { RiSearch2Line } from "react-icons/ri";
export default function SearchModal({ visible, onClose }) {
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
      <div className="bg-[#1F1E2B] w-[600px] px-[2%] pt-[2%] pb-[7%] rounded-xl">
        <div className="flex gap-3 items-center">
          <div className="flex items-center gap-2 px-3 w-full h-[40px] bg-black rounded-lg">
            <RiSearch2Line className="text-[20px]" />
            <input
              type="text"
              className="w-full h-full px-3 rounded-lg bg-transparent outline-none"
              placeholder="Search coin"
            />
          </div>
          <IconContext.Provider value={{ size: "30px" }}>
            <IoCloseCircleOutline />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
