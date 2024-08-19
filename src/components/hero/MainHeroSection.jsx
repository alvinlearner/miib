import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSection.css';
import {t1, t2, t3, t4} from './index'
import { useNavigate } from 'react-router-dom';





const MainHeroSection = () => {

  const carouselImages = [
  t2, t3, t1, t4

  ];

  const navigate = useNavigate();

  // Settings for the react-slick carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>

    <div  id="hero">
      <Slider {...carouselSettings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="hero-content">
        <h1 className="catchy-headline calligraphy">
        Welcome to <span>MIB</span>
        </h1>
        <p className="subheadline ">
        Protecting what matters most.
        Explore our insurance solutions for peace of mind and financial security. Get a quote and start securing your future today.</p>
        <a onClick={() => navigate('/contactus')} className="btn-book-now" style={{cursor:'pointer'}}>
          Explore
        </a>
      </div>



    </div>
    </>
  );
};

export default MainHeroSection;
