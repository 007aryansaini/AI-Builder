import React from 'react'
import logo from '../assets/logo.png'
import stake from '../assets/Features Assets/stake.png'
import learn from '../assets/Features Assets/learn.png'
import test from '../assets/Features Assets/test.png'
import com from '../assets/Features Assets/com.png'

function Features() {
  const featuresList = [
    {icon: stake, name: 'STAKING', info: 'Stay tuned for announcements on how to participate in our Staking Program.'},
    {icon: test, name: 'TEST YOUR KNOWLEDGE', info: 'Stay tuned for how $EdFi will allow you to test your Knowledge in Crypto.'},
    {icon: learn, name: 'LEARN', info: 'We aim to be an educational hub for the crypto space. Access educational content on $EdFi soon.'},
    {icon: com, name: 'COMMUNITY', info: 'Join our active community that will be growing rapidly by day as more partnerships get aligned with $EdFi'},
  ]
  return (
    <div className='features flex items-center pt-20 justify-center flex-col py-10'>
      <div className="flex items-center justify-center flex-col gap-10 pb-10 z-10">
        <img src={logo} alt="" />
        <p className='text-[18px] inter font-bold text-center text-[#ABABAB] mt-5 mb-10'>The ultimate all in one Web3 Education platform you been waiting for!</p>
      </div>

      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-y-[80px] gap-y-10 lg:gap-x-[300px]">
        {featuresList.map((item, index) => (
          <div className="text-white flex flex-col justify-center items-center text-center z-10" key={index}>
            <img src={item.icon} className='my-4' alt="" />
            <h4 className='inter text-[1.3rem] font-bold my-1' 
              style={{ backgroundImage: 'linear-gradient(to right, #3e3f3f 0%, #ffff 30%, #3e3f3f 100%)', /* Adjust the colors and stops as needed */
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
              {item.name}
            </h4>


            <p className='inter w-[250px] lg:text-[#cfcfcf] text-[#727272]'>{item.info}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features