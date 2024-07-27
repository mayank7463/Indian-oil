import React,{useState} from 'react'
import Video from '../../Components/video/Video'
import videois from '/Landing/IOCLHOME.webm';
import BusinessProfile from './BuisnessProfile';
import Chairmans from './Chairmanmsg';
import Valuecreation from './Valuecreation';
const LandingPage = () => {
  const [activeButton, setActiveButton] = useState("Environment");

  return (
    <>
    <div>
      <Video src={videois}/>
      <div className="p-energy h-screen relative">
        <div className='absolute left-[50%] translate-x-[-50%] top-[5%]'>
          <img src="./Landing/PositiveEnergy.png" alt="" />
          <img className='absolute top-[10%] left-[-8%]' src="./Landing/horizantal-text.png" alt="" />
          <p className='p-abs-pe'>From the canvas of opportunities in the world of Energy, Indian Oil stands as a beacon of commitment towards energy independence and sustainable growth.
            <br />
            <br />
            IndianOil is not just an energy Company. it is a force for positive change, dedicated to fuelling the growth trajectory of an ascendant India!
          </p>
        </div>
<img className='h-full object-cover w-full' src="./Landing/aboutpage-min.png" alt="" />
<img className='absolute bottom-[5%] right-[5%]' src="./Landing/features.png" alt="" />

      </div>
      <div className='op-highlights h-screen'>
        <div className="tabular-contents">
        <div className="esg-strategy mt-4">
      <div className="flex flex-wrap gap-8 justify-center">
        <button
          onClick={() => setActiveButton('Environment')}
          className={`tab rounded-md font-700 text-black bg-[#ed1c25] shadow-2xl px-7 py-2 w-fit pl-10 hover:pl-3 transition-all ease-in-out cursor-pointer hover:bg-[#da1e27] hover:text-blue-500 text-lg hover:rounded-lg ${
            activeButton === 'Environment' ? 'active' : ''
          }`}
        >
          Environment
        </button>
        <button
          onClick={() => setActiveButton('Social')}
          className={`tab rounded-md font-700 text-white bg-[#ed1c25] shadow-2xl px-7 py-2 w-fit pl-10 hover:pl-3 transition-all ease-in-out cursor-pointer hover:bg-[#da1e27] text-lg hover:rounded-lg ${
            activeButton === 'Social' ? 'active' : ''
          }`}
        >
          Social
        </button>
        <button
          onClick={() => setActiveButton('Governance')}
          className={`tab rounded-md font-700 text-white bg-[#ed1c25] shadow-2xl px-7 py-2 w-fit pl-10 hover:pl-3 transition-all ease-in-out cursor-pointer hover:bg-[#da1e27] text-lg hover:rounded-lg ${
            activeButton === 'Governance' ? 'active' : ''
          }`}
        >
          Governance
        </button>
        <button
          onClick={() => setActiveButton('Governance')}
          className={`tab rounded-md font-700 text-white bg-[#ed1c25] shadow-2xl px-7 py-2 w-fit pl-10 hover:pl-3 transition-all ease-in-out cursor-pointer hover:bg-[#da1e27] text-lg hover:rounded-lg ${
            activeButton === 'Governance' ? 'active' : ''
          }`}
        >
          Governance
        </button>
      </div>
      
      <div style={{ display: activeButton === 'Environment' ? 'block' : 'none' }}>
        <div className="flex flex-wrap gap-8 justify-center">
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            ₹ 6,000 cr+
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Green asset book* as of
            31st March, 2024
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            12 LEED/IGBC
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Certified offices
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            7%+
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Share of renewable power used by the Bank is from renewable sources
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            2.6x
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Renewable power used compared to previous year<sup>$</sup>
            </div>
           </div>
        </div>
        </div>
      <div style={{ display: activeButton === 'Social' ? 'block' : 'none' }}>
      <div className="flex flex-wrap gap-8 justify-center">
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold ">
            22% <span className="bg-red-800 text-white p-1 px-[4px] rounded-[50%] text-[10px]">&#9653;</span>
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Green asset book* as of
            31st March, 2024
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            26.2%
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Gender diversity at the Bank
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            15%
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Of the Bank’s workforce operates out of six
ISO 45001:2018 certified offices
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            ~27 lakh
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Active microcredit women borrowers for the Group as of 31st March, 2024
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            ₹ 320 cr+
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Total CSR expenditure
(Group)<sup>##</sup>
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            8.2 lakh+
          </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            CSR beneficiaries for the Group
            </div>
           </div>
        </div>
      </div>
      <div style={{ display: activeButton === 'Governance' ? 'block' : 'none' }}>
      <div className="flex flex-wrap gap-8 justify-center">
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            64%
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Independence of the board<sup>&</sup>
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            27%
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Board gender diversity<sup>&</sup>
            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            ISO 27001:2013
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Certified cybersecurity operations            </div>
           </div>
           <div className="data-container-esg">
            <div className="text-red-800 text-[22px] font-bold">
            23%
            </div>
            <div className="w-[80%] h-[2px] bg-red-800">

            </div>
            <div className="text-[14px]">
            Purchases by value from MSME vendors at the Bank
            </div>
           </div>
        </div>
      </div>
         </div>
        </div>
      </div>
      <BusinessProfile/>
      <Chairmans/>
      <Valuecreation/>
    </div>
    
    </>
  )
}

export default LandingPage
