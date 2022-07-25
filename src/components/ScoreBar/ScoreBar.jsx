import React from 'react'
import './ScoreBar.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import '../../assets/stylesheets/tag.css';
import Scores from  "../../json/scores.json";

export default function ScoreBar() {
  return (
    <div className="score-bar">
    <div className="classements">
    <h2>Classements</h2>
      <div>
        {
          Scores && Scores.map (
            score => {
              return(
                <div>
                  <h3>{score.locaux}  - {score.visiteurs}</h3>
                  <p>{score.score_locaux} - {score.score_visiteurs}</p>
                </div>
              )
            }
          ) 
        }
      </div>
    </div>
    <div className="resultats">
        <h2>Résultats</h2>
    </div>
</div>
  )
}
