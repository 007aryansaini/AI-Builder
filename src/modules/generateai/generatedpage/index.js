import React, { useState, useEffect } from "react";
import { useForm } from "../../../context/store";
import bg from "../../home/assets/quickswap.png";
import temp1 from "../../home/assets/temp1.png";
import temp3 from "../../home/assets/lostworld.png";
import temp5 from "../../home/assets/temp5.png";
import NavFootLayout from "../../home/layouts/NavFootLayout";
import { Link } from "react-router-dom";
import { useTemplate } from "../../../context/AiContext";

export default function GeneratedPage() {
  const { responseState } = useTemplate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);


  return (
    <NavFootLayout>
      <div>
        <div className="text-white max-w-[1440px] mx-auto">
          <div className="grid sm:grid-cols-4 gap-6 mt-[3%] px-[5%] pt-[12vh]">
            <Link to="/generated-template-4">
              <div className="h-[450px] cursor-pointer">
                <div className="w-full h-[350px] ">
                  <img
                    className="w-full h-full object-cover hover:blur-[2px]"
                    src={temp3}
                  />
                  <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                    <h6 className="font-clash font-semibold text-lg"></h6>
                    <h5 className="font-clash text-sm "></h5>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/generated-template-1">
              <div className="h-[450px] cursor-pointer">
                <div className="w-full h-[350px] ">
                  <img
                    className="w-full h-full object-cover hover:blur-[2px]"
                    src={bg}
                  />
                  <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                    <h6 className="font-clash font-semibold text-lg"></h6>
                    <h5 className="font-clash text-sm "></h5>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/generated-template-3">
              <div className="h-[450px] cursor-pointer">
                <div className="w-full h-[350px] ">
                  <img
                    className="w-full h-full object-cover hover:blur-[2px]"
                    src={temp1}
                  />
                  <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                    <h6 className="font-clash font-semibold text-lg"></h6>
                    <h5 className="font-clash text-sm "></h5>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/generated-template-5">
              <div className="h-[450px] cursor-pointer">
                <div className="w-full h-[350px] ">
                  <img
                    className="w-full h-full object-cover hover:blur-[2px]"
                    src={temp5}
                  />
                  <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                    <h6 className="font-clash font-semibold text-lg"></h6>
                    <h5 className="font-clash text-sm "></h5>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </NavFootLayout>
  );
}
