import React from 'react'
import gempad from '../assets/Partners Assets/gempad.png'
import maxxchain from '../assets/Partners Assets/maxxchain.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'

const Brands = () => {
  return (
    <div className='text-white bg-black py-10 flex flex-col justify-center items-center px-5'>
        <div className="head flex flex-col items-center justify-center gap-4">
            <h3 className='lg:text-2xl text-lg font-bold inter'>Trusted Partners:</h3>
            <p className='text-semibold inter text-s lg:text-base  text-center'>Together, we are making a safer crypto experience for everyone.</p>
        </div>
        <div className="brandLogos flex justify-between lg:mt-16 mt-10 lg:w-[60%] gap-10 items-center lg:ml-10">
            <img src={maxxchain} alt="" className='lg:w-[70px] w-[30px]' />
            <p className="text-bold inter opacity-[0.7] lg:py-3 py-2 lg:px-6 px-4 text-xs rounded-md flex items-center gap-2 bg-gradient-to-b from-white to-black">
                <FontAwesomeIcon icon={faLock}/>
                Coming Soon
            </p>
            <img src={gempad} alt="" className='lg:w-[150px] w-[50px]' />
            
        </div>
    </div>
  )
}

export default Brands