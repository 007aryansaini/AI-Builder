import React from 'react';
import mixer from '../assets/mixer.svg';
import mint from '../assets/mint.svg';
import swap from '../assets/swap.svg';
import locker from '../assets/locker.svg';
import arrow from '../assets/arrow.svg';
import pup from '../assets/pup.svg';
import oran from '../assets/oran.svg';

const Featured = () => {
  return (
    <section className='featured'>
      <div className='max-w-[55vw] mx-auto py-[4.5rem]'>
        <h2 className='mb-8 text-neutral-50 text-[2.5rem] text-center not-italic font-medium leading-[4rem]'>
          Our Featured Apps
        </h2>
        <p className='text-white not-italic font-normal text-xl leading-[normal] opacity-80 text-center'>
          Lorem ipsum dolor sit amet consectetur. Sit ac vestibulum feugiat
          nulla placerat risus. Porta quam ridiculus duis ultrices ultrices
          velit in nullam. Eget sed volutpat iaculis aliquet. Dolor non donec
          tortor consequat a vulputate tellus ipsum libero. Ultrices tortor
          nulla ut ut aliquet.
        </p>
        <div className='mt-32'>
          <div className='flex items-center justify-between mb-16'>
            <div className='relative rgba p-5 flex items-center flex-col justify-center  w-[22.5rem] h-80 rounded-xl'>
              <img src={mixer} alt='mixer icon' />
              <img
                src={pup}
                alt='mixer icon'
                className='absolute rounded-xl left-0'
              />
              <h3 className=' text-white text-2xl not-italic mt-3 font-bold leading-[normal]'>
                Mixer
              </h3>
              <p className='text-white not-italic font-normal leading-[normal] w-56 text-center opacity-80 mt-[1.12rem] mb-[2.5rem]'>
                Lorem ipsum dolor sit amet consectetur. Sit ac{' '}
              </p>
              <div className='flex items-center absolute right-4 cursor-pointer opacity-80 bottom-4 gap-1'>
                <small className='text-neutral-50 text-base not-italic font-normal leading-[normal]'>
                  Read more
                </small>
                <img src={arrow} alt='arrow' />
              </div>
            </div>
            <div className='relative rgba p-5 flex items-center flex-col justify-center  w-[22.5rem] h-80 rounded-xl'>
              <img src={mint} alt='mint icon' />
              <img
                src={oran}
                alt='oran icon'
                className='absolute  rounded-xl top-0 left-0'
              />
              <h3 className=' text-white text-2xl not-italic mt-3 font-bold leading-[normal]'>
                NFT Mint
              </h3>
              <p className='text-white not-italic font-normal leading-[normal] w-56 text-center opacity-80 mt-[1.12rem] mb-[2.5rem]'>
                Lorem ipsum dolor sit amet consectetur. Sit ac{' '}
              </p>
              <div className='flex items-center absolute right-4 cursor-pointer opacity-80 bottom-4 gap-1'>
                <small className='text-neutral-50 text-base not-italic font-normal leading-[normal]'>
                  Read more
                </small>
                <img src={arrow} alt='arrow' />
              </div>
            </div>
          </div>
          <div className='flex items-center justify-between'>
            <div className='relative rgba p-5 flex items-center flex-col justify-center  w-[22.5rem] h-80 rounded-xl'>
              <img src={swap} alt='swap icon' />
              <img
                src={pup}
                alt='mixer icon'
                className='absolute  rounded-xl left-0'
              />
              <h3 className=' text-white text-2xl not-italic mt-3 font-bold leading-[normal]'>
                Swap
              </h3>
              <p className='text-white not-italic font-normal leading-[normal] w-56 text-center opacity-80 mt-[1.12rem] mb-[2.5rem]'>
                Lorem ipsum dolor sit amet consectetur. Sit ac{' '}
              </p>
              <div className='flex items-center absolute right-4 cursor-pointer opacity-80 bottom-4 gap-1'>
                <small className='text-neutral-50 text-base not-italic font-normal leading-[normal]'>
                  Read more
                </small>
                <img src={arrow} alt='arrow' />
              </div>
            </div>
            <div className='relative rgba p-5 flex items-center flex-col justify-center  w-[22.5rem] h-80 rounded-xl'>
              <img src={locker} alt='locker icon' />
              <img
                src={oran}
                alt='oran icon'
                className='absolute  rounded-xl top-0 left-0'
              />
              <h3 className=' text-white text-2xl not-italic mt-3 font-bold leading-[normal]'>
                Locker
              </h3>
              <p className='text-white not-italic font-normal leading-[normal] w-56 text-center opacity-80 mt-[1.12rem] mb-[2.5rem]'>
                Lorem ipsum dolor sit amet consectetur. Sit ac{' '}
              </p>
              <div className='flex items-center absolute right-4 cursor-pointer opacity-80 bottom-4 gap-1'>
                <small className='text-neutral-50 text-base not-italic font-normal leading-[normal]'>
                  Read more
                </small>
                <img src={arrow} alt='arrow' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
