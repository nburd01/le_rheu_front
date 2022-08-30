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
import { API_URL } from '../../stores/api_url';
import {authorizationAtom, userAtom} from '../../stores/auth'
import { useAtom, useAtomValue } from 'jotai';


const TopBar = () => {
    const jwt = useAtomValue(authorizationAtom);
    const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);
    const [id, setId] = useAtom(userAtom);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = React.useState(true);
    const [discipline, setDiscipline] = React.useState([]);


    useEffect(() => {
        getDiscipline();
            },[]);

        const getDiscipline = () => {
            axios(
                `${API_URL}disciplines`) 
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
            fetch(`${API_URL}users/sign_out   `, {
              method: 'delete',
              headers: {
                'Authorization': authorizationapp,
                'Content-Type': 'application/json'
              }
            })
            .then((response) => {return response.json()})
            .then((response) => {
              setAuthorizationapp("");
              console.log("authorizationapp test", authorizationapp)
              setId("");
              Cookies.remove('id')
              Cookies.remove('token')
              Cookies.remove('fulluser')
              Cookies.remove('admin')
              navigate('/')
            })
          }

        const disciplineRender = discipline.map((discipline, index) => 
        <nav key={index}>
            <Link to ={discipline.discipline_root} className="discipline">{discipline.name}</Link>  
        </nav>
        );

        const disciplinesRendering = isLoading ? <i className="fa-regular fa-loader fa-spin"></i> : disciplineRender

    return (
        <div className="topbar">
            <div className="top">

                
                <div className="menu">

                <ul>
                {authorizationapp === ''?
                    <>
                    <li key="register"><Link to='/register'>S'inscrire</Link></li>
                    <li key="login"><Link to='/login'>Se Connecter</Link></li>    

                    </>
                    :
                    <>
                    <li key="profile"><Link to={'/profil/' + id}>Profil</Link></li>
                    <li key="logout"><Link to={'/'} onClick={logout}>Se deconnecter</Link></li>
                    </>
         
                }
                </ul>
                </div>
                
                <div className="logo">
                    <a className='logo-link' href="/le_rheu_front/">
                        <img className="lerheu-logo" src={require("../../assets/img/logo-leRheu.png")} alt={"S.C. Le Rheu"}/>
                    </a>
                </div>
                <div className='top-link'>
  
                </div>

            </div>

            <div className='burger-div'>
                <nav>
                <label>
                <input type="checkbox" />
                    <span className="menu"> <span className="hamburger"></span> </span>
                    <ul className="list">
                    {authorizationapp === ''

                        ?
                        <>
                        <li key="li_nav1" className="items"><a href="/le_rheu_front/login">Se connecter</a></li>
                        <li key="li_nav2" className="items"><a href="/le_rheu_front/register">Nous rejoindre</a></li>
                        <li key="li_nav3" className="items"><a href="/le_rheu_front/disciplines">Nos disciplines</a></li>
                        <li key="li_nav4" className="items"><a href="/le_rheu_front/contact">Nous contacter</a></li>
                        </>

                        :

                        <>
                        <li key="li_nav5" className="items"><Link to={'/profil/' + id}>Profil</Link></li>
                        <li key="li_nav6" className="items" onClick={logout}>Se Déconnecter</li>
                        </>

                    }
                    </ul>
                    </label>
                </nav>
            </div>

            <div className="disciplines">
                {disciplinesRendering}
            </div>
        </div>
    )
}

export default TopBar;