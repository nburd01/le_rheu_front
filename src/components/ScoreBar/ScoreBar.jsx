import React, { useEffect } from "react";
import axios from "axios";	
import './ScoreBar.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import '../../assets/stylesheets/tag.css';

const ScoreBar = () => {


	const [scores, setScores] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);


  useEffect(() => {
		getScores();
	},[]);

  const getScores= () => {
    axios('http://localhost:3000/scores')
    .then(response  =>{
      setIsLoading(false);
      console.log("Scores", response.data);

      if (response.data) {
        setScores(response.data);
      } else{
        console.log("An error happened")
      }
    })
    .catch(error => {
      setIsLoading(false);
      console.log('An error occured', error);
    })
  }

  const slideLeft = () => {
    var slider = document.getElementById('scrollmenu');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  const scoreRender = scores.map((score, index) =>
  <div className="uniqueScore"  key={index}>
    <p style={{fontWeight: 'bold'}}>{score.locaux} {score.score_locaux} - {score.score_visiteurs} {score.visiteurs}</p>
    {score.division} {score.equipe} {score.categorie}
  </div>
  )

  return (
    <div className="score-bar">
      <div className="classements">
        <h2>Classements</h2>
      </div>

      <div className="resultats">
          <h2>Résultats</h2>
          <div className="scrollBtn"/>
          <div className="scrollmenu">
            {scoreRender}
          </div>
      </div>
    </div>
  )
};

export default ScoreBar;