import React from 'react'
import logos from '../assets/images/webp/logos.webp'
import cardbg1 from '../assets/images/webp/cardbg1.webp'
import phone from '../assets/images/webp/phone.webp'
import cardbg2 from '../assets/images/webp/cardbg2.webp'
import cardbg3 from '../assets/images/webp/cardbg-3.webp'
import cardbg4 from '../assets/images/webp/cardbg4.webp'
import lines1 from '../assets/images/svg/lines1.svg'
const data1 = [
    {
        head:"Explore Trading Options",
        para:"Learn about different asset classes such as stocks, bonds, ETFs, and cryptocurrencies.",
        img:logos,
        bgimg:cardbg1,
        imgclass:"!bottom-[10%] !right-[10%]",
        class:"max-md:!pt-[60px]"
    },
    {
        head:'Risk Management',
        para:"Understand how to mitigate risks through diversification, stop-loss orders, and other strategies.",
        img:phone,
        bgimg:cardbg2,
        class:"!p-0 max-md:!pt-[60px]",
      
    },
    {
        head:"Trading Strategies",
        para:"Discover various approaches to trading, from day trading to long-term investing, and everything in between.",
        style:'!max-w-[287px]',
        bgimg:cardbg3,
        imgclass:"!hidden",
        img:"",
        class:"!pt-[60px]"
    },
    {
        head:"Customer Support",
        para:"Access to a dedicated customer service team for assistance with any platform-related questions or issues.",
        style:'!max-w-[287px]',
        bgimg:cardbg4,
        imgclass:"!hidden",
        img:"",
        class:"!pt-[60px]"
    },
]
const Financial = () => {
    const datacard1 = data1.map((card,i) =>(
        <div className="lg:w-1/2 w-full px-3 mb-6 flex justify-center" key={i}>
        <div className={`w-full max-lg:max-w-[558px] rounded-3xl bg-[#110B26] before:top-0 before:h-full before:bottom-0 before:bg-[#AB68FF] before:!duration-500 before:left-0 before:right-[200%] hover:before:right-0  before:z-[-1] before:absolute border-2 border-solid z-[1] after:z-[2] h-[450px] md:h-[230px] border-[#AB68FF4D] p-[29px_20px_29.44px_0px] after:w-[12px] overflow-hidden border-l-[#AB68FF]  after:bg-[#AB68FF] after:absolute relative after:left-[-2px] after:top-0 after:bottom-0 ${card.class}`} data-aos="zoom-in">
            <div className="sm:flex justify-between items-center">
                <div className='pl-7'>
                    <h4 className=' font-Inter text-white text-xl  leading-[24.2px] font-semibold pb-[14px] max-sm:text-center'>{card.head}</h4>
                    <p className={`font-Inter text-base text-white font-normal max-w-[259px] max-sm:mx-auto opacity-70 max-sm:text-center ${card.style}`}>{card.para}</p>
                </div>
                <div className=' justify-center w-1/3'><img src={card.img} alt="img" className={`${card.imgclass} max-md:absolute bottom-[2%] right-[30%] z-[-1] `} /></div>
            </div>
            <img src={card.bgimg} alt="bg" className='absolute right-0 md:top-0 bottom-0  z-[-2]' width={344} height={230} />
        </div>
                    </div>
    ))
  return (
    <div className=' bg-[url(./assets/images/webp/financialbg.webp)] bg-cover bg-center bg-no-repeat md:pt-[200px] md:pb-[154px] sm:py-[100px] py-10 relative overflow-x-clip z-[1]'>
        <img src={lines1} alt="line" className=' absolute bottom-0 top-0 right-0' />
        <div className="w-[329px] h-[330px] bg-[#AB68FF] rounded-full opacity-30 absolute right-[-4%] top-[32%] blur-[150px]"></div>
      <div className=' container max-w-[1164px] 2xl:max-w-[1320px] mx-auto px-3'>
          <h2 className=' font-inter text-center text-white text-[40px] leading-[48.41px] font-bold pb-[60px]'>Your Gateway to <span className=' font-extrabold text-[#AB68FF]'>Financial Empowerment</span></h2>
          <div className="flex flex-wrap flex-row -mx-3">
       {datacard1}
          </div>
      </div>
      <div className="absolute w-full h-[148px] max-sm:h-10 bg-gradient-to-t from-[#00010100] to-[#000102] top-0 "></div>
      <div className="absolute w-full h-[148px] max-sm:h-10 bg-gradient-to-t from-[#00010100] to-[#000102] -rotate-180 bottom-0"></div>
    </div>
  )
}

export default Financial
