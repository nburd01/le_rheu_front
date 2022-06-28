import React from 'react'
import '../assets/stylesheets/scorebar.css'

export default function ScoreBar() {
  return (
    <div class="score-bar">
    <div class="classements">
        <h2>Classements</h2>
        {/* <%= image_tag '/assets/logo-le-rheu.png' %> */}
        <h3>Le Rheu- Visiteur</h3>
        <p>3 - 0</p>
    </div>
    <div class="resultats">
        <h2>Résultats</h2>
    </div>
</div>
  )
}
