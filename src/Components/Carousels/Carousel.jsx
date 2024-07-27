import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';



const Carousel = ({carouselItems}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(()=>{
    const interval = setInterval(() => {
        setActiveIndex(prevIndex => (prevIndex + 1) % carouselItems.length);
      }, 3000);
   return () => clearInterval(interval);
  },[])

  return (
    <div className='carousel-container w-[86%] m-auto'>
      <div className="flex flex-col-reverse md:flex-row">
        <div className="img-container md:w-[90%] h-screen relative">
          <AnimatePresence mode='wait'>
            {carouselItems.map((item, index) =>
              index === activeIndex && (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0,scale:0.8}}
                  animate={{ opacity: 1,scale:1}}
                  exit={{ opacity: 0,scale:0.8 }}
                  transition={{ duration: 0.5,ease:"easeInOut" }}
                >
                  <h3 className='text-orange-500 font-bold text-[30px] text-center mt-5'>{item.title}</h3>
                  <img className='w-full md:w-[80%] m-auto object-contain h-[90%]' src={item.imgSrc} alt={item.title} />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
        <div className="tabs-container  md:w-[50px] flex md:flex-col  justify-center align-middle gap-2">
          {carouselItems.map((item, index) => (
            <button key={item.id} onClick={() => setActiveIndex(index)}>
              <img
                src={
                  activeIndex === index
                    ? `./Landing/Group 1.svg`
                    : `./Landing/Group2.png`
                }
                alt={`Tab ${index + 1}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
