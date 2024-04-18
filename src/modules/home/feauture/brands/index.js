import React from 'react'
import BrandSlider from './brandslider';

export default function Brands() {
  return (
    <div className='max-w-[1440px] mx-auto'>
      <div className='text-white flex flex-col justify-center items-center'>
        <h1 className='font-clash font-bold text-[60px]'>3,000+</h1>
        <h4 className='font-circular text-2xl'>Creators, startups and agencies use Webstudio every month.</h4>
      </div>
      <BrandSlider/>
    </div>
  );
}
