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

  useEffect(() => {
    fetch("http://localhost:3000/member-data/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => response.json())
    .then(response => {
      setUserId(response.user_id);
    });
  }, [id]);

  const submitData = e => {
    // setIsLoading(true);
    e.preventDefault();
    const data = {
      user: {
        first_name: firstName, 
        second_name: secondName,
      },
    };
    fetch(API_URL + "users", {
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
      <h3>User #{id}</h3>
      <button className="button" onClick={() => setShowForm(!showForm)}>Compléter mon profil</button>
      {showForm && 
      <div>
        <form onClick={submitData} action="/action_page.php" method="get">
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"onChange={e => setFirstName(e.target.value)}/><br/>

          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname" onChange={e => setSecondName(e.target.value)}/><br/>

          <input type="submit" value="Submit"/>
        </form>
      </div>}
      {/* <form id="profileForm">
      </form> */}
    </div>
  )
}

export default Profile
