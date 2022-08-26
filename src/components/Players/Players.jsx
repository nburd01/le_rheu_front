import React from 'react'
import Slider from "react-slick";
import './Players.css'
import RightArrow from "../../assets/img/rightArrow.svg"
import LeftArrow from "../../assets/img/leftArrow.svg"

const Players = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img className="leftArrow" src={LeftArrow} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img className="rigthArrow" src={RightArrow} alt="Arrow" {...props} />
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
  };
  return (
    <div className="container">
      <Slider {...settings}>
      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
        <div class="team__card__info ">
          <div class="team__card__info__content">
            <span class="team__card__info__name">Jean Dupont</span>
            <span class="team__card__info__description">Wielrennen</span>
          </div>
          <div class="team__card__info__icon">
          </div>
        </div>
      </div>
      
      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div class="team__card__info ">
          <div class="team__card__info__content">
            <span class="team__card__info__name">Jean Dupont</span>
            <span class="team__card__info__description">Wielrennen</span>
          </div>
        </div>
      </div>
      
      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div class="team__card__info ">
          <div class="team__card__info__content">
            <span class="team__card__info__name">Jean Dupont</span>
            <span class="team__card__info__description">Gardien de but</span>
          </div>
        </div>
      </div>

      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div class="team__card__info ">
          <div class="team__card__info__content">
            <span class="team__card__info__name">Jean Dupont</span>
            <span class="team__card__info__description">Défenseur</span>
          </div>
        </div>
      </div>

      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div class="team__card__info ">
          <div class="team__card__info__content">
            <span class="team__card__info__name">Jean Dupont</span>
            <span class="team__card__info__description">Milieu</span>
          </div>
        </div>
      </div>

      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div class="team__card__info ">
          <div class="team__card__info__content">
            <span class="team__card__info__name">Jean Dupont</span>
            <span class="team__card__info__description">Attquant</span>
          </div>
        </div>
      </div>
    </Slider>
  </div>
  )
}

export default Players