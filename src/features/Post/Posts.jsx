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

	<div class="blog block">
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


// class Posts extends React.Component {
// ---------------INITIALISE THIS STATE----------------------
	// // Constructor
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		posts: [],
	// 		DataisLoaded: false
	// 	};
	// }

// // ----------------FETCH------------------------
// 	// ComponentDidMount is used to
// 	// execute the code
// 	componentDidMount() {
// 		fetch(
//       "API_URL_LOCAL")
//         .then((res) => res.json())
//         .then((json) => {
//           this.setState({
//             posts: json,
//             DataisLoaded: true
//           });
// 			})
// 	}

// // ---------------METHODE RENDER AVEC CORPS DE LA FONCTION---------------------

// 	render() {
// 		const { DataisLoaded, posts } = this.state;


// // -----------------HTML-----------------------
// 	return (

//   <div class="container">

//     <h2>Actualité</h2>
//     <div class="blog-block">
      
//       <div class="blog-card"> 
//         <div class="tag">

// {/* --------ITERATION-------- */}
//        {
//          posts.map(
//           (item) => (
//            <ol key = { posts.id } >
// 					{ posts.title },

// 					</ol>
// 				))
// 			}
// {/* --------END ITERATION-------- */}

//         </div>
//       </div>
//     </div>
//   </div>

// 	);
// }
// // ---------------FIN RENDER AVEC CORPS DE LA FONCTION---------------------

// }

// export default Posts; 