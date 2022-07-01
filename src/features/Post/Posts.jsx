import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../../assets/stylesheets/posts.css';



class Posts extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(
      "http://localhost:3000/posts")
        .then((res) => res.json())
        .then((json) => {
          this.setState({
            items: json,
            DataisLoaded: true
          });
			})
	}


	render() {
		const { DataisLoaded, items } = this.state;


	return (
  <Link to={'/house/' + post.id} post={post}>

  <div class="container">

    <h2>Actualité</h2>
    <div class="blog-block">
      <div class="blog-card"> 
        <div class="tag">
       {
         items.map(
           (item) => (
             <ol key = { item.id } >
					{ item.title },

					</ol>
				))
			}
        </div>
        <div class="title">
        {
          items.map((item) => (
            <ol key = { item.id } >
					{ item.content },
					</ol>
				  ))
			  } 
        </div>
      </div>
    </div>
  </div>

  </Link>

	);
}
}

export default Posts;
