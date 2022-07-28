import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';


function Comments() {
  const id = useParams().id;
  const [commentContent, setCommentContent] = useState(" ");
  const [userId, setUserId] = useState(" ");
  const [postId, setPostId] = useState(" ");


    useEffect(() => {
        fetch("http://localhost:3000/comments/" + id, {
          method: "get",
          headers: {
            "Content-Type": "application/json",
            // Authorization: jwt,
          },
        })
          .then(response => response.json())
          .then(response => {
            setCommentContent(response.content);
            setUserId(response.user_id);
            console.log("comments", setUserId)
            setPostId(response.post_id);
            // .catch(err => console.error(err));
          });
      }, [id]);

  return (
    <div className="container">
    <h2>Comments</h2>
    <p> {commentContent}</p>
    <br />
    <p>By user #{userId}</p>
    </div>
  )
}

export default Comments