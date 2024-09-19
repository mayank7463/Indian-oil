import React from 'react'

const Valuecreation = ({hindi}) => {
  return (
    <div className=' w-[86%] m-auto my-12 '>
     { !hindi&&<img className='w-full' src="./Landing/Group 11.png" alt="" />}
     { hindi&&<img className='w-full' src="./Hindi/hindi12.svg" alt="" />}
    </div>
  )
}

export default Valuecreation
