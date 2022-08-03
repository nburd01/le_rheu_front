import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useSetAtom, useAtom } from 'jotai';
import {userAtom, authorizationAtom} from '../../stores/auth'
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';
import './SignUp.css'


const Signup = () => {

  const navigate = useNavigate();
  const setUser = useSetAtom(userAtom);
  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


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
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': authorizationapp
      },

      body: JSON.stringify(data)
    })
    .then((response) => {
      setAuthorizationapp(response.headers.get('Authorization'));
      console.log(response.headers.authorization)
      Cookies.set('token', response.headers.get('Authorization'));
      console.log("Are there cookies ? :", 'token', response.headers.get('Authorization') )
      return response.json();
    })

    .then((response) => {
      setUser(response.user.id);

      Cookies.set('id', response.user.id);
      console.log("What the cookies for user ID ? :",  Cookies.set('id', response.user.id) )
      Cookies.set('fulluser', JSON.stringify(response.user));
      console.log("What is the fulluser ? :", 'fulluser', JSON.stringify(response.user) )

      navigate('/');
    })
    .catch((error) => console.log(error));
  }
  
  return (
    <div className="container">
      <div >
        {authorizationapp === ''
        ?
        <form onSubmit={FetchData}>
          <div className='Log-content'>
            <input name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input name='password' type='password' placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)}/>
            <input className='log_button' type='submit' value="S'enregistrer"/> 
          </div>
        </form>
        :
        <p>You are logged in</p>
      }
      </div>
    </div>
  );
}

export default Signup;