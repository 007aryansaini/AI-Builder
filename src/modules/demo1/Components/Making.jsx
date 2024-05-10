import blurLeft from '../assets/blur2.png'
import blurRight from '../assets/blur.png'
import ai from '../assets/Making Assets/educryptAI.png'
import summarizer from '../assets/Making Assets/summarizer.png'
import logo from '../assets/logo.png'
import Tilt from 'react-parallax-tilt';

function Making() {
  return (
    <div className="lg:p-20 p-10 bg-[#000302] relative">
      <img src={blurLeft} className='absolute left-0 w-[700px] top-0' alt="" />
      <img src={blurRight} className='absolute right-0 w-[700px] h-[100%] bottom-0' alt="" />
      <div className="head text-center py-10 lg:pb-16">
        <h3 className='lg:text-4xl text-[24px] font-bold inter lg:pb-10 pb-2' style={{
          backgroundImage: 'linear-gradient(to right, #3e3f3f 30%, #ffff 50%, #3e3f3f 70%)', 
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          What We're Making 
        </h3>
        <p className='text-[#ABABAB] text-[18px]'>To help you learn better</p>
      </div>

      <div className="flex justify-center flex-wrap gap-10 items-center my-5">
        <Tilt className="cards lg:w-[350px] lg:h-[650px] flex flex-col justify-between items-center">
          <h5 className='px-3 py-2 bg-[#2a2b2b] rounded-2xl text-lg font-semibold text-white'>Crypt Summarizer</h5>
          <img src={ai} alt=""  className='lg:w-[150px] w-[120px] my-5 lg:my-0'/>
          <p className='text-[#727272] my-10 text-center '>
            Presenting an AI Chatbot that delivers concise insights on Web3, 
            Cryptocurrency, and Blockchain. This virtual assistant offers 
            expert guidance and educational materials to enrich your 
            comprehension of these innovative technologies. EDFI AI
          </p>
          <button className='bg-[#007458] hover:bg-[#07503f] mt-[3rem] transition-all border-[1px] border-[#07D1A1] font-semibold text-white lg:px-[3rem] px-5 lg:py-3 py-2 text-lg rounded-2xl inter'>EDUCRYPT.AI</button>
        </Tilt>

        <Tilt className="cards lg:w-[350px] lg:h-[650px] flex flex-col justify-between items-center">
          <h5 className='px-3 py-2 bg-[#1d1e1e] rounded-2xl text-lg font-semibold text-white'>Educrypt.AI</h5>
          <img src={summarizer} className='lg:w-[150px] w-[120px] my-5 lg:my-0' alt="" />
          <p className='text-[#727272] my-10 text-center '>
            Introducing our AI-powered Summarizer tool. It efficiently 
            summarizes text, PDFs, and URLs into concise and coherent 
            summaries. With advanced natural language processing, grasp 
            key information quickly. Bookmark feature for personalized 
            knowledge base. Streamline information processing, enhance 
            productivity, and stay well-informed with our Summarizer tool. 
            EDFI Summarizer
          </p>
          <button className='bg-[#007458] hover:bg-[#07503f] mt-[3rem] transition-all border-[1px] border-[#07D1A1] font-semibold text-white lg:px-[3rem] px-5 lg:py-3 py-2 text-base rounded-2xl inter'>CRYPT SUMMARIZER</button>
        </Tilt>

        <Tilt className="cards lg:w-[350px] lg:h-[650px] flex flex-col justify-between items-center">
          <h5 className='px-3 py-2 bg-[#1d1e1e] rounded-2xl text-lg font-semibold text-white'>Crypt Education</h5>
          <img src={logo} alt="" className='lg:w-[150px] w-[120px] my-5 lg:my-0' />
          <p className='text-[#727272] my-10 text-center '>
            Presenting an AI Chatbot that delivers concise insights on Web3, 
            Cryptocurrency, and Blockchain. This virtual assistant offers expert 
            guidance and educational materials to enrich your comprehension of 
            these innovative technologies. <span className='underline'>EDFI AI</span>
          </p>
          <div className="mt-[3rem] flex flex-col justify-center items-center gap-3">
          <button className='bg-[#007458] hover:bg-[#07503f] transition-all border-[1px] border-[#07D1A1] font-semibold text-white lg:px-[3rem] px-5 lg:py-3 py-2 text-lg rounded-2xl inter'>CRYPT TWITTER</button>
          <button className='bg-[#007458] hover:bg-[#07503f] transition-all border-[1px] border-[#07D1A1] font-semibold text-white lg:px-[3rem] px-5 lg:py-3 py-2 text-lg rounded-2xl inter'>CRYPT TELEGRAM</button>
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Making;
