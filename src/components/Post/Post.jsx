import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import Comments from "../Comments/Comments";
import {jwtAtom} from '../../stores/auth'
import { useAtomValue } from "jotai";

function Post() {
  const id = useParams().id;
  const [postTitle, setPostTitle] = useState(" ");
  const [postContent, setPostContent] = useState(" ");
  const [userId, setUserId] = useState(" ");
  const [postTag, setPostTag] = useState(" ");
  const jwt = useAtomValue(jwtAtom);


  useEffect(() => {
    fetch("http://localhost:3000/posts/" + id, {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: jwt,
      },
    })
      .then(response => response.json())
      .then(response => {
        setPostTitle(response.title);
        setPostContent(response.content);
        setUserId(response.user_id);
        setPostTag(response.tag_id);
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
      <div className="tag">Tag {postTag}</div>
      <br />
      <div>
        {<Comments/>}
      </div>
    </div>
  )
}

export default Post