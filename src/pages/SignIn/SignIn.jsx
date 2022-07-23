import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import {userAtom, authorizationAtom} from '../../stores/auth';
import Cookies from 'js-cookie';
import Logout from './SignOut'

const SignIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loggedIn = window.localStorage.getItem("isLoggedIn");


  const data = {
    user: {},
    "email": email,
    "password": password
  };

  function FetchData(e){
    e.preventDefault();
    fetch('http://localhost:3000/users/sign_in', {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      window.localStorage.setItem("isLoggedIn", true);
      window.location.reload(true);
    })
  }

  return(
    <div>
     
      <div className="test">
          {loggedIn 
          ?
          <div className="container">
            <div>
              <h1>You are logged in</h1>
            </div>
            <div>
              <p>Welcome {data.user.email}</p>
            </div>
            <div>
              <button onClick={Logout}>logout</button>
            </div>
          </div>
          : 
          <form onSubmit={FetchData}>
          <div className='Log-content'>
            <input name='email' placeholder='Email' value={data.user.email} onChange={(e) => setEmail(e.target.value)}/>
            <input name='password' type='password' placeholder='Mot de passe' value={data.user.password} onChange={(e) => setPassword(e.target.value)}/>
            <input className='log_button' type='submit' value="Se connecter"/> 
          </div>
        </form>
        }
        </div>
    </div>
  )
}

export default SignIn;