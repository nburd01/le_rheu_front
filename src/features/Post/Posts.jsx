import React, { useEffect } from "react";
import '../../assets/stylesheets/posts.css';
import axios from "axios";
// import { API_URL } from "../../store/api_url";


const Posts = () =>{

	const [isLoading, setIsLoading] = React.useState(true);
	const [posts, setPosts] = React.useState([]);

	useEffect(() => {
		getData();
	},[]);
	
		const getData= () => {
			axios('https://api.dailysmarty.com/' + 'posts').then(response  =>{
				setIsLoading(false);
				console.log("RES", response.data);

				if (response.data.posts) {
					setPosts(response.data.posts);
				} else{
					console.log("An error happened")
				}
			})
			.catch(error => {
				setIsLoading(false);
				console.log('An error occured', error);
			})
		}

	const postsRender = posts.map((post) => 
		
<div className="container post">

	<div className="blog block">
		<a href={post.url_for_post} target="_blank" rel="noreferrer" className="blog card" key={post.id}>
			<a href={post.url_for_post} target="_blank" rel="noreferrer" className="tag">
				{post.title}
			</a>
		</a>
		{post.associated_topics?.length > 0 && (
			<div className="blog topics">
				{post.associated_topics.map((topic) => (
					<a href={post.associated_topics} key={topic} className="blog labels">
						{topic}
					</a>
				))}
			</div>
		)}
	</div>
</div>

	);

	const content = isLoading ? (<div>Loading...</div>) : (<div>{postsRender}</div>)   

	return (
		<div className="container">
			<h2>Actualité</h2>
			<p>{content}</p>
		</div>
	)
};

export default Posts;