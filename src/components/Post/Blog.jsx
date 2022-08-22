import React, { useEffect } from "react";
import '../../assets/stylesheets/posts.css';
import axios from "axios";	
// import { API_URL } from "../../store/api_url";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useState } from "react";


const Blog = () => {
	const settings = {	
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		responsive:  [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					dots: true
				}
			},
			{
				breakpoint: 700,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
					
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState([]);
	const [changeOnHover, setChangeOnHover] = useState(false)

	useEffect(() => {
		getData();
	},[]);	
	
		const getData= () => {
			axios('http://localhost:3000/posts')
			.then(response  =>{
				setIsLoading(false);
				console.log("POSTS", response.data);

				if (response.data) {
					setPosts(response.data);
				} else{
					console.log("An error happened")
				}
			})
			.catch(error => {
				setIsLoading(false);
				console.log('An error occured', error);
			})
		}
		const cardBackground = (src) => ({
			backgroundImage: 'url(' + src + ')'
		  })


		function enterCard(e){
			console.log("targetvalue",e.target)
			setChangeOnHover(false) 
			console.log("Is hovering ?",changeOnHover)
		}

		function exitCard(e){
			setChangeOnHover(true) 
			console.log("Is hovering ?",changeOnHover)
		}	

	const postsRender = posts.map((post, index) => 
					<div key={index} className="blog card" onMouseOver={enterCard} onMouseLeave={exitCard} style={changeOnHover ? {color: `var(--secondary)`} : {color: `var(--third)`} }>
						<div className ="patternTop">
						</div>
						<div className ="patternBottom">
						</div>
						<Link to={"/posts/" + post.id} className="blog illustration" key={post.id} style={cardBackground(post.postBg)} >
							<div className="blog content">
								<p className="blog date">
									{post.created_at}
								</p>
								<p className="blog title">
									{post.title}
								</p>
							</div>
						</Link>
					{post.tag_id?.length > 0 && (
						<div className="blog topics">
							{post.tag_id.map((tag) => (
								<a href={post.tag_id} key={tag} className="blog labels">
									{tag}
								</a>
							))}
						</div>
						
					)}
						<div className ="patternBottom">
						</div>
					</div>
					
	);

	return (
		<div className="container posts">
			<h2 >
				<Link to={`/post`}>Actualité</Link>
			</h2>
			<Slider {...settings}>
				{postsRender}
      		</Slider>
		</div>
	)
};

export default Blog;