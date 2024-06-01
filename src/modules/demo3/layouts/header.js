import React from 'react';
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className='bg-[#220720] py-3 border-b-[rgba(128,128,128,0.20)] border-b border-solid'>
      <div className='max-w-[80vw] mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-1'>
          <img src={logo} alt='logo' />
          <h4 className='text-[rgba(250,250,250,0.98)] text-[2rem] not-italic font-semibold leading-[1.875rem]'>
            Jitter Swap
          </h4>
        </div>
        <div className=''>
          <ul className='flex items-center gap-[5.25rem] text-neutral-50 not-italic font-medium leading-[1.875rem] list-none'>
            <li>Trade</li>
            <li>Jobs</li>
            <li>Discord</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
