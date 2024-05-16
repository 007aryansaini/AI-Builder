import React from 'react'
import loader from "../../../assets/loader.gif"

export default function Loader() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <img src={loader} alt="loader" />
      <h4 className="font-clash text-white sm:text-[40px] text-center">
        Generating Your Site Please Wait.........
      </h4>
    </div>
  );
}
