import React from 'react'
import { motion } from 'framer-motion';

const LeaderShipTeam = () => {
  return (
    <div className='relative w-[86%] m-auto my-4 overflow-x-hidden'>
      <motion.img initial={{y:"30px",opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}}  src="./Energised Leadership Team.svg" alt="" />
      <div className=''>
     <motion.img initial={{x:"-200px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}}  className='chairman' src="./Energised/el-1.jpg" alt="" />
     <motion.img initial={{x:"200px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}}  className='absolute bottom-[0%] w-full description' src="./Group 13.svg" alt="" />
      </div>
    </div>
  )
}

export default LeaderShipTeam;
