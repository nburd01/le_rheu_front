import React from "react";	
import './ScoreBar.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import '../../assets/stylesheets/tag.css';
import ImageSlider from "./ImageSlider";

const ScoreBar = () => {

  return (
    <div className="scoreBar">
         <div className="classements">
        <h2>Classements</h2>
      </div>
      <div className="resultats"></div>
        <ImageSlider />
    </div>
  
)};

export default ScoreBar;