import React from 'react';
import alysa from '../assets/alysa.svg';
import benny from '../assets/benny.svg';
import oxd from '../assets/oxd.svg';

const Community = () => {
  return (
    <section className='community py-28'>
      <div className='max-w-[80vw] mx-auto flex items-center flex-col justify-center'>
        <h3 className='text-white text-[2.125rem] mb-6 not-italic font-bold leading-[normal]'>
          Join Our Community
        </h3>
        <p className='text-white text-center opacity-90 not-italic font-normal leading-[normal] w-[55%]'>
          Lorem ipsum dolor sit amet consectetur. Sit ac vestibulum feugiat
          nulla placerat risus. Porta quam ridiculus duis ultrices .
        </p>
        <div className='flex items-center justify-between gap-20 mt-20'>
          <div className='bg-[rgba(40,15,80,0.46)] flex w-[18.1875rem] h-[21.4375rem] flex-col justify-center items-center shrink-0 rounded-[0.9375rem]'>
            <h4 className='text-white text-xl not-italic font-bold leading-[normal] mb-6'>
              Alyssa.Eth
            </h4>
            <img src={alysa} alt='alysa' />
          </div>
          <div className='bg-[rgba(40,15,80,0.46)] flex w-[18.1875rem] h-[21.4375rem] flex-col justify-center items-center shrink-0 rounded-[0.9375rem]'>
            <h4 className='text-white text-xl not-italic font-bold leading-[normal] mb-6'>
              Oxd6...2dca
            </h4>
            <img src={oxd} alt='oxd' />
          </div>
          <div className='bg-[rgba(40,15,80,0.46)] flex w-[18.1875rem] h-[21.4375rem] flex-col justify-center items-center shrink-0 rounded-[0.9375rem]'>
            <h4 className='text-white text-xl not-italic font-bold leading-[normal] mb-6'>
              Benny.Eth
            </h4>
            <img src={benny} alt='benny' />
          </div>
        </div>
        <button className='bg-[#D7EF41] rounded-md text-[#222] flex items-center justify-center mt-12 not-italic font-normal leading-[1.875rem] px-6 py-3.5 '>
          Connect Wallet
        </button>
      </div>
    </section>
  );
};

export default Community;
