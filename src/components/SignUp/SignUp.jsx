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
    .then(response => response.json())
  }



  return(
    <div>
      <form onSubmit={FetchData}>
        <h1>Sign Up Form</h1>
        <label>Email :</label>
        <input name='email' value={data.user.email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Password :</label>
        <input name='password' type='password' value={data.user.password} onChange={(e) => setPassword(e.target.value)}/>
        <input type='submit' value='Register'/> 
      </form>
      <h1>{email}</h1>
    </div>
  )
}

export default SignUp;