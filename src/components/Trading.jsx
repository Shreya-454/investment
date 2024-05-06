import React from 'react'
import funds from '../assets/images/svg/funds.svg'
import graphic from '../assets/images/webp/Graphic.webp'
import lines2 from '../assets/images/svg/lines2.svg'
const info = [
    {
        head:"Depositing Funds",
        para:"Adding funds to your trading account to enable InvestGPT."
    },
    {
        head:"Setting Parameters",
        para:"You'll have the opportunity to specify parameters such risk."
    }
]
const Trading = () => {
    const infocard = info.map((data,i)=>(
        <div key={i} className="w-full p-2.5 bg-[#1811344D] border-2 border-solid border-[#AB68FF4D] rounded-lg sm:rounded-full backdrop-blur-lg mb-6">
    <div className=' sm:flex gap-4 items-center'>
        <div className=' justify-center flex max-sm:mb-4'>
            <div className="h-[60px] w-[60px] bg-[#AB68FF] rounded-full shadow-[0px_0px_6px_0px_#AB68FF99]">
                <img src={funds} alt="img" />
            </div>
        </div>
        <div className='pr-[18px]'>
            <h4 className=' text-white font-Inter max-sm:text-center font-semibold text-base leading-[19.36px] mb-2.5'>{data.head}</h4>
            <p className=' font-inter font-normal max-sm:text-center text-white text-base opacity-70'>{data.para}</p>
        </div>
    </div>
</div>
    ))
  return (
    <div className='pt-[53px] pb-[200px] relative'>
        <img src={lines2} alt="line" className='absolute top-[-20%] bottom-[-25%] left-0' />
      <div className="container max-w-[1164px] mx-auto 2xl:max-w-[1320px] px-3">
<div className="flex lg:flex-row flex-wrap -mx-3 flex-col-reverse">
<div className="lg:w-1/2 w-full px-3">
<h2 className=' font-Inter text-[40px] max-sm:text-3xl sm:leading-[48.41px] text-white font-bold pb-4 max-lg:text-center'>Empowering your <span className='text-[#AB68FF] font-extrabold'>active trading</span> experience with more buying power</h2>
<p className=' font-Inter text-white max-sm:text-sm text-base opacity-70 font-normal pb-[30px] max-lg:text-center'>InvestGPT offers a dynamic facility for users who are ready to actively engage in trading.</p>
{infocard}
<button className=' py-4 px-5 rounded-full font-semibold text-white font-Inter bg-[#AB68FF] shadow-[0px_0px_6px_0px_#AB68FF99] mt-4'>
Register for Free
</button>
</div>
<div className="lg:w-1/2 w-full px-3 flex justify-center items-center">
<img src={graphic} alt="img" />
</div>
</div>
      </div>
    </div>
  )
}

export default Trading
