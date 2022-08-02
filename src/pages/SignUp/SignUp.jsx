import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSetAtom } from 'jotai';
import {userAtom, authorizationAtom} from '../../stores/auth'
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';
import './SignUp.css'


const Signup = () => {

  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);
  const setAuthorization = useSetAtom(authorizationAtom);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const loggedIn = window.localStorage.getItem("isLoggedIn");

  const FetchData = (e) => {
  
    e.preventDefault();

    const data = {
      "user": {
        "email": email,
        "password": password
      }
    };

    fetch(`${API_URL}users`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => {
      setAuthorization(response.headers.get('authorization'));
      Cookies.set('token', response.headers.get('authorization'));
      return response.json();
    })
    .then((response) => {
      setUser(response.user.id);
      Cookies.set('id', response.user.id);
      Cookies.set('fulluser', JSON.stringify(response.user));
      navigate('/');
    })
    .catch((error) => console.log(error));
  }
  
  return (
    <div>
      <div className="test">
        {loggedIn
        ?
        <p>You are logged in</p>
        :
        <form onSubmit={FetchData}>
          <div className='Log-content'>
            <input name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input name='password' type='password' placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)}/>
            <input className='log_button' type='submit' value="S'enregistrer"/> 
          </div>
        </form>}
      </div>
    </div>
  );
}

export default Signup;