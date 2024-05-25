import React from 'react'
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import refresh from "../../assets/refresh.png";
export default function Footer() {
  return (
    <div>
      <div className="bg-[#131C20] pt-[3%]">
        <div className="max-w-[1440px] mx-auto">
          <div className="px-[2%] ">
            {/* <div className="bg-[#010100] py-[10%] rounded-tl-[100px] rounded-br-[100px] px-[3%]">
              <div className="grid grid-cols-2 ">
                <div className="cols-span-1 w-full">
                  <Link to="/">
                    <div className="flex items-center gap-2 ">
                      <img src={logo} alt="logo" />
                      <h4 className="font-bold text-white uppercase text-[42px]">
                        MEMeSCANNER
                      </h4>
                    </div>
                  </Link>
                  <div className="flex items-start gap-4">
                    <h3 className="text-[40px] text-white font-bold uppercase">
                      Ready to get started?
                    </h3>
                    <img
                      src={refresh}
                      className="w-[40px] mt-[2%]"
                      alt="refresh"
                    />
                  </div>
                  <button className="px-[150px] py-2 bg-white rounded text-[24px] mt-14">
                    Launch App
                  </button>
                </div>
                <div className="col-span-1 w-full">
                  <div className="grid grid-cols-2">
                    <div className="col-span-1">
                      <div className="flex items-start gap-4">
                        <h3 className="text-[40px] text-white font-bold uppercase">
                          Resources
                        </h3>
                        <img
                          src={refresh}
                          className="w-[40px] mt-[2%]"
                          alt="refresh"
                        />
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex items-start gap-4">
                        <h3 className="text-[40px] text-white font-bold uppercase">
                          Links
                        </h3>
                        <img
                          src={refresh}
                          className="w-[40px] mt-[2%]"
                          alt="refresh"
                        />
                      </div>
                      <div className="flex flex-col">
                        <h4>Doc</h4>

                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="flex items-start gap-4">
                        <h3 className="text-[40px] text-white font-bold uppercase">
                          Company
                        </h3>
                        <img
                          src={refresh}
                          className="w-[40px] mt-[2%]"
                          alt="refresh"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
