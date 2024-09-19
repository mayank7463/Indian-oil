import React,{useState} from 'react'
import Video from '../../Components/video/Video'
import videois from '/Landing/IOCLHOME.webm';
import BusinessProfile from './BuisnessProfile';
import Chairmans from './Chairmanmsg';
import Valuecreation from './Valuecreation';
import Capslider from '../../Components/CapSlider/CapSlider';
import LeaderShipTeam from './LeaderShipteam';
import Highlights from './Highlights'
import Financial from '../../Components/Financial/Financial';
import ReadMoreButton from '../../Components/ReadMoreButton/ReadMoreButton';
import { Link } from 'react-router-dom';
import ChairmansHindi from './ChairmanmsgHindi';
import LeaderShipTeamHindi from './LeadershipTeamHindi';


const LandingPage = ({hindi}) => {


  return (
    <>
    <div className='overflow-x-hidden w-full'>
      <Video src={videois}/>
      {!hindi&&<div className="p-energy relative">
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
<div className='absolute bottom-[5%] left-[45%]'>
    <Link to='/positive-energy'><ReadMoreButton/></Link>
</div>

      </div>}
      {
        hindi&& 
        <div>
        <img className='w-full object-contain' src="/Hindi/hindio1.svg" alt="" />
        </div>
        }
      {/* <Highlights/>  */}
      <BusinessProfile hindi={hindi}/>
      {!hindi&&<Chairmans/>}
      {hindi&&<ChairmansHindi/>}
    { !hindi&& <LeaderShipTeam/>}
    {hindi&& <LeaderShipTeamHindi/>}
      <Valuecreation hindi={hindi}/>
      <div className='w-[86%] m-auto'>
      <Capslider/>
      <Financial/>
      
      </div>
     
    </div>
    
    </>
  )
}

export default LandingPage
