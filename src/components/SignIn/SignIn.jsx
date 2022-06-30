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
        if (result.token){
        localStorage.setItem('token', result.token)
        this.setState({
            user: result.user
            })
        }
        else {
            this.setState({
                error: result.error
            })
        }
    })
  }

  return(
    <div>
      <form onSubmit={FetchData}>
        <h1>Sign In Form</h1>
        <label>Email :</label>
        <input name='email' value={data.user.email} onChange={(e) => setEmail(e.target.value)}/>
        <label>Password :</label>
        <input name='password' type='password' value={data.user.password} onChange={(e) => setPassword(e.target.value)}/>
        <input type='submit' value='Authenticate'/> 
      </form>
    </div>
  )
}

export default SignIn;