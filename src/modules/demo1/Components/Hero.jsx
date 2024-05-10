import React, { useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';
import Navbar from './Navbar';
import blurLeft from '../assets/blur2.png';
import blurRight from '../assets/blur.png';

function Hero() {
  const maintextRef = useRef(null);

  const maintextProps = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: config.wobbly,
  });

  return (
    <div className="hero">
      <Navbar />
      <div className="flex items-center flex-col justify-center gap-20 h-[90vh] relative">
        <img src={blurLeft} className="absolute left-0 w-[700px] h-[100%] top-0" alt="" />
        <img src={blurRight} className="absolute right-0 w-[700px] h-[100%] top-0" alt="" />
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="hero-header text-center flex flex-col justify-center items-center ml-10">
          <Link to="maintext" smooth duration={500}>
            Scroll down
          </Link>
          <animated.h2
            ref={maintextRef}
            id="maintext"
            className="maintext inter lg:text-[60px] text-[25px] font-bold text-white text-center"
            style={{
              backgroundImage: 'linear-gradient(to right, #3e3f3f 0%, #ffff 30%, #3e3f3f 100%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              ...maintextProps,
            }}
          >
            AN EDUCATIONAL HUB <br />
            FOR CRYPTO INVESTORS
          </animated.h2>
          
        </div>
      </div>
    </div>
  );
}

export default Hero;
