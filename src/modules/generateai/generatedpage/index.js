import React, { useState, useEffect } from "react";
import { useForm } from "../../../context/store";
import bg from "../../home/assets/quickswap.png";
import bgg from "../../home/assets/omega.png";
import NavFootLayout from "../../home/layouts/NavFootLayout";
import { Link } from "react-router-dom";
import { useTemplate } from "../../../context/AiContext";

export default function GeneratedPage() {
  const { template } = useForm();
  const { responseState } = useTemplate();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  const parsedContent = JSON.parse(responseState.content);

  const websiteTitle = parsedContent.website_title;
  const description = parsedContent.website_description;
  console.log(websiteTitle);
  return (
    <NavFootLayout>
      {loading ? (
        <div className="h-screen flex justify-center items-center">
          <h4 className="font-clash text-white sm:text-[40px] text-center ">
            Generating Your Site Please Wait.........
          </h4>
        </div>
      ) : (
        <div>
          <div className="text-white max-w-[1440px] mx-auto">
            <div className="grid sm:grid-cols-4 gap-6 mt-[3%] px-[5%] pt-[12vh]">
              <Link to="/generated-template-1">
                <div className="h-[450px] cursor-pointer">
                  <div className="w-full h-[350px] ">
                    <img
                      className="w-full h-full object-cover hover:blur-[2px]"
                      src={bg}
                    />
                    <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                      <h6 className="font-clash font-semibold text-lg">
                        {websiteTitle}
                      </h6>
                      <h5 className="font-clash text-sm ">{description}</h5>
                    </div>
                  </div>
                </div>
              </Link>
              <Link to="/generated-template-2">
                <div className="h-[450px] cursor-pointer">
                  <div className="w-full h-[350px] ">
                    <img
                      className="w-full h-full object-cover hover:blur-[2px]"
                      src={bgg}
                    />
                    <div className="w-full flex flex-col justify-center items-center h-[100px] bg-[#161616]">
                      <h6 className="font-clash font-semibold text-lg">
                        {websiteTitle}
                      </h6>
                      <h5 className="font-clash text-sm ">
                        {description}
                      </h5>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </NavFootLayout>
  );
}
