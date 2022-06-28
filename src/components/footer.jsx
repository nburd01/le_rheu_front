import React from 'react';
import '../assets/stylesheets/footer.css';


export default function Footer() {
  return (
    <footer>
    <div class="container container-end">
        <div class="column-block">
            <div class="footer-column">
                <h4>Le Club</h4>
                <ul>
                    <li> 
                        <a href="#">Le mot du Président</a>
                    </li>
                    <li>
                        <a href="#">Ils font le club</a>
                    </li>
                    <li>
                        <a href="#">Les infrastructures</a>
                    </li>
                    <li>
                        <a href="#">Le palmarès</a>
                    </li>
                    <li>
                        <a href="#">Communauté</a>
                    </li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Les Actualités</h4>
                <ul>
                    <li>
                    <a href="#">Actualités</a>
                    </li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>Partenaires</h4>
                <ul>
                    <li>
                    <a href="#">Partenaires officiels</a>
                    </li>
                    <li>
                    <a href="#">Sponsors officiels</a>
                    </li>
                    <li>
                    <a href="#">Fournisseurs officiels</a>
                    </li>
                </ul>
            </div>
            <div class="footer-column">
                <h4>La boutique</h4>
                <ul>
                    <li>
                    <a href="#">Nos produits</a>
                    </li>
                </ul>
            </div>
             <div class="footer-column">
                <h4>Nous contacter</h4>
                <ul>
                    <li>
                    <a href="#">Nous contacter</a>
                    </li>
                    <li>
                    <a href="#">Inscription à la newsletter</a>
                    </li>
                    <li>
                    <a href="#">Venir au club</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="logo-div">
            <img class="logo" src="../assets/img/logo-leRheu.png"/>
        </div>
    </div>
</footer>
  )
}
