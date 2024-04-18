import React from 'react'
import BuildTabs from '../../components/ui/tabs/buildtab/BuildTab';

export default function Build() {
  return (
    <div className="text-white flex flex-col  h-screen justify-center px-[5%]">
      <div className="flex w-full justify-between ">
        <h2 className="text-[30px]  font-clash">
          Build professional webiste <br /> 10x faster with the help of AI
        </h2>
        <p className="w-[500px] font-circular">
          Now everyone can be a web3 builder! With Webstudio's intuitive tools,
          you can quickly build the interface of a new website powered by smart
          contracts. It&apos;s like a game: simple, fun, and easy.
        </p>
      </div>
      <div className="mt-[2%]">
        
        <BuildTabs />
      </div>
    </div>
  );
}
