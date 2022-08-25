import React from 'react';
import './footer.css';
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
    <div className="container container-end">
        <div className="column-block">
            <div className="footer-column">
                <h4>Le Club</h4>
                <ul>
                    <li> 
                        <Link to="/">Le mot du Président</Link>
                    </li>
                    <li>
                        <Link to="/">Ils font le club</Link>
                    </li>
                    <li>
                        <Link to="/">Les infrastructures</Link>
                    </li>
                    <li>
                        <Link to="/">Le palmarès</Link>
                    </li>
                    <li>
                        <Link to="/">Communauté</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Les Actualités</h4>
                <ul>
                    <li>
                        <Link to="/">Actualités</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>Partenaires</h4>
                <ul>
                    <li>
                        <Link to="/">Partenaires officiels</Link>
                    </li>
                    <li>
                        <Link to="/">Sponsors officiels</Link>
                    </li>
                    <li>
                        <Link to="/">Fournisseurs officiels</Link>
                    </li>
                </ul>
            </div>
            <div className="footer-column">
                <h4>La boutique</h4>
                <ul>
                    <li>
                        <Link to="/">Nos produits</Link>
                    </li>
                </ul>
            </div>
             <div className="footer-column">
                <h4>Nous contacter</h4>
                <ul>
                    <li>
                        <Link to="/contact">Nous contacter</Link>
                    </li>
                    <li>
                        <Link to="/">Inscription à la newsletter</Link>
                    </li>
                    <li>
                        <Link to="/">Venir au club</Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="logo-div">
            <img className='logo-leRheu' src={require('../../assets/img/logo-leRheu.png')} alt={"logo le Rheu"}  />
        </div>
    </div>
</footer>
  )
}
