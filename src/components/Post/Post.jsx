import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';

function Post() {
  const id = useParams().id;
  const [postTitle, setPostTitle] = useState(" ");
  const [postContent, setPostContent] = useState(" ");


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
        // .catch(err => console.error(err));
      });
  }, [id]);

  return (
    <div>
      <div>Post {id}</div>
      <div>{postTitle}</div>
      <div>{postContent}</div>
    </div>
  )
}

export default Post