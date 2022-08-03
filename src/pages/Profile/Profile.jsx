import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import './Profile.css'
import {authorizationAtom} from '../../stores/auth'
import { useAtomValue } from "jotai";

function Profile() {
  const id = useParams().id;
  const [userId,setUserId] = useState(" ");
  const jwt = useAtomValue(authorizationAtom);


  useEffect(() => {
    fetch("http://localhost:3000/member-data/", {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
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
    </div>
  )
}

export default Profile
