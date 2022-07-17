import React, { useEffect } from "react";
import '../../assets/stylesheets/posts.css';
import axios from "axios";	
// import { API_URL } from "../../store/api_url";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Posts = () =>{
	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
	};
	const [isLoading, setIsLoading] = React.useState(true);
	const [posts, setPosts] = React.useState([]);

	useEffect(() => {
		getData();
	},[]);	
	
		const getData= () => {
			axios('https://api.dailysmarty.com/posts')
			.then(response  =>{
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
					<a href={post.date} target="_blank" rel="noreferrer" className="blog date">
						{/* {post.title} */}
						<p>050293</p>
					</a>
					<a href={post.url_for_post} target="_blank" rel="noreferrer" className="blog title">
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
			<Slider {...settings}>
				{postsRender}
      </Slider>
		</div>
	)
};

export default Posts;