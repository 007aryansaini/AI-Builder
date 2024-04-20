import React from "react";
import bg from "../../assets/bg.jpg";
export default function Products() {
  return (
    <div>
      <div className="w-full  flex flex-col items-center text-white sm:px-[5%] sm:pt-0 pt-[10%] px-[4%]">
        <h4 className="sm:text-[40px] text-[30px] px-[30px] font-clash font-semibold text-center leading-[30px] sm:leading-[45px]">
          Discover inspiring sites built by <br /> the Webstudio community
        </h4>
        <p className="font-circular sm:text-[20px] text-base text-center sm:w-[500px] my-5">
          For landing pages, portfolios, link in bio, NFT minting portals and
          any user-facing experience powered by smart contracts.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-[3%]">
          <div className="h-[450px] cursor-pointer">
            <div className="w-full h-[350px] ">
              <img
                className="w-full h-full object-cover hover:blur-[2px]"
                src={bg}
              />
              <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                <h6 className="font-clash font-semibold text-lg">Buildorz</h6>
                <h5 className="font-clash text-sm ">Web3 Markeing Agency</h5>
              </div>
            </div>
          </div>
          <div className="h-[450px] cursor-pointer">
            <div className="w-full h-[350px] bg-transparent">
              <img
                className="w-full h-full object-cover hover:blur-[2px]"
                src={bg}
              />
              <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                <h6 className="font-clash font-semibold text-lg">Buildorz</h6>
                <h5 className="font-clash text-sm ">Web3 Markeing Agency</h5>
              </div>
            </div>
          </div>

          <div className="h-[450px] cursor-pointer">
            <div className="w-full h-[350px] bg-transparent">
              <img
                className="w-full h-full object-cover hover:blur-[2px]"
                src={bg}
              />
              <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                <h6 className="font-clash font-semibold text-lg">Buildorz</h6>
                <h5 className="font-clash text-sm ">Web3 Markeing Agency</h5>
              </div>
            </div>
          </div>
          <div className="h-[450px] cursor-pointer">
            <div className="w-full h-[350px] bg-transparent">
              <img
                className="w-full h-full object-cover hover:blur-[2px]"
                src={bg}
              />
              <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                <h6 className="font-clash font-semibold text-lg">Buildorz</h6>
                <h5 className="font-clash text-sm ">Web3 Markeing Agency</h5>
              </div>
            </div>
          </div>

          <div className="h-[450px] cursor-pointer">
            <div className="w-full h-[350px] bg-transparent">
              <img
                className="w-full h-full object-cover hover:blur-[2px]"
                src={bg}
              />
              <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                <h6 className="font-clash font-semibold text-lg">Buildorz</h6>
                <h5 className="font-clash text-sm ">Web3 Markeing Agency</h5>
              </div>
            </div>
          </div>

          <div className="h-[450px] cursor-pointer">
            <div className="w-full h-[350px] bg-transparent">
              <img
                className="w-full h-full object-cover hover:blur-[2px]"
                src={bg}
              />
              <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                <h6 className="font-clash font-semibold text-lg">Buildorz</h6>
                <h5 className="font-clash text-sm ">Web3 Markeing Agency</h5>
              </div>
            </div>
          </div>
          <div className="h-[450px] cursor-pointer">
            <div className="w-full h-[350px] bg-transparent">
              <img
                className="w-full h-full object-cover hover:blur-[2px]"
                src={bg}
              />
              <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                <h6 className="font-clash font-semibold text-lg">Buildorz</h6>
                <h5 className="font-clash text-sm ">Web3 Markeing Agency</h5>
              </div>
            </div>
          </div>
          <div className="h-[450px] cursor-pointer">
            <div className="w-full h-[350px] bg-transparent">
              <img
                className="w-full h-full object-cover hover:blur-[2px]"
                src={bg}
              />
              <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                <h6 className="font-clash font-semibold text-lg">Buildorz</h6>
                <h5 className="font-clash text-sm ">Web3 Markeing Agency</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
