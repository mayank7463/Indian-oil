import React from 'react'
import { motion } from 'framer-motion';
import ReadMoreButton from '../../Components/ReadMoreButton/ReadMoreButton';
import { Link } from 'react-router-dom';


const Chairmans = () => {
  return (
    <div className='my-16'>
          <div className='w-[86%] m-auto relative h-screen overflow-x-hidden'>
                <motion.img initial={{x:"-200px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.7,ease:"easeInOut"}}  src="./Landing/headingcharirmanmsg.png" alt="" />
                <motion.img initial={{x:"200px",opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:0.5,ease:"easeInOut"}} className='absolute top-[15%] chairman' src="./Landing/chairmanmsg.png" alt="" />
                
          </div>
          <div className='flex justify-center'>
                  <Link to='/chairman-messages'><ReadMoreButton/></Link>
          </div>
    </div>
  )
}

export default Chairmans
