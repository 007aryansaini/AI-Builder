import React from 'react';
import logo from '../assets/logo.svg';
import twitter from '../assets/twitter.svg';
import telegram from '../assets/telegram.svg';

const Footer = () => {
  return (
    <footer className='bg-[#110321] py-28'>
      <div className='max-w-[80vw] mx-auto flex justify-between'>
        <div className='flex items-start gap-3'>
          <img src={logo} alt='logo' />
          <h4 className='text-[rgba(250,250,250,0.98)] text-[2rem] not-italic font-semibold leading-[1.875rem]'>
            Jitter Swap
          </h4>
        </div>{' '}
        <div className=''>
          <div className='flex items-center gap-20'>
            <div className=''>
              <h6 className='text-neutral-50 mb-5 text-xl not-italic font-semibold leading-[normal]'>
                Contact Details
              </h6>
              <ul className='text-white not-italic font-medium leading-[normal]'>
                <li className='mb-2'>USA +0131234567</li>
                <li className='mb-2'>UAE +1234567890</li>
                <li className='mb-2'>Nigeria +234918218901</li>
              </ul>
            </div>
            <div className=''>
              <h6 className='text-neutral-50 mb-5 text-xl not-italic font-semibold leading-[normal]'>
                Other Services{' '}
              </h6>
              <ul className='text-white not-italic font-medium leading-[normal]'>
                <li className='mb-2'>Swap</li>
                <li className='mb-2'>Mint NFT</li>
                <li className='mb-2'>Lock Wallet</li>
              </ul>
            </div>
            <div className=''>
              <h6 className='text-neutral-50 mb-5 text-xl not-italic font-semibold leading-[normal]'>
                Quick Links
              </h6>
              <ul className='text-white not-italic font-medium leading-[normal]'>
                <li className='mb-2'>www.quicklinks.com</li>
                <li className='mb-2'>www.quicklinks.com</li>
                <li className='mb-2'>www.quicklinks.com</li>
              </ul>
            </div>
          </div>
          <div className='text-neutral-50 not-italic font-semibold leading-[normal] flex items-center justify-between mt-20'>
            <div className='w-[50%]'>
              <h5 className='text-neutral-50 mb-5 text-xl  not-italic font-semibold leading-[normal]'>
                Newsletters
              </h5>
              <p className='text-sm opacity-90 mb-3'>
                Subscribe to our Newsletter
              </p>
              <label htmlFor='' className='relative bg-white w-[50%]'>
                <input
                  type='text'
                  className='border bg-white w-full rounded-[0.3125rem] border-solid border-white p-2'
                />
                <button className='bg-[#D7EF41] absolute right-0 p-[0.6625rem] text-[#181818] text-[0.8125rem] not-italic font-semibold leading-[normal] rounded-[0.3125rem] border-none'>
                  Subscribe
                </button>
              </label>
            </div>
            <div className=''>
              <h5 className='text-neutral-50 mb-5 text-xl not-italic font-semibold leading-[normal]'>
                Connect with us
              </h5>
              <div className='flex items-center gap-8'>
                <img src={telegram} alt='telegram' />
                <img src={twitter} alt='twitter' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
