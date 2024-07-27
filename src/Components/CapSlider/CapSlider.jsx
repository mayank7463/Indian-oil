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
    <motion.div initial={{ x:"30%", opacity: 0 }}
    whileInView={{x:0, opacity: 1 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: true }}  className=" my-10">
      <h1 className='h2 text-navy my-10'>Our Capitals </h1>
      <div className="row">
        <Slider {...settings}>
          <div className="col-lg-4">
            <Link to={'/Financial-Capital'} className="url-box">
              <figure className='newsCard news-Slide-up fin-up'>
                <img src="./Homepage/fin-cap1.png"  alt="Financial Capital"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Financial Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./Homepage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">Funds available to 
                    Tata Communications which are...</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/Manufactured-and-Intellectual-Capital'} className="url-box">
              <figure className='newsCard news-Slide-up mfd-up special-card'>
                <img src="./Homepage/mfd-intel-cap2.png" alt="Manufactured Capital"/>
                <div className='newsCaption px-4 special-caption'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white  smh m-0'>Manufactured and <br />Intellectual Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./Homepage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">Our digital infrastructure assets, systems and processes...</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/Natural-Capital'} className="url-box">
              <figure className='newsCard news-Slide-up nat-up'>
                <img src="./Homepage/nat-cap3.png"  alt="Intellectual Capital"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white smh m-0'>Natural Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./Homepage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">Earth’s resources...</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/human-capital'} className="url-box">
              <figure className='newsCard news-Slide-up hum-up'>
                <img src="./Homepage/hum-cap4.png" alt="Human Capital"/>
                <div className='newsCaption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title smh text-white m-0'>Human Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./Homepage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex'>
                    <p className="col-10 py-3 px-0">Our talent pool...</p>
                  </div>
                </div>
                <span className="overlay"></span>
              </figure>
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to={'/Social-and-Relationship-Capital'} className="url-box">
              <figure className='newsCard news-Slide-up sr-up special-card'>
                <img src="./Homepage/sr-cap5.png" alt="Social and Relationship Capital"/>
                <div className='newsCaption special-caption px-4'>
                  <div className="d-flex align-items-center justify-content-between cnt-title">
                    <h4 className='newsCaption-title text-white smh m-0'>Social and Relationship<br />Capital</h4>
                    {/* <i className="fas fa-arrow-alt-circle-right special-icon"></i> */}
                    <div className='i-wrap'>
                        <img className='i' src="./Homepage/cta.svg" alt="" />
                    </div>
                  </div>
                  <div className='newsCaption-content d-flex special-content'>
                    <p className="col-10 py-3 px-0">Our partnerships, networks and...</p>
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
  );
};

export default Capslider;
