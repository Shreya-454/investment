import React from 'react'
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
        <tr key={e} className={`border-b border-solid border-[#FFFFFF] w-full ${info.class}`}>
                <td  className=' p-[25px_0_20px_30px] w-1/2 '>
                    <h2 className=' font-Inter text-xl text-white  font-semibold leading-[24.2px]'>{info.head}</h2>
                </td>
                <td className='w-1/2'><p className='text-white font-Inter text-base font-medium'>{info.para}</p></td>
            </tr>
    ))
  return (
    <div className='bg-[url(./assets/images/webp/Footerbg.webp)] bg-center bg-cover bg-no-repeat'>
      <div className="container max-w-[1164px] mx-auto 2xl:max-w-[1320px] px-3">
        <div className="w-full border-4 border-solid border-[#AB68FF] rounded-3xl">
<div className="flex">
    <div className="w-1/2 border-r-4 border-solid border-[#AB68FF]">
        <table className=' w-full'>
            {tbl}
        </table>
    </div>
</div>
        </div>
      </div>
    </div>
  )
}

export default Highlights
