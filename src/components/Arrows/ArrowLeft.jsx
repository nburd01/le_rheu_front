import React from 'react'
import flecheGauche from "../../assets/img/flecheGauche.svg"

export const ArrowLeft = () => {
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <img className="leftArrow" src={flecheGauche} alt="prevArrow" {...props} />
      );
  return (
    <div>ArrowLeft</div>
  )
}
