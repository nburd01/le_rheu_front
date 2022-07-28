import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';

function Post() {
  const id = useParams().id;
  const [postTitle, setPostTitle] = useState(" ");
  const [postContent, setPostContent] = useState(" ");
  const [userId, setUserId] = useState(" ");


  useEffect(() => {
    fetch("http://localhost:3000/posts/" + id, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        // Authorization: jwt,
      },
    })
      .then(response => response.json())
      .then(response => {
        setPostTitle(response.title);
        setPostContent(response.content);
        setUserId(response.user_id);
        // .catch(err => console.error(err));
      });
  }, [id]);

  return (
    <div className="container">
      <h2>Post {id}</h2>
      <div>{postTitle}</div>
      <div>{postContent}</div>
      <br />
      <div>User #{userId}</div>
      <br />
      <div>
        <h3>Comments</h3>
      </div>
    </div>
  )
}

export default Post