import React from 'react'
import Carousel from '../../Components/Carousels/Carousel'


const BusinessProfile = () => {
  const carouselItems = [
    { 
        id: 1, 
        title: 'Refining, Pipelines and Marketing', 
        imgSrc: './Portfolio/dport-7.jpg', 
        description: `As one of India's leading downstream oil and gas companies, we continue to broaden our range of offerings and introduce innovative energy solutions.
        Our Pipelines Division reached a major milestone in 2023-24, with the completion of the largest-ever pipeline expansion, showcasing our dedication
        to strengthening our infrastructure and extending our coverage. Concurrently, we are enhancing our petroleum marketing and distribution network to fortify
        our leadership and gain market share.` 
    },
    { 
        id: 2, 
        title: 'Natural Gas', 
        imgSrc: './Portfolio/dport-8.jpg', 
        description: `Foraying into the natural gas domain since 2004, we have emerged as a major player, investing in LNG sourcing, import terminals, cross-country pipelines and
        City Gas Distribution (CGD) networks. With a sharper focus on reliability and sustainability, we are committed to expanding our reach and ensuring a steady supply
        of clean energy nationwide.` 
    },
    { 
        id: 3, 
        title: 'Petrochemicals', 
        imgSrc: './Portfolio/dport-9.png', 
        description: `Driven by our ambition to lead the petrochemical market in India, we are intensifying our downstream operations and expanding globally. With significant
        investments planned, we aim to leverage existing refinery streams for petrochemical production, positioning ourselves among Southeast Asia’s front-runners in the long run.` 
    },
    { 
        id: 4, 
        title: 'Exploration and Production', 
        imgSrc: './Portfolio/dport-10.jpg', 
        description: `We are strengthening our presence in Exploration and Production (E&P) through our strategic investments, leading to significant production growth in 2023-24.` 
    },
    { 
        id: 5, 
        title: 'Alternative Energy and Other Businesses', 
        imgSrc: './Portfolio/dport-11.jpg', 
        description: `Committed to India’s Net-Zero aspirations, we are vigorously exploring opportunities in various segments like renewable energy, waste-to-energy, bioenergy,
        sustainable aviation fuel, green hydrogen and more.` 
    }
];


  return (
    <div className=''>
    <div>
      <div className='pt-5'>
        <img className='object-contain m-auto w-[350px] md:w-[600px]' src="./Landing/Group 7.png" alt="" />
        <p className='w-[350px] sm:w-[500px] md:w-[740px] m-auto text-[21px] text-center my-3 mb-0'>To fortify our leadership position in India’s energy landscape,we are currently overseeing various ongoing projects. With a combined capital investment of about ₹ 2.5 Lakh Crore across these projects, we aim to further strengthen our core business.</p>
      </div>
      <Carousel carouselItems={carouselItems}/>
    </div>
    </div>
  )
}

export default BusinessProfile
