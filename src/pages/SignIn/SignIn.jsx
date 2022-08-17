import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAtom } from 'jotai';
import {userAtom, authorizationAtom, adminAtom, cookieAtom} from '../../stores/auth'
import { useSetAtom, useAtomValue } from "jotai";
import { API_URL } from '../../stores/api_url';
import Cookies from 'js-cookie';


const SignIn = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useAtom(userAtom);
  const [authorizationapp, setAuthorizationapp] = useAtom(authorizationAtom);
  const setAdmin = useSetAtom(adminAtom);
  const cookiechoice = useAtomValue(cookieAtom);




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
      setAuthorizationapp([...response.headers.get('authorization')].join(''));
      Cookies.set('token', [...response.headers.get('authorization')].join(''))
      Cookies.set('fulluser', [...response.headers.get('authorization')].join(''))
      Cookies.set('admin', [...response.headers.get('authorization')].join(''))
      console.log("This is the login bearer :",[...response.headers.get('authorization')].join('').split(" ")[1])
      return response.json()
    })

    .then((response) => {
      setUser(response.user.id)
      setAdmin(response.user.admin.toString());

      Cookies.set('id', response.user.id);
      Cookies.set('fulluser', JSON.stringify(response.user));
      Cookies.set("admin", response.user.admin.toString());
      navigate('/')
    })
  }  

  return(
    <div className="container">

      <div >
          {authorizationapp === "" 
          ?
          <form onSubmit={FetchData}>
            <div className='Log-content'>
              <input name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
              <input name='password' type='password' placeholder='Mot de passe' onChange={(e) => setPassword(e.target.value)}/>
              <input className='log_button' type='submit' value="Se connecter"/> 
            </div>
          </form>        
          : 
         <div className="container">
            <div>
              <h1>You are logged in</h1>
            </div>
            <div>
              <p>Welcome {email}</p>
            </div>
          </div>
        }
        </div>
    </div>
  )
}

export default SignIn;