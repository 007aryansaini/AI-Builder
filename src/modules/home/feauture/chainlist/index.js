import React from 'react'

export default function Chainlist() {
  return (
    <div>
      <div className="w-full h-[50vh] text-white flex flex-col justify-center items-center ">
        <h2 className="text-[60px] font-clash font-bold">
          Build on 1,000+ EVM chains
        </h2>
        <p className="text-xl font-circular w-[600px]">
          Webstudio can be integrated with any contract deployed on any
          EVM-compatible chain on both mainnets and testnets alike.
        </p>
        <button className="px-10 py-3 bg-white text-black mt-[3%] rounded-[50px] font-clash font-semibold capitalize">see the Chainlist</button>
      </div>
    </div>
  );
}
