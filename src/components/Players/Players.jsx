import React from 'react'
import Slider from "react-slick";
import './Players.css'
import hexagon_third from '../../assets/img/hexagon_third.svg'
import flecheDroite from "../../assets/img/flecheDroite.svg"
import flecheGauche from "../../assets/img/flecheGauche.svg"

const Players = () => {
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img className="leftArrow" src={flecheGauche} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img className="rigthArrow" src={flecheDroite} alt="Arrow" {...props} />
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive:  [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true
				}
			},
			{
				breakpoint: 750,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 520,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
  };
  return (
    <div className="container">
      <h2>Squad List</h2>
      <Slider {...settings}>
      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
        <div className="team__card__info ">
          <div className="team__card__info__content">
            <span className="team__card__info__name">Jean Dupont</span>
            <span className="team__card__info__description">Attaquant</span>
          </div>
          <div className="team__card__info__icon">
          <img src={hexagon_third} alt='test'   style={{ height: 53, width: 36 }}/>
          </div>
        </div>
      </div>
      
      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div className="team__card__info ">
          <div className="team__card__info__content">
            <span className="team__card__info__name">Jean Dupont</span>
            <span className="team__card__info__description">Milieu</span>
          </div>
        </div>
      </div>
      
      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div className="team__card__info ">
          <div className="team__card__info__content">
            <span className="team__card__info__name">Jean Dupont</span>
            <span className="team__card__info__description">Gardien de but</span>
          </div>
        </div>
      </div>

      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div className="team__card__info ">
          <div className="team__card__info__content">
            <span className="team__card__info__name">Jean Dupont</span>
            <span className="team__card__info__description">Défenseur</span>
          </div>
        </div>
      </div>

      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div className="team__card__info ">
          <div className="team__card__info__content">
            <span className="team__card__info__name">Jean Dupont</span>
            <span className="team__card__info__description">Milieu</span>
          </div>
        </div>
      </div>

      <div className='player-card'>
        <div className='photo'>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
         <div className="team__card__info ">
          <div className="team__card__info__content">
            <span className="team__card__info__name">Jean Dupont</span>
            <span className="team__card__info__description">Attquant</span>
          </div>
        </div>
      </div>
    </Slider>
  </div>
  )
}

export default Players