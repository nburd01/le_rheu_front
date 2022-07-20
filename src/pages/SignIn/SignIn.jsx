import React from 'react';
import { useState } from "react";

const SignIn = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
      body: JSON.stringify({
        user:{
          email: email,
          password: password,
        }
      })
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
      <form onSubmit={FetchData}>
        <div className='Log-content'>
          <input name='email' placeholder='Email' value={data.user.email} onChange={(e) => setEmail(e.target.value)}/>
          <input name='password' type='password' placeholder='Mot de passe' value={data.user.password} onChange={(e) => setPassword(e.target.value)}/>
          <input className='log_button' type='submit' value="Se connecter"/> 
        </div>
      </form>
      <p>Vous n'avez pas encore de compte avec nous :  </p>
    </div>
  )
}

export default SignIn;