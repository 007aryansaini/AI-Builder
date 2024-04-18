import React from "react";
import img1 from "../../../../../assets/bgg.jpg";
export default function Editwebiste() {
  return (
    <div>
      <div className="grid grid-cols-12 w-full items-center">
        <div className="col-span-6 w-full">
          <h4 className="text-3xl font-semibold">
            Start Editing your website with AI
          </h4>
          <p className="w-[500px] text-white/30 py-6">
            Create and customize your unique website within minutes.Create and
            customize your unique website within minutes.Create and customize
            your unique website within minutes.Create and customize your unique
            website within minutes.
          </p>
          <button className="px-8 py-2 bg-white text-black rounded-[50px]">
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
