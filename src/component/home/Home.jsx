import React, { useRef } from "react";
import homeimg from "../../assets/home/home3.jpg";
import "./Home.css";
import Review from "../testimonial/Review";

import { Link } from "react-router-dom";
import Homefeature from "../homefeature/Homefeature";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const slideContent = (
    <div className="home">
      <img src={homeimg} alt="home" />
      <div className="homeContent container section__container header__container" id="home">
        <div className="textDiv">
          
        </div>
        
<div></div><div></div><div></div><div></div>
<center><Link to="/themePackage">
             <button class="btnn home-btn">Book Now</button>
           </Link></center>
<div></div>
      </div>
    </div>
  );

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      <section className="carousel-section">
        <Slider {...settings} ref={sliderRef}>
          <div>{slideContent}</div>
          <div>{slideContent}</div>
          <div>{slideContent}</div>
        </Slider>
        {/* Carousel controls */}
        <div className="carousel-controls">
          <button className="carousel-control-prev" type="button" onClick={prevSlide}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={nextSlide}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      
      
      <section>
        <Review />
      </section>
      <section>
        <Homefeature />
      </section>
    </>
  );
}

export default Home;
