import React from 'react';
import './CapSlider.css';
// import { a } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { TextAnimation01 } from '../../Animation/TextAnimation';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Capslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992, // Medium devices (tablets, 768px and up)
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576, // Small devices (landscape phones, 576px and up)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className=''>
         <motion.div initial={{ x:"30%", opacity: 0 }}
    whileInView={{x:0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: true }}  className=" my-16">
      <h1 className='h2 text-navy my-10 text-3xl font-extrabold text-center text-[#418261]'>Our Capitals </h1>
      <div className="row">
        <Slider {...settings}>
          <div className="col-lg-4">
            <Link to={'/financial-capital'} className="url-box">
              <figure className='newsCard news-Slide-up fin-up'>
                <img src="./CapImage/fc.webp"  alt="Financial Capital"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Financial Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./CapImage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">IndianOil LPG Bottling plant in Digboi, Assam</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/manufactured-capital'} className="url-box">
              <figure className='newsCard news-Slide-up mfd-up special-card'>
                <img src="./CapImage/mcaps.webp" alt="Manufactured Capital"/>
                <div className='newsCaption px-4 special-caption'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white  smh m-0'>Manufactured  Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                    <img className='i' src="./CapImage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">IndianOil Guwahati Terminal</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/intellectual-capital'} className="url-box">
              <figure className='newsCard news-Slide-up nat-up'>
                <img src="./CapImage/ic.webp"  alt="Intellectual Capital"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white smh m-0'>Intellectual Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                    <img className='i' src="./CapImage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">IndianOil Laying thrust on Alternative Sources of Energy</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/social-capital'} className="url-box">
              <figure className='newsCard news-Slide-up hum-up'>
                <img src="./CapImage/srcaps.webp" alt="Social and Relationship"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Social and Relationship <br /> Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                    <img className='i' src="./CapImage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">IndianOil-Army Center of Excellence and Wellness Tinsukia,Assam</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/Human-Capital'} className="url-box">
              <figure className='newsCard news-Slide-up hum-up'>
                <img src="./CapImage/hc.webp" alt="Human Capital"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Human Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                    <img className='i' src="./CapImage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">Team IndianOil, the true asset that catalyses India's growth</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/natural-capital'} className="url-box">
              <figure className='newsCard news-Slide-up sr-up special-card'>
                <img src="./CapImage/ncaps.webp" alt="Social and Relationship Capital"/>
                <div className='newsCaption special-caption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white smh m-0'>Natural Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right special-icon"></i> */}
                    <div className='i-wrap'>
                    <img className='i' src="./CapImage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex special-content'>
                    <p className="col-10 py-3 px-0">Digboi Centenary Park, Assam</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>

          {/* Add more cards as needed */}
        </Slider>
      </div>
    
    </motion.div>
    </div>
  );
};

export default Capslider;
