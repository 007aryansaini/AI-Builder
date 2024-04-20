import React from 'react'
import BuildTabs from '../../components/ui/tabs/buildtab/BuildTab';

export default function Build() {
  return (
    <div className="text-white flex flex-col  h-screen justify-center px-[4%] sm:px-[5%]">
      <div className="flex w-full sm:flex-row flex-col justify-between ">
        <h2 className="sm:text-[30px] text-[22px]  font-clash">
          Build professional webiste <br className='sm:flex hidden' /> 10x faster with the help of AI
        </h2>
        <p className="sm:w-[500px] w-full font-circular sm:text-base text-sm sm:py-0 py-5 ">
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
