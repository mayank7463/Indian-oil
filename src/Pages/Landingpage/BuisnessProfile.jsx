import React from 'react'
import Carousel from '../../Components/Carousels/Carousel'
import ReadMoreButton from '../../Components/ReadMoreButton/ReadMoreButton';

const BusinessProfile = () => {
    const carouselItems = [
        { id: 1, title: 'Refining, Pipelines and Marketing', imgSrc: './Portfolio/dport-7.jpg' },
        { id: 2, title: 'Natural Gas', imgSrc: './Portfolio/dport-8.jpg' },
        { id: 3, title: 'Petrochemicals', imgSrc: './Portfolio/dport-9.png' },
        { id: 4, title: 'Exploration and Production.', imgSrc: './Portfolio/dport-10.jpg' },
        { id: 4, title: 'Alternative energy and other businesses', imgSrc: './Portfolio/dport-11.jpg' },
      ];
  return (
    <div>
      <div className='mt-[-50px]'>
        <img className='object-contain m-auto w-[350px] md:w-[600px]' src="./Landing/Group 7.png" alt="" />
        <p className='w-[350px] sm:w-[500px] md:w-[750px] m-auto text-[20px] text-center my-3 mb-0'>To fortify our leadership position in India’s energy landscape,we are currently overseeing various ongoing projects. With a combined capital investment of about H 2.5 Lakh Crore across these projects, we aim to further strengthen our core business.</p>
        <ReadMoreButton/>
      </div>
      <Carousel carouselItems={carouselItems}/>
     
    </div>
  )
}

export default BusinessProfile
