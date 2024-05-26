import React from "react";
import refresh from "../../assets/refresh.png";
export default function Token() {
  return (
    <div className="bg-[#131C20]">
     
      <div className="flex justify-center items-center gap-4 pt-[5%]">
        <h3 className="text-[40px] text-white font-bold  uppercase">
          Robust Takenomic
        </h3>
        <img src={refresh} className="" alt="refresh" />
      </div>
    </div>
  );
}
