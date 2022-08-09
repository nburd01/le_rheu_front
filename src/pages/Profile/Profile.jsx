import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import './Profile.css'
import {authorizationAtom} from '../../stores/auth'
import { useAtomValue } from "jotai";

function Profile() {
  const id = useParams().id;
  const [userId,setUserId] = useState(" ");
  const [showForm, setShowForm] = useState(false);

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


  return (
    <div className="container">
      <h2>My Profile</h2>
      <h3>User #{id}</h3>
      <button className="button" onClick={() => setShowForm(!showForm)}>Compléter mon profil</button>
      {showForm && 
      <div>
        <form action="/action_page.php" method="get">
          <label for="fname">First name:</label>
          <input type="text" id="fname" name="fname"/><br/>
          <label for="lname">Last name:</label>
          <input type="text" id="lname" name="lname"/><br/>
          <input type="submit" value="Submit"/>
        </form>
      </div>}
      {/* <form id="profileForm">
      </form> */}
    </div>
  )
}

export default Profile
