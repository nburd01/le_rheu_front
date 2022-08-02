import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import {userAtom, authorizationAtom} from '../../stores/auth'
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';


const SignIn = () => {


  const loggedIn = window.localStorage.getItem("isLoggedIn");

  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [user, setUser] = useAtom(userAtom);
  const [authorization, setAuthorization] = useAtom(authorizationAtom);




  function FetchData(e){
    
    e.preventDefault();
    
    const data = {
      "user" : {
        "email": email,
        "password": password
      }
    };
    
    fetch(API_URL + 'users/sign_in', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      console.log(response.headers.get("Authorization"));
      setAuthorization(response.headers.get('authorization'));
      Cookies.set('token', response.headers.get('authorization'));
      return response.json();
    })
    .then((response) => {
      // console.log(response);
      setUser(response.user.id);
      Cookies.set('id', response.user.id);
      Cookies.set('fulluser', JSON.stringify(response.user));
      window.localStorage.setItem("isLoggedIn", true);
    })
    .catch((error) => console.log(error));
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