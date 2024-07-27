import React from 'react'
import './BusinessModel.css'

function BusinessModel() {
  return (
    <div className='marginal'>
        <div className='mx-auto'>
            <div >
                <p className='lg:text-3xl text-2xl font-bold py-4'>Business Model</p>
                <p className='text-[#12af7e]  font-extrabold lg:text-4xl text-3xl py-4'>Delivering
                Sustainable Value</p>
            </div>
            <div>
                <img src="./BusinessModel/buss-1.jpg" alt="" className='w-[95%]' />
            </div>
            <div className='grid lg:grid-cols-3'>
                 <div>
                    <img src="./BusinessModel/buss-2.jpg" alt="" />
                 </div>
                 <div>
                      <img src="./BusinessModel/buss-3.jpg" alt="" />
                 </div>
                 <div className='pt-3'>
                      <img src="./BusinessModel/buss-4.jpg" alt="" />
                 </div>
            </div>
            <div className=''>
                  <p className='text-2xl font-bold py-4'>VALUE CREATION PROCESS</p>
                  <div className='flex lg:flex-row flex-col  p-4 bg-[#eeeff1]'>
                      <div className=''>
                           <div >
                               <img src="./BusinessModel/buss-5.jpg" alt="" />
                           </div>
                           <div >
                               <img src="./BusinessModel/buss-6.jpg" alt="" />
                           </div>
                      </div>
                      <div className=''>
                             <img src="./BusinessModel/buss-7.jpg" alt="" />
                      </div>
                  </div>
            </div>
            <div>
                   <p className='text-2xl font-bold py-4'>OUTPUT</p>
                   <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                       <div>
                            <img src="./BusinessModel/buss-8.jpg" alt="" />
                       </div>
                       <div>
                            <img src="./BusinessModel/buss-9.jpg" alt="" />
                       </div>
                       <div>
                             <img src="./BusinessModel/buss-10.jpg" alt="" />
                       </div>
                   </div>
            </div>
            <div>
                   <p className='text-2xl font-bold py-4'>OUTCOME AND SDG ALIGNMENT</p>
                   <div className='grid lg:grid-cols-3 sm:grid-cols-1'>
                       <div>
                            <img src="./BusinessModel/buss-11.jpg" alt="" />
                       </div>
                       <div>
                            <img src="./BusinessModel/buss-12.jpg" alt="" />
                       </div>
                       <div>
                             <img src="./BusinessModel/buss-13.jpg" alt="" />
                       </div>
                   </div>
            </div>
            <div className='my-8'>
                  <p className='text-2xl font-bold py-4'>STAKEHOLDER IMPACTED</p>
                  <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-4 text-[#96979a]'>
                      <div>
                      <ul>
                        <li>Investors</li>
                        <li>Government and Regulatory Bodies</li>
                      </ul>
                      </div>
                      <div>
                      <ul>
                        <li>Investors</li>
                        <li>Employees and Contractual Workers</li>
                        <li>Government and Regulatory Bodies</li>
                      </ul>
                      </div>
                      <div>
                      <ul>
                        <li>Employees</li>
                        <li>Customers</li>
                        <li>Government and Regulatory Bodies</li>
                      </ul>
                      </div>
                  </div>
            </div>
        </div>
        <div>
              <div className='flex lg:flex-row flex-col'>
                   <div>
                       <img src="./BusinessModel/buss-14.jpg" alt="" />
                   </div>
                   <div>
                       <img src="./BusinessModel/buss-15.jpg" alt="" />
                   </div>
              </div>
        </div>
        <div>
              <div className='flex lg:flex-row flex-col'>
                   <div>
                       <img src="./BusinessModel/buss-16.jpg" alt="" />
                   </div>
                   <div>
                       <img src="./BusinessModel/buss-17.jpg" alt="" />
                   </div>
              </div>
        </div>
        <div className='flex lg:flex-row flex-col my-8'>
             <div>
                 <img src="/BusinessModel/buss-18.jpg" alt="" />
             </div>
             <div>
                  <img src="/BusinessModel/buss-19.jpg" alt="" />
             </div>
             <div> 
                  <img src="/BusinessModel/buss-20.jpg" alt="" />
             </div>
        </div>
        
    </div>
  )
}

export default BusinessModel
