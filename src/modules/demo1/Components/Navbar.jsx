import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['Home', 'Educrypt.AIortfolio', 'Summarizer', 'Stake', 'Academy'];

  return (
    <motion.div
      className="navbar bg-transparent relative lg:px-20 p-5 lg:py-8 flex justify-between items-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img src={logo} alt="Logo" className="lg:w-[170px] w-[120px]" />

      {/* Navbar items */}
      <ul className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} space-x-4`}>
        {navItems.map((item, index) => (
          <li key={index} className="inter text-white bg-[#1d1e1e] transition-all cursor-pointer hover:text-[#0AF986] hover:bg-[#132f22] text-base font-semibold p-3 px-4 rounded-2xl">
            {item}
          </li>
        ))}
      </ul>

      {/* Mobile navigation button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        {/* <FontAwesomeIcon icon={faBars} /> */}
      </button>

      {/* CTA Button */}
      <button className="bg-[#007458] hover:bg-[#07503f] transition-all border-[1px] border-[#07D1A1] font-semibold text-white lg:px-[3rem] px-4 lg:py-4 py-2 lg:last:text-[20px] rounded-2xl inter">Connect Wallet</button>
    </motion.div>
  );
};

export default Navbar;
