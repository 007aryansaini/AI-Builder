/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import hero from '../assets/hero-image.png';

const Hero = () => {
  return (
    <section className='bg-[#110321] pt-[2.4rem] pb-[4.75rem] border-t-[rgba(128,128,128,0.20)] border-t border-solid'>
      <div className='max-w-[80vw] mx-auto flex items-center justify-end relative'>
        <div className='absolute left-0 w-[30rem] z-10'>
          <h5 className='text-[#D7EF41]  not-italic font-semibold leading-[1.875rem]'>
            BUILT ON ETH. POWERED BY YOU.
          </h5>
          <h1 className='text-neutral-50 text-[3.5rem] not-italic font-medium leading-[4rem]'>
            The Future of Cryptocurrency is Here
          </h1>
          <p className='text-white not-italic font-normal leading-[normal] opacity-80'>
            Lorem ipsum dolor sit amet consectetur. Sit ac vestibulum feugiat
            nulla placerat risus. Porta quam ridiculs duis ultrices ultrices
            velit{' '}
          </p>
          <div className='flex items-center gap-8 mt-20'>
            <button className='bg-[#D7EF41] rounded-md text-[#222] not-italic font-normal leading-[1.875rem] px-6 py-3.5 '>
              Connect Wallet
            </button>
            <button className='border border-neutral-50 text-neutral-50 not-italic font-normal leading-[1.875rem] px-6 py-3.5 rounded-md border-solid'>
              Watch Demo
            </button>
          </div>
        </div>
        <img
          src={hero}
          alt='hero-image'
          className='translate-x-9 opacity-80 '
        />
      </div>
    </section>
  );
};

export default Hero;
