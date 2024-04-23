import React from "react";
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { useForm } from "../../../../context/store";
export default function Footer() {
       const { template } = useForm();
  return (

    <div className="text-white flex sm:flex-row flex-col justify-between items-center w-full  my-10 font-poppins">
      <h5>
        © Copyright 2021 - 2024 {template?.websiteTitle}
        <span></span> | All Rights Reserved
      </h5>
      <div className="flex items-center space-x-2">
        <div className="w-[40px] h-[40px] bg-white text-white flex justify-center items-center rounded-full">
          <IconContext.Provider value={{ color: "black", size: "20px" }}>
            <FaTwitter />
          </IconContext.Provider>
        </div>
        <div className="w-[40px] h-[40px] bg-white text-white flex justify-center items-center rounded-full">
          <IconContext.Provider value={{ color: "black", size: "20px" }}>
            <FaTwitter />
          </IconContext.Provider>
        </div>
        <div className="w-[40px] h-[40px] bg-white text-white flex justify-center items-center rounded-full">
          <IconContext.Provider value={{ color: "black", size: "20px" }}>
            <FaTwitter />
          </IconContext.Provider>
        </div>
        <div className="w-[40px] h-[40px] bg-white text-white flex justify-center items-center rounded-full">
          <IconContext.Provider value={{ color: "black", size: "20px" }}>
            <FaTwitter />
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
}
