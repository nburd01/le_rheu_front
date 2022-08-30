import React, { useEffect, useState } from "react";
import axios from "axios";	
import './heroBlog.css'


export const HeroBlog = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
		getData();
	},[]);	
	
		const getData= () => {
			axios('http://localhost:3000/posts')
			.then(response  =>{
				console.log("POSTS", response.data);

				if (response.data) {
					setPosts(response.data);
				} else{
					console.log("An error happened")
				}
			})
			.catch(error => {
				console.log('An error occured', error);
			})
		}
	const truncateString = (str, num) => {
		if (str?.length > num) {
			return str.slice(0, num) + '...';
		} else {
			return str;
		}
	};

    const heroBlogRender = posts.map((post, index) => 
    <div className="heroBlog" key={index} >
      <img className="heroImage" src={post.postBg} alt="discipline_image"></img>
      <h2 className="heroTitle">
        {post.title}
      </h2>
      <p className="heroContent">{truncateString(post?.content, 150)}</p>
    </div>
	);

  const lastPost = heroBlogRender[0];


  return (
    <div >{lastPost}</div>
  )
}
