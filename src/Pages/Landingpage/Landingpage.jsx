import React from 'react'
import Video from '../../Components/video/Video'
import videois from '/Landing/IOCLHOME.webm';
const LandingPage = () => {
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
           
        </div>
      </div>
    </div>
    
    </>
  )
}

export default LandingPage
