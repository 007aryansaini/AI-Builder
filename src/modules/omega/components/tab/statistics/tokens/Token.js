import React from "react";
import TopTokens from "./TopTokens";
import HotToken from "./HotToken";
import NewToken from "./NewToken";
import RecentsActions from "./RecentsActions";
import AllToken from "./AllToken";

export default function Token() {
  return (
    <div className="">
      <div className="grid sm:grid-cols-2 gap-5  w-full">
        <div className="col-span-1 w-full bg-[#16162A] p-[2%] rounded-xl">
          <TopTokens />
        </div>
        <div className="col-span-1 bg-[#16162A] p-[2%] rounded-xl">
          <HotToken />
        </div>
        <div className="col-span-1 bg-[#16162A] p-[2%] rounded-xl">
          <NewToken />
        </div>
        <div className="col-span-1 bg-[#16162A] p-[2%] rounded-xl">
          <RecentsActions />
        </div>
      </div>
      <div className="w-full bg-[#16162A] p-[2%] rounded-xl mt-16">
        <AllToken />
      </div>
    </div>
  );
}
