import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import blurLeft from '../assets/blur2.png';
import blurRight from '../assets/blur.png';
import Footer from './Footer';

function Buy() {
  const copyToClipboard = (address) => {
    navigator.clipboard.writeText(address);
    toast.success('Address copied!', { position: 'top-center', autoClose: 2000 });
  };

  return (
    <div className='lg:p-20 p-10 bg-[#000302] relative'>
      <img src={blurLeft} className='absolute left-0 w-[700px] top-0' alt="" />
      <img src={blurRight} className='absolute right-0 w-[700px] h-[100%] bottom-0' alt="" />

      <div className="cards flex flex-col justify-between items-center">
        <h3 className='lg:text-4xl text-[24px] font-bold inter my-5' style={{
          backgroundImage: 'linear-gradient(to right, #3e3f3f 0%, #ffff 50%, #3e3f3f 100%)', 
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          Buy on Uniswap
        </h3>
        <h5 className='px-3 py-1 bg-[#2a2b2b] rounded-2xl text-lg font-semibold text-white'>Token</h5>
        <div className=" p-3 rounded-2xl flex bg-[#1d2521] lg:mt-20 mt-7 lg:w-[700px] w-[300px]">
          <p className='lg:border-r-[1px] lg:block hidden border-[#ABABAB] p-3 text-[#00FF85] inter text-lg'>Contract Address</p>
          <p
            className='address lg:p-3 text-white text-lg inter cursor-pointer'
            style={{
              minWidth: '300px',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            onClick={() => copyToClipboard('0x76c81e322fe678f9391029d571453fad9bc9e73e')}
          >
            0x76c81e322fe678f9391029d571453fad9bc9e73e
          </p>

        </div>
        <button className='bg-[#007458] hover:bg-[#07503f] mt-[3rem] transition-all border-[1px] border-[#07D1A1] font-semibold text-white px-[3rem] py-3 text-lg rounded-2xl inter'>
          BUY $EDUCRYPT
        </button>
      </div>
      <Footer/>

      <ToastContainer />
    </div>
  );
}

export default Buy;
