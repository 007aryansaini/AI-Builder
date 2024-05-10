import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import edu from '../assets/education.png';
import blur from '../assets/introBg.png';

function Intro() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 300;
      if (scrollY > threshold) {
        controls.start({ opacity: 1, x: 0 });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls]);

  return (
    <div className='flex justify-center items-center gap-10 relative flex-wrap lg:p-[60px] p-[40px] bg-[#000302] pb-10'>
      <motion.img
        src={blur}
        className='absolute right-0'
        alt=""
        initial={{ opacity: 0, x: -100 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        animate={controls}
      />
      <motion.div
        className=" img w-[500px]"
        initial={{ opacity: 0, x: 50 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        animate={controls}
      >
        <img src={edu} alt="" />
      </motion.div>
      <motion.div
        className=" text text-center"
        initial={{ opacity: 0, x: 0 }}
        transition={{ ease: 'easeIn', duration: 0.5 }}
        animate={controls}
      >
        <h3 className='text-[23px] font-bold inter text-white mb-5' style={{
          backgroundImage: 'linear-gradient(to right, #373737, #ffff)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}>
          EDU CRYPT STANDS FOR <br /> CRYPTO EDUCATION
        </h3>
        <p className='inter text-white lg:w-[600px]'>
          EdFi aims to become an educational ecosystem for all things crypto based. EdFi aims to provide the necessary tools for Web3 Education and become a leader in this category.
        </p>
      </motion.div>
    </div>
  );
}

export default Intro;
