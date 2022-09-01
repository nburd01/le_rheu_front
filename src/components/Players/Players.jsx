import React from 'react'
import { useEffect } from 'react'
import Slider from "react-slick";
import './Players.css'
import hexagon_third from '../../assets/img/hexagon_third.svg'
import flecheDroite from "../../assets/img/flecheDroite.svg"
import flecheGauche from "../../assets/img/flecheGauche.svg"
import axios from "axios";
import { API_URL } from '../../stores/api_url';


const Players = () => {

  const [player, setPlayer] = React.useState([]);
  
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

  useEffect(() => {
    getPlayer();
  },[]);

    const getPlayer = () => {
      axios(
          `${API_URL}players`) 
      .then(response => {
          console.log("players", response.data);

          if (response.data) {
              setPlayer(response.data);
          } else {
          console.log("An error happened")
          }
      }) 
      .catch(error => {
          console.log('An error occured', error);
      })
  }

  const playerRender = player.map((player, index) =>

    <div key={index}>
      <div className='player-card'>
        <div className='photo'>
          <img src={player.player_img} alt="player_image"></img>
          <div className='pattern'></div>
        </div>
        <div className='decoration'></div>
        <div className="team__card__info ">
          <div className="team__card__info__content">
            <span className="team__card__info__name">{player.first_name}</span>
            <span className="team__card__info__description">Attaquant</span>
          </div>
          <div className="team__card__info__icon">
          <img src={hexagon_third} alt='test'   style={{ height: 53, width: 36 }}/>
          </div>
        </div>
      </div>

    </div>
  )



  return (
    <div className="container">
      <h2>Squad List</h2>
      <Slider {...settings}>
        {playerRender}
      </Slider>

  </div>
  )
}

export default Players