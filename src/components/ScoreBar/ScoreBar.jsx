import React from 'react'
import './ScoreBar.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import '../../assets/stylesheets/tag.css';

export default function ScoreBar() {
  return (
    <div className="score-bar">
    <div className="classements">
        <h2>Classements</h2>
        <h3>Le Rheu- Visiteur</h3>
        <p>3 - 0</p>
    </div>
    <div className="resultats">
        <h2>Résultats</h2>
    </div>
</div>
  )
}
