import React from 'react'
import funds from '../assets/images/svg/funds.svg'
import graphic from '../assets/images/webp/Graphic.webp'
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
        <div key={i} className="w-full p-2.5 bg-[#1811344D] border-2 border-solid border-[#AB68FF4D] rounded-full backdrop-blur-lg mb-6">
    <div className=' flex gap-4 items-center'>
        <div className="h-[60px] w-[60px] bg-[#AB68FF] rounded-full shadow-[0px_0px_6px_0px_#AB68FF99]">
            <img src={funds} alt="img" />
        </div>
        <div className='pr-[18px]'>
            <h4 className=' text-white font-Inter font-semibold text-base leading-[19.36px] mb-2.5'>{data.head}</h4>
            <p className=' font-inter font-normal text-white text-base opacity-70'>{data.para}</p>
        </div>
    </div>
</div>
    ))
  return (
    <div className='pt-[53px] pb-[200px]'>
      <div className="container max-w-[1164px] mx-auto 2xl:max-w-[1320px] px-3">
<div className="flex flex-row flex-wrap -mx-3">
<div className="w-1/2 px-3">
<h2 className=' font-Inter text-[40px] text-white font-bold pb-4'>Empowering your <span className='text-[#AB68FF] font-extrabold'>active trading</span> experience with more buying power</h2>
<p className=' font-Inter text-white text-base opacity-70 font-normal pb-[30px]'>InvestGPT offers a dynamic facility for users who are ready to actively engage in trading.</p>
{infocard}
<button className=' py-4 px-5 rounded-full text-white font-Inter bg-[#AB68FF] shadow-[0px_0px_6px_0px_#AB68FF99] mt-4'>
Register for Free
</button>
</div>
<div className="w-1/2 px-3 flex justify-center items-center">
<img src={graphic} alt="img" />
</div>
</div>
      </div>
    </div>
  )
}

export default Trading
