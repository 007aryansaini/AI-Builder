import React from 'react';
import vault from '../assets/vault.svg';

const Tokenomics = () => {
  return (
    <section className='tokenemics py-28'>
      <div className='max-w-[80vw] mx-auto flex items-center flex-col justify-center'>
        <h3 className='text-white text-[2.125rem] mb-6 not-italic font-bold leading-[normal]'>
          Tokenomics
        </h3>
        <div className='flex items-center'>
          <img src={vault} alt='vault' />
          <div className='w-[43.625rem]'>
            <div className='flex items-center gap-6'>
              <div className='bg-[rgba(138,135,141,0.10)] rounded-[0.9375rem] flex-1 flex items-center justify-center flex-col py-4'>
                <h6 className='text-neutral-50 text-xl not-italic font-normal leading-[normal]'>
                  Buy Tax
                </h6>
                <h5 className='text-[#D7EF41] text-3xl not-italic font-bold leading-[normal]'>
                  10%
                </h5>
              </div>
              <div className='bg-[rgba(138,135,141,0.10)] rounded-[0.9375rem] flex-1 flex items-center justify-center flex-col py-4'>
                <h6 className='text-neutral-50 text-xl not-italic font-normal leading-[normal]'>
                  Sell Tax
                </h6>
                <h5 className='text-[#D7EF41] text-3xl not-italic font-bold leading-[normal]'>
                  5%
                </h5>
              </div>
              <div className=''></div>
            </div>
            <div className='w-full bg-[rgba(35,39,44,0.50)] p-4 rounded-[0.9375rem] mt-7'>
              <h6 className='text-neutral-50 mb-4 not-italic font-semibold leading-[normal]'>
                Contract Address
              </h6>
              <div className='flex items-center mb-4 gap-3'>
                <p className='text-neutral-50 not-italic text-sm opacity-90 font-semibold leading-[normal]'>
                  01x230067999AAA711200CCYXX200KW
                </p>
                <button className='justify-center items-center gap-2.5 bg-[#EA80E6] text-[#222] text-base not-italic font-normal leading-[normal] px-8 py-3 rounded-[0.9375rem]'>
                  Copy
                </button>
              </div>
              <div className='w-[60%] text-neutral-50 not-italic text-sm opacity-90 font-semibold leading-[normal]'>
                <div className='grid grid-cols-[1fr_1fr] mb-4 '>
                  <div className=''>
                    <h5 className='opacity-80 mb-1'>Symbol</h5>
                    <h6>0x7AG</h6>
                  </div>
                  <div className=''>
                    <h5 className='opacity-80 mb-1'>Network</h5>
                    <h6>Ethereum ERC 12</h6>
                  </div>
                </div>
                <div className='grid grid-cols-[1fr_1fr]'>
                  <div className=''>
                    <h5 className='opacity-80 mb-1'>Decimal</h5>
                    <h6>15.7</h6>
                  </div>
                  <div className=''>
                    <h5 className='opacity-80 mb-1'>Supply</h5>
                    <h6>50,000,200</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className='w-[60%] text-center mx-auto'>
        Lorem ipsum dolor sit amet consectetur. Sit ac vestibulum feugiat nulla
        placerat risus. Porta quam ridiculus duis ultrices ultrices velit in
        nullam. Eget sed volutpat iaculis
      </p>
    </section>
  );
};

export default Tokenomics;
