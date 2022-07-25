import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import {userAtom, authorizationAtom} from '../../stores/auth';  
import Cookies from 'js-cookie';
import './Topbar.css';
import '../../assets/stylesheets/containers.css';
import '../../assets/stylesheets/buttons.css';
import '../../assets/stylesheets/img.css';
import '../../assets/stylesheets/font.css';
import '../../assets/stylesheets/main.css';
import axios from "axios";
import SignOut from '../../pages/SignIn/SignOut';



const TopBar = () => {

    const loggedIn = window.localStorage.getItem("isLoggedIn");
    const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);
    const [id, setId] = useAtom(userAtom);
    const navigate = useNavigate();
    const [toggleMenu, SetToggleMenu] = useState(false)
    const toggleNav = () => {
        SetToggleMenu(!toggleMenu)
    }

    const logout = () =>{
        fetch('http://localhost:3000/users/sign_out', {
          method: 'delete',
          headers: {
            // 'Authorization': authorizationapp,
            'Content-Type': 'application/json'
          }
        })
      console.log('authorizationapp',authorizationapp)

        .then((response) => {return response.json()})
        .then((response) => {
          setAuthorizationapp('');
          setId('');
          Cookies.set('id', "")
          Cookies.set('token', "")
          navigate('/')
        })
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
                    {loggedIn

                    ?
                    <>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to={'/myprofile/' + id}>Mon Profil</Link></li>
                    <li><SignOut /></li>
                    </>
                    :
                    <>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/register'>S'inscrire</Link></li><li><Link to='/login'>Se Connecter</Link></li>
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
                    {!loggedIn

                        ?
                        <>
                        <li className="items"><a href="/le_rheu_front/login">Se connecter</a></li>
                        <li className="items"><a href="/le_rheu_front/register">Nous rejoindre</a></li>
                        <li className="items"><a href="/le_rheu_front/disciplines">Nos disciplines</a></li>
                        <li className="items"><a href="/le_rheu_front/contact">Nous contacter</a></li>
                        </>
                        :
                        <>
                        <li className="items"><a href="/le_rheu_front/MyProfile">Mon compte</a></li>
                        <li className="items"><a href="/le_rheu_front/sign_out">Log out</a></li>
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