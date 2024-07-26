import React from 'react'

function FinancialCapital() {
  return (
    <div className='marginal'>
          <div className='py-8'>
              <img src="./FC/fc-1.png" alt="" />
          </div>
          <div className='grid lg:grid-cols-4 gap-4'>
               <div>
                    <p className='lg:text-5xl text-3xl font-extrabold text-[#faa22b]'>₹8,66,345</p>
                    <p  className='lg:text-3xl text-2xl font-thin text-[#faa22b] py-2'>Crore</p>
                    <p className='lg:text-xl font-medium'>Revenue from Operations</p>
               </div>
               <div>
                    <p className='lg:text-5xl text-3xl font-extrabold text-[#faa22b]'>₹39,619</p>
                    <p  className='lg:text-3xl text-2xl font-thin text-[#faa22b] py-2'>Crore</p>
                    <p className='lg:text-xl font-medium'>Profit After Tax</p>
               </div>
               <div>
                    <p className='lg:text-5xl text-3xl font-extrabold text-[#faa22b]'>₹2,36,884</p>
                    <p  className='lg:text-3xl text-2xl font-thin text-[#faa22b] py-2'>Crore</p>
                    <p className='lg:text-xl font-medium'>Market Capitalisation
                    (as on March 31, 2024)</p>
               </div>
               <div>
                    <p className='lg:text-5xl text-3xl font-extrabold text-[#faa22b]'>₹1,76,715</p>
                    <p  className='lg:text-3xl text-2xl font-thin text-[#faa22b] py-2'>Crore</p>
                    <p className='lg:text-xl font-medium'>Net Worth</p>
               </div>
               <div>
                    <p className='lg:text-5xl text-3xlfont-extrabold text-[#faa22b]'>22.42%</p>
                    <p className='lg:text-xl font-medium'>ROE</p>
               </div>
          </div>
          <div className='py-8'>
               <div className='flex lg:flex-row flex-col gap-4'>
                   <div>
                         <img src="./FC/fc-2.png" alt="" />
                   </div>
                   <div>
                        <img src="./FC/fc-3.png" alt="" />
                    </div>
               </div>
               <div className='lg:w-[50%]'>
                     <img src="./FC/fc-4.png" alt="" />
               </div>
          </div>
          <div className='flex lg:flex-row flex-col gap-4'>
               <div>
                   <img src="./FC/fc-5.png" alt="" />
               </div>
               <div>
                   <img src="./FC/fc-6.png" alt="" />
               </div>
          </div>
          <div className='py-8'>
              <img src="./FC/fc-7.png" alt="" />
          </div>
    </div>
  )
}

export default FinancialCapital
