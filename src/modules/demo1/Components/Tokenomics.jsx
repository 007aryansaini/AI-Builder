import blurLeft from '../assets/blur2.png'
import blurRight from '../assets/blur.png'
import chart from '../assets/pichart.png'

function Tokenomics() {
  return (
    <div className='lg:p-20 p-10 bg-[#000302] relative'>
      <img src={blurLeft} className='absolute left-0 w-[700px] top-0' alt="" />
      <img src={blurRight} className='absolute right-0 w-[700px] h-[100%] bottom-0' alt="" />

      <div className="head text-center py-10 pb-16">
        <h3 className='lg:text-4xl text-[24px] font-bold inter lg:pb-10 pb-3' style={{
          backgroundImage: 'linear-gradient(to right, #3e3f3f 30%, #ffff 50%, #3e3f3f 70%)', 
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          Tokenomics
        </h3>
        <p className='text-[#ABABAB]'>How the token supply is allocated</p>
      </div>

      <div className="toks grid lg:grid-cols-2 grid-cols-1 place-items-center lg:p-[4rem] p-5 gap-36">
        <div className="flex flex-col gap-10">
          <img src={chart} className='lg:lg:w-[400px]  w-[300px]' alt="" />
          <div className="flex lg:flex-row flex-col justify-center gap-10">
            <div className="inter">
              <h5 className='text-[#ABABAB] text-lg font-bold'>Total Supply</h5>
              <p className='text-xl text-white font-bol2 my-3 lg:my-0'>1.000.000.000</p>
              <p className='text-[#ABABAB] lg:my-0'>1 Billion tokens</p>
            </div>
            <div className="inter">
              <h5 className='text-[#ABABAB] text-lg font-bold'>Tax</h5>
              <p className='text-xl text-white font-bold my-2 lg:my-0'>2%</p>
              <p className='text-[#ABABAB] lg:my-0'>1% will get added to liquidity, and 1% will be going to treasury to help fund the project.</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col gap-8">
          <div className="liquidity inter">
            <p className='text-xl text-white font-bold'>Liquidity</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#3FFFE2] w-[70%] h-[100%]"></span> 
              <p className='text-lg text-white absolute lg:right-[7.3rem] right-[2.6rem] font-bold'>70%</p>
            </div>
            <p className='text-[#ABABAB] lg:w-[400px] '>To maximize the liquidity of $EdFi and ensure a healthy market.</p>
          </div>
          <div className="staking inter">
            <p className='text-xl text-white font-bold'>Staking</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#FAF467] w-[10%] h-[100%]"></span> 
              <p className='text-lg text-white absolute lg:left-[5rem] left-9 font-bold'>10%</p>
            </div>
            <p className='text-[#ABABAB] lg:w-[400px] '>Total of 10% of the supply will be allocated for Staking.</p>
          </div>
          <div className="treasury inter">
            <p className='text-xl text-white font-bold'>Treasury</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#FA67A0] w-[10%] h-[100%]"></span> 
              <p className='text-lg text-white absolute lg:left-[5rem] left-9 font-bold'>10%</p>
            </div>
            <p className='text-[#ABABAB] lg:w-[400px] '>To fund the project and ensure longevity.</p>
          </div>
          <div className="liquidity inter">
            <p className='text-xl text-white font-bold'>Airdrop</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#D5FA67] w-[5%] h-[100%]"></span> 
              <p className='text-lg text-white absolute lg:left-[3rem] left-6 font-bold'>5%</p>
            </div>
            <p className='text-[#ABABAB] lg:w-[400px]'>Check Claim Portal for Airdrop Eligibility.</p>
          </div>
          <div className="marketing inter">
            <p className='text-xl text-white font-bold'>Marketing</p>
            <div className="bar relative lg:w-[600px] h-[20px] flex items-center my-3">
              <span className="dot absolute bg-[#A067FA] w-[5%] h-[100%]"></span> 
              <p className='text-lg text-white absolute lg:left-[3rem] left-6 font-bold'>5%</p>
            </div>
            <p className='text-[#ABABAB] lg:w-[400px] '>To further create awareness of the EdFi ecosystem.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tokenomics
