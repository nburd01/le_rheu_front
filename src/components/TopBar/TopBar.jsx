import React, { useState } from 'react'
import './Topbar.css';
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import SignOut from '../SignOut/SignOut';

export default function TopBar() {

const [toggleMenu, SetToggleMenu] = useState(false)
const toggleNav = () => {
    SetToggleMenu(!toggleMenu)
}

  return (
    <div class="topbar">
        <div class="top">
            <nav class="menu">
                <a href="/le_rheu_front/login">Se connecter</a>
                <a href="/le_rheu_front/connection">Nous rejoindre</a>
                <SignOut />
            </nav>
            <div class="logo">
                <a href="/le_rheu_front/">
                    <img className="lerheu-logo" src={require("../../assets/img/logo-leRheu.png")} alt={"S.C. Le Rheu"}/>
                </a>
            </div>
            <ul class ="nav-links">
                <li>
                <a href="/le_rheu_front/disciplines">Nos disciplines</a>
                </li>
                <li>
                    <a href="/le_rheu_front/contact">Nous contacter</a>
                </li>
                <li>
                    <a href="/le_rheu_front/account">Mon compte</a>
                </li>
            </ul>
            <div class="burger" onClick={toggleNav}>
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>

        </div>
        <div class="disciplines">
            <a href="#">Football</a>
            <a href="#">Futsal</a>
            <a href="#">Beach Soccer</a>
            <a href="#">Fitfoot</a>
            <a href="#">Féminines</a>
        </div>
        <div>
            <nav>
                {toggleMenu &&(
                <ul className="list">
                    <li className="items"><a href="/le_rheu_front/login">Se connecter</a></li>
                    <li className="items"><a href="/le_rheu_front/connection">Nous rejoindre</a></li>
                    <li className="items"><a href="/le_rheu_front/disciplines">Nos disciplines</a></li>
                    <li className="items"><a href="/le_rheu_front/contact">Nous contacter</a></li>
                    <li className="items"><a href="/le_rheu_front/MyProfile">Mon compte</a></li>
                </ul>
                )}
            </nav>
        </div>
    </div>
  )
}
