import React from 'react'
import refresh from "../../assets/refresh.png"
export default function Source() {
  return (
    <div className="w-full bg-[#131C20] py-[4%]">
      <div className="mx-w-[1440px] mx-auto">
        <div className="px-[5%]">
          <div className="flex items-start gap-4">
            <img src={refresh} className='w-[40px] mt-[2%]' alt="refresh" />
            <h3 className='text-[40px] text-white font-bold w-[348px] uppercase'>The only Information Source you'll ever need.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
