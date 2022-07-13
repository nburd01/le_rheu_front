import React from 'react';
import { useState } from "react";
import './SignUp.css'

const SignUp = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const data = {
    user: {},
    "email": email,
    "password": password
  };

  function FetchData(e){
    e.preventDefault();
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user:{
          email: email,
          password: password,
        }
      })
    })
    .then((response) => {
      console.log(response);
      response.json().then((data) => {
          console.log(data);
      });
  });

  }



  return(
    <div>
      <form onSubmit={FetchData}>
        <div className='Log-content'>
          <input name='email' placeholder='Email' value={data.user.email} onChange={(e) => setEmail(e.target.value)}/>
          <input name='password' type='password' placeholder='Mot de passe' value={data.user.password} onChange={(e) => setPassword(e.target.value)}/>
          <input className='log_button' type='submit' value="S'enregistrer"/> 
        </div>
      </form>
      <p>{email}</p>
    </div>
  )
}

export default SignUp;