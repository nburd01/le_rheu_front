import React from 'react'
import Slider from "react-slick";
import './Players.css'

const Players = () => {
  const settings = {

    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="container">
      <Slider {...settings}>
      <div className='flex'>
        <div className='photo'></div>
        <div className='decoration'></div>
      </div>
      

      <div className='flex'>
        <div className='decoration'></div>
      </div>
      

      <div className='flex'>
        <div className='decoration'></div>
      </div>
      <div className='flex'>
        <div className='decoration'></div>
      </div>
      <div className='flex'>
        <div className='decoration'></div>
      </div>
      <div className='flex'>
        <div className='decoration'></div>
      </div>
    </Slider>
  </div>
  )
}

export default Players