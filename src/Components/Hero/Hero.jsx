import React from 'react'
import './Hero.css'
// import hand_icon from '../assets/hand_icon.png'
// import arrow_icon from '../assets/arrow.png'
// import hero_image from '../assets/hero_image.png'
import banner_1 from '../assets/eyeglasses-banner-1.jpg'
import banner_2 from '../assets/eyeglasses-banner-2.jpg'
import banner_3 from '../assets/eyeglasses-banner-3.jpeg'

const Hero = () => {
  return (
    <div className='hero'>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active banner">
            <img src={banner_1} alt="..." />
          </div>
          <div className="carousel-item banner">
            <img src={banner_2} alt="..." />
          </div>
          <div className="carousel-item banner">
            <img src={banner_3} alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Hero