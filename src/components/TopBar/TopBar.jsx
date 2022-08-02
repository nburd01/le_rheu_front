import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import './Topbar.css';
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import axios from "axios";
import SignOut from '../../pages/SignIn/SignOut';
import { API_URL } from '../../stores/api_url';
import {jwtAtom, authorizationAtom, userAtom} from '../../stores/auth'
import { useAtom, useAtomValue } from 'jotai';


const TopBar = () => {

    const loggedIn = window.localStorage.getItem("isLoggedIn");
    const jwt = useAtomValue(jwtAtom);
    const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);
    const [id, setId] = useAtom(userAtom);

    // const [id, setId] = useAtom(userAtom);


    const navigate = useNavigate();
    const [toggleMenu, SetToggleMenu] = useState(false)
    const toggleNav = () => {
        SetToggleMenu(!toggleMenu)
    }

    const [isLoading, setIsLoading] = React.useState(true);
    const [discipline, setDiscipline] = React.useState([]);


    useEffect(() => {
        getDiscipline();
            },[]);

        const getDiscipline = () => {
            axios(
                'http://localhost:3000/disciplines/') 
            .then(response => {
                setIsLoading(false);
                console.log("disciplines", response.data);

                if (response.data) {
                    setDiscipline(response.data);
                } else {
                        console.log("An error happened")
                }
            }) 
            .catch(error => {
                setIsLoading(false);
                console.log('An error occured', error);
            })
        }

        const logout = () =>{
            fetch(`${API_URL}users/sign_out`, {
              method: 'delete',
              headers: {
                'Authorization': authorizationapp,
                'Content-Type': 'application/json'
              }
            })
            .then((response) => {return response.json()})
            .then((response) => {
              setAuthorizationapp('');
              setId('');
              Cookies.set('id', "")
              Cookies.set('token', "")
              navigate('/')
            })
          }

        const disciplineRender = discipline.map((discipline) => 
        <nav>

            <Link to ={discipline.discipline_root} className="discipline">{discipline.name}</Link>  
        </nav>
        );

        const disciplinesRendering = isLoading ? "Loading"  : disciplineRender

    return (
        <div className="topbar">
            <div className="top">

                
                <div className="menu">

                <ul>
                {authorizationapp === ''?
                    <>
                    <li><Link to='/register'>S'inscrire</Link></li>
                    <li><Link to='/login'>Se Connecter</Link></li> 
                    </>
                    :
                    <>

                    <li><Link to={'/profil/' + id}>Profil</Link></li>
                    <li onClick={logout}>Se Déconnecter</li>
                    </>
         
                }
                </ul>
                </div>
                
                <div className="logo">
                    <a href="/le_rheu_front/">
                        <img className="lerheu-logo" src={require("../../assets/img/logo-leRheu.png")} alt={"S.C. Le Rheu"}/>
                    </a>
                </div>
                <div className='top-link'>
                    <ul className ="nav-links">
                        {/* <img src="src/assets/img/blog1.jpg" alt="test" /> */}
                        {/* <img src={require('../../assets/img/blog1')} /> */}
                        <img src={"../../assets/img/blog1"} />
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
                    {authorizationapp === ''

                        ?

                        <>
                        <li className="items"><a href="/le_rheu_front/MyProfile">Mon compte</a></li>
                        <li className="items"><a href="/le_rheu_front/sign_out">Log out</a></li>
                        <li className="items" onClick={logout}>Se Déconnecter</li>
                        </>
                        :
                        <>
                        <li className="items"><a href="/le_rheu_front/login">Se connecter</a></li>
                        <li className="items"><a href="/le_rheu_front/register">Nous rejoindre</a></li>
                        <li className="items"><a href="/le_rheu_front/disciplines">Nos disciplines</a></li>
                        <li className="items"><a href="/le_rheu_front/contact">Nous contacter</a></li>
                        </>
                    }
                    </ul>
                </nav>
            </div>
            )}
            <div className="disciplines">
                {disciplinesRendering}
            </div>
        </div>
    )
}

export default TopBar;