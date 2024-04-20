import React from "react";

export default function Chainlist() {
  return (
    <div>
      <div className="w-full sm:h-[70vh] h-[50vh] text-white flex flex-col justify-center items-center sm:px-0 px-[4%]">
        <h2 className="sm:text-[40px] text-[30px] text-center leading-[50px] mb-3 font-clash font-bold">
          Build on 1,000+ EVM chains
        </h2>
        <p className="sm:text-xl text-base text-center font-circular sm:w-[600px] w-full">
          Webstudio can be integrated with any contract deployed on any
          EVM-compatible chain on both mainnets and testnets alike.
        </p>
        <button className="px-10 py-3 bg-white text-black mt-[3%] rounded-[50px] font-clash font-semibold capitalize">
          see the Chainlist
        </button>
      </div>
    </div>
  );
}
