import React from 'react'
import logo from '../assets/images/svg/Logo.svg'
import { Facebook, Insta, Twitter } from './Icons'
const tabledata =[
    {
        head:"Registration Cost",
        para:"Free",
    },
    {
        head:"Fees",
        para:"250 USD"
    },
    {
        head:"Registration",
        para:"Simple, quick"
    },
    {
        head:"Education Focus",
        para:"Cryptocurrencies, Fores, Mutual Funds, and Other Investments"
    },
    {
        head:"Supported Countries",
        para:"Most countries Except USA",
        class:"!border-none"
    }
]
const Highlights = () => {
    const tbl = tabledata.map((info,e)=>(
        <tr key={e} className={`border-b border-solid border-[#453F57] w-full ${info.class} max-sm:inline-grid`}>
                <td  className=' p-[25px_0_20px_30px] sm:w-1/2 w-full max-sm:px-0'>
                    <h2 className=' font-Inter text-xl max-sm:text-lg text-white font-semibold leading-[24.2px] max-sm:text-center '>{info.head}</h2>
                </td>
                <td className='sm:w-1/2 w-full'><p className='text-white font-Inter max-sm:text-sm text-base font-medium opacity-80 max-sm:pb-2 max-sm:text-center'>{info.para}</p></td>
            </tr>
    ))
    const Dates = new Date()
    const year = Dates.getFullYear()
  return (
    <div className='bg-[url(./assets/images/webp/Footerbg.webp)] bg-center bg-cover bg-no-repeat relative z-[1]'>
      <div className="container max-w-[1164px] mx-auto 2xl:max-w-[1320px] px-3 pb-[56px]">
        <div className="w-full border-4 border-solid border-[#AB68FF] rounded-3xl bg-[#1811344D] backdrop-blur-lg mb-[200px]">
<div className="lg:flex items-center">
    <div className="lg:w-1/2 w-full lg:border-r-4 max-lg:border-b-4 max-sm:pb-[25px] border-solid bg-[#AB68FF1A] border-[#AB68FF]">
        <table className=' w-full'>
            <tbody>{tbl}</tbody>
        </table>
    </div>
    <div className="lg:w-1/2 w-full max-lg:py-5">
        <div className="lg:pl-10 max-lg:px-3">
            <h2 className=' text-white font-Inter text-[40px] max-sm:text-3xl sm:leading-[48.41px]  font-bold pb-4 max-lg:text-center'>InvestGPT <span className=' font-extrabold text-[#AB68FF]'>Highlights</span></h2>
            <p className=' max-sm:text-sm text-base text-white font-Inter opacity-70 lg:max-w-[493px] pb-[30px] max-lg:text-center'>InvestGPT illuminates the path to financial success with its array of empowering features tailored for every investor. Dive into a world of curated investment opportunities, where personalized recommendations align with your unique goals and risk appetite.</p>
            <div className='max-lg:flex justify-center'><button className=' max-sm:text-sm text-base text-white leading-[19.36px] font-semibold py-4 px-5 bg-[#AB68FF] rounded-full shadow-[0px_0px_6px_0px_#AB68FF99]'>Get Started</button></div>
        </div>
    </div>
</div>
        </div>
        <div className=' flex justify-center'><img src={logo} alt="logo" /></div>
        <h3 className=' text-white text-center font-Inter max-sm:text-xl text-2xl font-bold leading-[29.05px] py-4'>Invest GPT</h3>
        <p className=' text-center max-sm:text-sm text-base text-white font-Inter font-normal opacity-70 pb-[30px]'>Amet consectetur ignissim <span className=' block'>posuere suscipit neque eget velit.</span></p>
        <div className="flex justify-center gap-5">
            <a href="">
                <div className="rounded-full h-[50px] w-[50px] border-white border-[1.67px] border-solid flex justify-center items-center" >
                    <Facebook/>
                </div>
            </a>
            <a href="">
                <div className="rounded-full h-[50px] w-[50px] border-white border-[1.67px] border-solid flex justify-center items-center" >
                    <Twitter/>
                </div>
            </a>
            <a href="">
                <div className="rounded-full h-[50px] w-[50px] border-white border-[1.67px] border-solid flex justify-center items-center" >
                    <Insta/>
                </div>
            </a>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#FFFFFF4D]"></div>
      <p className=' text-center text-white font-Inter max-sm:text-sm text-base py-7 opacity-70'>Copyright@{year} (All Rights reserved)</p>
      <div className="w-full h-[178px] bg-gradient-to-t from-[#00010100] to-[#000102] absolute top-0 z-[-1]"></div>
    </div>
  )
}

export default Highlights
