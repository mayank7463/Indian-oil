import React from 'react'
import Carousel from '../../Components/Carousels/Carousel'
import ReadMoreButton from '../../Components/ReadMoreButton/ReadMoreButton';
import { Link } from 'react-router-dom';

const BusinessProfile = () => {
  const carouselItems = [
    { id: 1, title: 'Refining, Pipelines and Marketing', imgSrc: './Portfolio/dport-7.jpg', description: 'As one of India\'s leading downstream oil and gas companies...' },
    { id: 2, title: 'Natural Gas', imgSrc: './Portfolio/dport-8.jpg', description: 'Foraying into the natural gas domain since 2004, we have emerged as a major player...' },
    { id: 3, title: 'Petrochemicals', imgSrc: './Portfolio/dport-9.png', description: 'Driven by our ambition to lead the petrochemical market in India...' },
    { id: 4, title: 'Exploration and Production', imgSrc: './Portfolio/dport-10.jpg', description: 'We are strengthening our presence in Exploration and Prodution...' },
    { id: 5, title: 'Alternative Energy and Other Businesses', imgSrc: './Portfolio/dport-11.jpg', description: 'Committed to India’s Net-Zero aspirations...' }
];

  return (
    <div>
    <div>
      <div className='pt-5'>
        <img className='object-contain m-auto w-[350px] md:w-[600px]' src="./Landing/Group 7.png" alt="" />
        <p className='w-[350px] sm:w-[500px] md:w-[750px] m-auto text-[20px] text-center my-3 mb-0'>To fortify our leadership position in India’s energy landscape,we are currently overseeing various ongoing projects. With a combined capital investment of about H 2.5 Lakh Crore across these projects, we aim to further strengthen our core business.</p>
      </div>
      <Carousel carouselItems={carouselItems}/>
    </div>
    <div className='flex justify-center'>
       <Link to="/diverse-portfolio"><ReadMoreButton/></Link>
    </div>
    </div>
  )
}

export default BusinessProfile
