import React from 'react';
import { useState } from "react";
import {useNavigate } from "react-router-dom";
import { useAtomValue } from "jotai";
import {jwtAtom} from '../../stores/auth'

import './SignUp.css'

const SignUp = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const jwt = useAtomValue(jwtAtom);

  const loggedIn = window.localStorage.getItem("isLoggedIn");


  const data = {
    user: {
    "email": email,
    "password": password,
    },
  };

  function FetchData(e){
    e.preventDefault();

    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        Authorization: jwt,

      },
        body: JSON.stringify(data)
    }).then((res) => {
      if (res.ok) {
        localStorage.setItem("token", res.headers.get("Authorization"));
        return res.json();
      } else {
        throw new Error(res);
      }
    }) 
    .then((response) => {
      navigate('/')
    })
    .then((json) => console.dir(json))
    .catch((err) => console.error(err));
  }



  return(
    <div>
      <div className="test">
        {loggedIn
        ?
        <p>You are logged in</p>
        :
        <form onSubmit={FetchData}>
          <div className='Log-content'>
            <input name='email' placeholder='Email' value={data.user.email} onChange={(e) => setEmail(e.target.value)}/>
            <input name='password' type='password' placeholder='Mot de passe' value={data.user.password} onChange={(e) => setPassword(e.target.value)}/>
            <input className='log_button' type='submit' value="S'enregistrer"/> 
          </div>
        </form>}
      </div>
    </div>
  )
}

export default SignUp;