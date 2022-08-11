import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import './Profile.css'
import {authorizationAtom} from '../../stores/auth'
import { useAtomValue } from "jotai";
import { API_URL } from '../../stores/api_url';


function Profile() {
  const id = useParams().id;
  const [userId,setUserId] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  // const [token, setToken] = useState("");

  useEffect(() => {
    fetch(API_URL + 'user/' +id , {
      method: "get",  
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(response => {
      setUserId(response.user_id);
      console.log("userthings",response.user.id)
      setEmail(response.user.email);
      console.log("userthings",response.user.email)
    });
  }, [id]);


  const submitData = e => {
    e.preventDefault();
    const data = {
      user: {
        first_name: firstName, 
        second_name: secondName,
        email: email,
      },
    };
    
    
    fetch(API_URL + "users/", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => {
      console.log("Ajout des names users");
  })
  .catch(err => console.error(err));
  };


  return (
    <div className="container">
      <h2>My Profile</h2>
      <p>Id #{id}</p>
      <p>Email :{email}</p>
      {/* <p>Token{token}</p> <br/> */}
      <button className="button" onClick={() => setShowForm(!showForm)}>Compléter mon profil</button>
      {showForm && 
      <div>
        <form method="get">
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"onChange={e => setFirstName(e.target.value)}/><br/>

          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" onChange={e => setSecondName(e.target.value)}/><br/>

          <input type="submit" onClick={submitData} value="Submit" />
        </form>
      </div>}
      {/* <form id="profileForm">
      </form> */}
    </div>
  )
}

export default Profile
