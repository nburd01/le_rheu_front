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



			
{/* <svg width="35" height="35" class="team__card__info__icon">
			<use xlink:href="/build/svg/symbol/svg/sprite.symbol.svg?v=2#icon-cycling"></use>
</svg> */}
					



    </Slider>
  </div>
  )
}

export default Players