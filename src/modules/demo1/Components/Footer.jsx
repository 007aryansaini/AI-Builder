import React from 'react'
import github from '../assets/github.png'
import discord from '../assets/discord.png'
import x from '../assets/x.png'

function Footer() {
  return (
    <div className='flex justify-between flex-wrap items-end'>
        <div className="head pt-10 pb-16 text-left">
            <h3 className='lg:text-4xl text-[25px] font-bold inter lg:pb-2' style={{
            backgroundImage: 'linear-gradient(to right, #3e3f3f 30%, #ffff 50%, #3e3f3f 70%)', 
            WebkitBackgroundClip: 'text',
            color: 'transparent'
            }}>
            Follow our socials!
            </h3>
            <p className='text-[#ABABAB]'>Find updates and announcements</p>
            <div className="socials flex justify-start lg:gap-20 gap-3 my-5 cursor-pointer">
                <img src={github} className='lg:w-[50px] w-[25px]' alt="" />
                <img src={discord} className='lg:w-[50px] w-[25px]' alt="" />
                <img src={x} className='lg:w-[50px] w-[25px]' alt="" />
            </div>
        </div>
        <div className='mb-[65px]'>
            <h3 className='lg:text-lg text-xs font-bold inter pb-2' style={{
                backgroundImage: 'linear-gradient(to right, #3e3f3f 30%, #ffff 50%, #3e3f3f 70%)', 
                WebkitBackgroundClip: 'text',
                color: 'transparent'
            }}>
                Copyright © 2023 EduCrypt. All Rights Reserved.
            </h3>
        </div>
    </div>
  )
}

export default Footer