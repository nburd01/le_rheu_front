import React from 'react'
import './HeaderHome.css'
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';



export default function HeaderHome() {
  return (
    <div className="header-home">
        <div className="block-infos">
            <h1>Les résultats du weekend</h1>
            <p>Toutes les informations à retenir de ce weekend</p>
        </div>
    </div>
  )
}
