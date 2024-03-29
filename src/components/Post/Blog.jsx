	import React, { useEffect, useState } from "react";
import '../../assets/stylesheets/posts.css';
import axios from "axios";	
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Polkadots from '../../assets/img/Polkadots.svg'
import flecheDroite from "../../assets/img/flecheDroite.svg"
import flecheGauche from "../../assets/img/flecheGauche.svg"


const Blog = () => {
	const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <img src={flecheGauche} alt="prevArrow" {...props} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <img src={flecheDroite} alt="Arrow" {...props} />
  );

	const settings = {	
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
		responsive:  [
			{
				breakpoint: 1100,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 776,
				settings: {
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
					<div key={index} className="blog card" onMouseOver={enterCard} onMouseLeave={exitCard} style={changeOnHover ? {color: `var(--secondary)`} : {color: `var(--primary)`} }>
						<Link to={"/posts/" + post.id} className="blog illustration" key={post.id} >
						<img src={post.postBg} alt="discipline_image"></img>
						<div className ="patternBottom">
						</div>
						<div className ="patternCenter">
							<img src={Polkadots} alt='test'/>
						</div>
							<div className="blog content">
								<p className="blog date">
									{post.created_at}
								</p>
								<p className="blog title">
									{post.title}
								</p>
							</div>
						</Link>
					{/* {post.tag_id?.length > 0 && (
						<div className="blog topics">
							{post.tag_id.map((tag) => (
								<a href={post.tag_id} key={tag} className="blog labels">
									{tag}
								</a>
							// ))}
						</div> */}
						
					{/* )} */}
					</div>
					
	);

	return (
		<div className="container posts">
			
			{/* <h2 >
				<Link to={`/post`}>Actualité</Link>
			</h2> */}
			<Slider {...settings}>
				{postsRender}
      		</Slider>
		</div>
	)
};

export default Blog;