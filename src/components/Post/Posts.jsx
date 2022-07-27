import React, { useEffect } from "react";
import '../../assets/stylesheets/posts.css';
import axios from "axios";	
// import { API_URL } from "../../store/api_url";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const Posts = () => {
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
	const [isLoading, setIsLoading] = React.useState(true);
	const [posts, setPosts] = React.useState([]);

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

	const postsRender = posts.map((post) => 
			<div className="container post">	
				<div className="blog block">
					<div className="blog bg" style={cardBackground(post.post_url)}>
						<Link to={post.id} target="_blank" rel="noreferrer" className="blog card" key={post.id}>
							<a href={post.date} target="_blank" rel="noreferrer" className="blog date">
								<p>{post.created_at}</p>
							</a>
							<a href={post.id} target="_blank" rel="noreferrer" className="blog title">
								{post.title}
							</a>
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
					</div>
				</div>
			</div>
	);

	// const content = isLoading ? (<div>Loading...</div>) : (<div>{postsRender}</div>)   

	return (
		<div className="container posts">
			<h2>
				<Link to={`/post`}>Actualité</Link>
			</h2>
			<Slider {...settings}>
				{postsRender}
      		</Slider>
		</div>
	)
};

export default Posts;