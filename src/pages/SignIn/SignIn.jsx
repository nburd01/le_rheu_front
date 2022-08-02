import React from 'react';
import { useState, useEffect } from "react";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { authorizationAtom } from "../../stores/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Logout from './SignOut'

const SignIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loggedIn = window.localStorage.getItem("isLoggedIn");
  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);


  const data = {
    "user": {
    "email": email,
    "password": password
    }
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
    // .then(response => response.json())
    .then(response => {
      console.log([...response.headers.get('authorization')].join('').split(" ")[1])
      setAuthorizationapp([...response.headers.get('authorization')].join(''));
      Cookies.set('token', [...response.headers.get('authorization')].join(''))
      console.log("token", response.token)
      console.log(response.headers.get("Authorization"));
      return response.json()

    })
    .then(response => {
      Cookies.set('token', [...response.headers.get('authorization')].join(''))
      window.localStorage.setItem("isLoggedIn", true);
      window.location.reload(true);
      return response.json()
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
              <p>Welcome {email}</p>
            </div>
            <div>
              <button onClick={Logout}>logout</button>
            </div>
          </div>
          : 
          <form onSubmit={FetchData}>
          <div className='Log-content'>
            <input name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
            <input name='password' type='password' placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)}/>
            <input className='log_button' type='submit' value="Se connecter"/> 
          </div>
        </form>
        }
        </div>
    </div>
  )
}

export default SignIn;