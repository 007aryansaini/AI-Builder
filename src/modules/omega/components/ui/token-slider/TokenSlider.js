import React from "react";
import Marquee from "react-fast-marquee";

function TokenSlider() {
  return (
    <div className="w-full overflow-x-hidden">
      <div>
        <Marquee className="w-full  " autoFill pauseOnClick>
          <div className=" mx-12 rounded-xl flex   cursor-pointer ">
        
              <div className="flex flex-col  items-center">
                <h5 className="bg-green-300 px-2 py-[3px] text-xs rounded-lg text-gray-600 ">
                  Newtoken
                </h5>
                <div className="w-[35px] h-[35px] bg-black rounded-full mt-2"></div>
                <h5 className="text-base">Solnite Coin</h5>
                <h5 className="font-medium text-xs  ">2hrs ago</h5>
              </div>
         
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default TokenSlider;
