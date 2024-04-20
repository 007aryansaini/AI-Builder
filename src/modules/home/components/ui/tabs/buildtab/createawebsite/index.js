import React from "react";
import img1 from "../../../../../assets/bg.jpg"
export default function Createawebsite() {
  return (
    <div>
      <div className="grid sm:grid-cols-12 w-full items-center">
        <div className="col-span-6 w-full">
          <h4 className="text-3xl font-semibold">
            Start creating your website with AI
          </h4>
          <p className="sm:w-[500px] w-full text-white/30 py-6">
            Create and customize your unique website within minutes.Create and
            customize your unique website within minutes.Create and customize
            your unique website within minutes.Create and customize your unique
            website within minutes.
          </p>
          <button className="px-8 py-2 bg-white text-black rounded-[50px] sm:text-base">
            Unlock this feauture
          </button>
        </div>
        <div className="col-span-6 w-full">
          <img src={img1} className="rounded-[32px]" alt="img" />
        </div>
      </div>
    </div>
  );
}
