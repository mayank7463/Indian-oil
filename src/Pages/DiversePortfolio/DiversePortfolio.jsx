import React from 'react'

function DiversePortfolio() {
  return (
    <div className='marginal'>
       <div>
           <p className='lg:text-3xl text-2xl font-bold py-4'>Diverse Portfolio</p>
            <div className='lg:w-[40%] py-4'>
               <img src="./Portfolio/dport-1.svg" alt="" />
            </div> 
           <p className='lg:text-2xl text-xl py-4 text-[#58595b]'>To fortify our leadership position in India’s energy landscape, we are currently
            overseeing various ongoing projects. With a combined capital investment of
            about H 2.5 Lakh Crore across these projects, we aim to further strengthen our
            core business.</p>
       </div>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>
            <div className='w-[65%]'>
                <img src="./Portfolio/dport-7.png" alt="" />
            </div>
            <div>
                <div className='w-[7%]'>
                   <img src="./Portfolio/dport-2.svg" alt="" />
                </div>
                <p className='text-[#f37126] font-bold py-4'>Refining, Pipelines and Marketing</p>
                <p>As one of India's leading downstream oil and gas
                Companies, we continue to broaden our range of
                offerings and introduce innovative energy solutions.
                Our Pipelines Division reached a major milestone
                in 2023-24, with the completion of the largest-ever
                pipeline expansion, showcasing our dedication
                to strengthening our infrastructure and extending
                our coverage. Concurrently, we are enhancing our
                petroleum marketing and distribution network to fortify
                our leadership and gain market share.</p>
            </div>
       </div>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>
            <div>
                  <div className='w-[7%]'>
                       <img src="./Portfolio/dport-3.svg" alt="" />
                  </div>
                  <p className='text-[#f37126] font-bold py-4'>Natural Gas</p>
                  <p>Foraying into the natural gas domain since 2004, we
                  have emerged as a major player, investing in LNG
                  sourcing, import terminals, cross-country pipelines and
                  City Gas Distribution (CGD) networks. With a sharper
                  focus on reliability and sustainability, we are committed
                  to expanding our reach and ensuring a steady supply
                  of clean energy nationwide.</p>
            </div>
            <div className='w-[65%]'>
                <img src="./Portfolio/dport-8.png" alt="" />
            </div>
       </div>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>
            <div className='w-[65%]'>
                <img src="./Portfolio/dport-9.png" alt="" />
            </div>
            <div>
                     <div className='w-[7%]'>
                        <img src="" alt="icon" />
                     </div>
                     <p className='text-[#f37126] font-bold py-4'>Petrochemicals</p>
                     <p>Driven by our ambition to lead the petrochemical
                     market in India, we are intensifying our downstream
                     operations and expanding globally. With significant
                     investments planned, we aim to leverage existing
                     refinery streams for petrochemical production,
                     positioning ourselves among Southeast Asia’s
                     front- runner in the long run.</p>
            </div>
       </div>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4 my-4'>
            <div>
                     <div className='w-[7%]'>
                        <img src="./Portfolio/dport-5.svg" alt="" />
                     </div>
                     <p className='text-[#f37126] font-bold py-4'>Exploration and Production.</p>
                     <p>We are strengthening our presence in Exploration and
                     Production (E&P) through our strategic investments,
                     leading to significant production growth in 2023-24.</p>
            </div>
            <div className='w-[65%]'>
                <img src="./Portfolio/dport-10.png" alt="" />
            </div>
       </div>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div className='w-[65%]'>
                <img src="./Portfolio/dport-11.png" alt="" />
            </div>
            <div>
                     <div className='w-[7%]'>
                        <img src="./Portfolio/dport-6.svg" alt="" />
                     </div>
                     <p className='text-[#f37126] font-bold py-4'>Alternative energy and other businesses</p>
                     <p>Committed to India’s Net-Zero aspirations, we are
                     vigorously exploring opportunities in various segments
                     like renewable energy, waste-to-energy, bioenergy,
                     sustainable aviation fuel, green hydrogen and more.</p>
            </div>
            
       </div>
       {/* <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-8 my-4'>
         
           <div>
                     <p className='text-[#f37126] font-bold py-4'>Dear Shareholders,</p>
                     <p >The year 2023-24 for IndianOil, was defined by
                     extraordinary achievements driven by our unwavering
                     dedication to progress and sustainability. My
                     appreciation for our valued stakeholders, especially our
                     customers, shareholders and the IndianOil family, for
                     their unwavering support in this voyage of excellence.
                     We remain committed to upholding the highest
                     standards of corporate governance, transparency,
                     and accountability, ensuring that the interests of our
                     stakeholders are safeguarded at every step.</p>
           </div>
           <div className='gird lg:grid-cols-2 sm:grid-cols-1 gap-4'>
                 <div>
                      <p className='text-4xl text-[#3a3589] font-extrabold'>₹8,66,345<sub>Crore</sub></p>
                      <p>Revenue</p>
                 </div>
                 <div>
                      <p className='text-4xl text-[#3a3589] font-extrabold'>₹39,619<sub>Crore</sub></p>
                      <p>Net profit</p>
                 </div>
           </div>
           
       </div> */}
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
             <div>
                     <p className='text-[#f37126] font-bold py-4'>Dear Shareholders,</p>
                     <p >The year 2023-24 for IndianOil, was defined by
                     extraordinary achievements driven by our unwavering
                     dedication to progress and sustainability. My
                     appreciation for our valued stakeholders, especially our
                     customers, shareholders and the IndianOil family, for
                     their unwavering support in this voyage of excellence.
                     We remain committed to upholding the highest
                     standards of corporate governance, transparency,
                     and accountability, ensuring that the interests of our
                     stakeholders are safeguarded at every step.</p>
             </div>
             <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                  <div className='flex flex-col justify-center'>
                      <p className='lg:text-4xl text-2xl text-[#3a3589] font-extrabold'>₹8,66,345<sub>Crore</sub></p>
                      <p>Revenue</p>
                 </div>
                 <div className='flex flex-col justify-center'>
                      <p className='lg:text-4xl text-2xl text-[#3a3589] font-extrabold'>₹39,619<sub>Crore</sub></p>
                      <p>Net profit</p>
                 </div>
             </div>
       </div>
     
    </div>
  )
}

export default DiversePortfolio
