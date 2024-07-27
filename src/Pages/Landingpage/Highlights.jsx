import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Highlights = () => {
  const [activeButton, setActiveButton] = useState('Operational');

  return (
    <div className="op-highlights h-screen bg-cover bg-center">
      <div className="tabular-contents">
        <div className="strategy mt-4">
          <div className="flex flex-wrap gap-8 justify-center">
            <button
              onClick={() => setActiveButton('Operational')}
              className={`tab rounded-full font-bold text-white bg-blue-600 shadow-2xl px-8 py-3 w-fit transition-all ease-in-out cursor-pointer hover:bg-blue-700 text-lg hover:scale-110 ${
                activeButton === 'Operational' ? 'active' : ''
              }`}
            >
              Operational
            </button>
            <button
              onClick={() => setActiveButton('Financial')}
              className={`tab rounded-full font-bold text-white bg-green-600 shadow-2xl px-8 py-3 w-fit transition-all ease-in-out cursor-pointer hover:bg-green-700 text-lg hover:scale-110 ${
                activeButton === 'Financial' ? 'active' : ''
              }`}
            >
              Financial
            </button>
            <button
              onClick={() => setActiveButton('Environmental')}
              className={`tab rounded-full font-bold text-white bg-red-600 shadow-2xl px-8 py-3 w-fit transition-all ease-in-out cursor-pointer hover:bg-red-700 text-lg hover:scale-110 ${
                activeButton === 'Environmental' ? 'active' : ''
              }`}
            >
              Environmental
            </button>
            <button
              onClick={() => setActiveButton('Social')}
              className={`tab rounded-full font-bold text-white bg-yellow-600 shadow-2xl px-8 py-3 w-fit transition-all ease-in-out cursor-pointer hover:bg-yellow-700 text-lg hover:scale-110 ${
                activeButton === 'Social' ? 'active' : ''
              }`}
            >
              Social
            </button>
          </div>

          <div className={activeButton === 'Operational' ? 'block' : 'hidden'}>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="data-container">
                <div className="text-blue-800 text-2xl font-bold">Operational Data 1</div>
                <div className="w-4/5 h-[2px] bg-blue-800"></div>
              </div>
              <div className="data-container">
                <div className="text-blue-800 text-2xl font-bold">Operational Data 2</div>
                <div className="w-4/5 h-[2px] bg-blue-800"></div>
              </div>
            </div>
          </div>

          <div className={activeButton === 'Financial' ? 'block' : 'hidden'}>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="data-container">
                <div className="text-green-800 text-2xl font-bold">Financial Data 1</div>
                <div className="w-4/5 h-[2px] bg-green-800"></div>
              </div>
              <div className="data-container">
                <div className="text-green-800 text-2xl font-bold">Financial Data 2</div>
                <div className="w-4/5 h-[2px] bg-green-800"></div>
              </div>
            </div>
          </div>

          <div className={activeButton === 'Environmental' ? 'block' : 'hidden'}>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="data-container">
                <div className="text-red-800 text-2xl font-bold">Environmental Data 1</div>
                <div className="w-4/5 h-[2px] bg-red-800"></div>
              </div>
              <div className="data-container">
                <div className="text-red-800 text-2xl font-bold">Environmental Data 2</div>
                <div className="w-4/5 h-[2px] bg-red-800"></div>
              </div>
            </div>
          </div>

          <div className={activeButton === 'Social' ? 'block' : 'hidden'}>
            <div className="flex flex-wrap gap-8 justify-center">
              <div className="data-container">
                <div className="text-yellow-800 text-2xl font-bold">Social Data 1</div>
                <div className="w-4/5 h-[2px] bg-yellow-800"></div>
              </div>
              <div className="data-container">
                <div className="text-yellow-800 text-2xl font-bold">Social Data 2</div>
                <div className="w-4/5 h-[2px] bg-yellow-800"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <motion.img
        className="absolute bottom-[5%] right-[5%]"
        src="./Landing/features.png"
        alt=""
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Highlights;
