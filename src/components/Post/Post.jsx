import React, { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import {authorizationAtom} from '../../stores/auth'
import { useAtomValue } from "jotai";
import { API_URL } from '../../stores/api_url';

function Post() {
  const id = useParams().id;
  const [postTitle, setPostTitle] = useState(" ");
  const [postContent, setPostContent] = useState(" ");
  const [userId, setUserId] = useState(" ");
  const [postTag, setPostTag] = useState(" ");
  const [postBg, setPostBg] = useState(" ");
  const jwt = useAtomValue(authorizationAtom);


  useEffect(() => {
    fetch(`${API_URL}posts/` + id, {
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
        setPostBg(response.postBg);
        setUserId(response.user_id);
        setPostTag(response.tag_id);
        // .catch(err => console.error(err));
      });
  }, [id]);

 console.log("postTitle",postTitle)

  return (
    <div className="container">
      <h2>{postTitle}</h2>
      <div>Content{postContent}</div>

        <img src={postBg} alt="discipline_image"></img>

      <br/>
      {/* <div>User #{userId}</div> */}
      <div className="tag">Tag {postTag}</div>
      <br/>
      <div>
      </div>
      <p id="demo"></p>
    </div>
  )
}

export default Post