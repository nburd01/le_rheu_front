import React, { useState } from 'react'
import './Topbar.css';
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import SignOut from '../../pages/Connect/SignOut';
import SignIn from '../../pages/Connect/SignIn';
import SignUp from '../../pages/Connect/SignUp';

export default function TopBar() {

const loggedIn = window.localStorage.getItem("isLoggedIn");
const [toggleMenu, SetToggleMenu] = useState(false)
const toggleNav = () => {
    SetToggleMenu(!toggleMenu)
}

  return (
    <div className="topbar">
        <div className="top">
            <div className="menu">
                {loggedIn 
                ? <SignOut/>
                : <SignIn/>}
            </div>
            <div className="logo">
                <a href="/le_rheu_front/">
                    <img className="lerheu-logo" src={require("../../assets/img/logo-leRheu.png")} alt={"S.C. Le Rheu"}/>
                </a>
            </div>
            <div className='top-link'>
                <ul className ="nav-links">
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
            </div>
            <div className="burger" onClick={toggleNav}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
        {toggleMenu &&(
        <div>
            <nav>
                
                <ul className="list">
                    <li className="items"><a href="/le_rheu_front/login">Se connecter</a></li>
                    <li className="items"><a href="/le_rheu_front/connection">Nous rejoindre</a></li>
                    <li className="items"><a href="/le_rheu_front/disciplines">Nos disciplines</a></li>
                    <li className="items"><a href="/le_rheu_front/contact">Nous contacter</a></li>
                    <li className="items"><a href="/le_rheu_front/MyProfile">Mon compte</a></li>
                </ul>
            </nav>
        </div>
        )}
        <div className="disciplines">
            <a href="#">Football</a>
            <a href="#">Futsal</a>
            <a href="#">Beach Soccer</a>
            <a href="#">Fitfoot</a>
            <a href="#">Féminines</a>
        </div>
    </div>
  )
}
