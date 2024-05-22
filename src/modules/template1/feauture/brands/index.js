import React from "react";
import { useTemplate } from "../../../../context/AiContext";

export default function Brands({ promptData, parts }) {
  const brands = parts?.brands;
  const brand_paragraph = parts?.brand_paragraph;
  return (
    <div>
      <div>
        <div className="flex mt-[5%]  text-white items-center flex-col">
          <h2 className="text-[90px] font-clash font-semibold text-center">
            Brands that trusts us
          </h2>
          <p className="text-center font-clash w-[800px] ">{brand_paragraph}</p>
          <div className="flex gap-5 items-center font-clash font-semibold my-[4%]">
            {brands &&
              brands.map((brand, index) => (
                <div key={index}>
                  <div className="bg-red-500 px-7 py-4 ">
                    <h4>{brand.title}</h4>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
