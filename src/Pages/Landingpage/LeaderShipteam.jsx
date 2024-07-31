import React from 'react'
import { motion } from 'framer-motion';
import ReadMoreButton from '../../Components/ReadMoreButton/ReadMoreButton';
import { Link } from 'react-router-dom';

const LeaderShipTeam = () => {
  return (
     <div className='my-16'>
         <div className='relative w-[86%] m-auto my-4 overflow-x-hidden'>
      <motion.img initial={{y:"30px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}}  src="./Energised Leadership Team.svg" alt="" />
      <div className=''>
     <motion.img initial={{x:"-200px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}}  className='chairman' src="./Energised/el-1.jpg" alt="" />
     <motion.img initial={{x:"200px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}}  className='absolute bottom-[0%] w-full description' src="./Energised/el-2.png" alt="" />
      </div>
    </div>
    <div className='flex justify-center py-8'>
       <Link to='/board-profile'><ReadMoreButton/></Link>
    </div>
     </div>
  )
}

export default LeaderShipTeam;
